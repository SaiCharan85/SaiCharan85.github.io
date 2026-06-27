import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { portfolioProfiles, profileSlugs } from "../src/data/portfolioData";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}

async function readRepoFile(relativePath: string) {
  return readFile(path.join(rootDir, relativePath), "utf8");
}

function assertPortfolioData() {
  assert(profileSlugs.length === 2, "Sai portfolio should expose exactly two profile routes.");
  assert(profileSlugs.includes("ai-ml"), "AI/ML profile route is missing.");
  assert(profileSlugs.includes("datascientist"), "Data scientist profile route is missing.");

  for (const profileSlug of profileSlugs) {
    const profile = portfolioProfiles[profileSlug];
    assert(profile, `Missing portfolio profile for ${profileSlug}.`);

    const projectIds = profile.projects.map((project) => project.id);
    assert(new Set(projectIds).size === projectIds.length, `${profileSlug} has duplicate project ids.`);
    assert(
      profile.personal.email === "yarlagadda.sr@northeastern.edu",
      `${profileSlug} must use Sai's Northeastern email.`
    );
    assert(
      profile.personal.github === "https://github.com/SaiCharan85",
      `${profileSlug} must link to Sai's GitHub profile.`
    );
    assert(
      profile.personal.linkedin === "https://www.linkedin.com/in/sri-sai-charan-yarlagadda-ab073120b/",
      `${profileSlug} must link to Sai's LinkedIn profile.`
    );
    assert(profile.personal.location === "Boston, MA", `${profileSlug} must use privacy-light Boston location.`);
    assert(
      !JSON.stringify(profile).includes("Ganesh") &&
        !JSON.stringify(profile).includes("Rutgers") &&
        !JSON.stringify(profile).includes("Shiftelix") &&
        !JSON.stringify(profile).includes("makkinaganesh25"),
      `${profileSlug} still contains old portfolio identity copy.`
    );
  }

  const aiMlProjects = portfolioProfiles["ai-ml"].projects.map((project) => project.id);
  assert(
    aiMlProjects.includes("innovateai-rag-literature-review-engine"),
    "AI/ML profile must include InnovateAI."
  );
  assert(
    aiMlProjects.includes("therabot-emotion-aware-mental-health-ai"),
    "AI/ML profile must include TheraBot."
  );
  assert(
    aiMlProjects.includes("multimedai-medical-intelligence-platform"),
    "AI/ML profile must include MultiMedAI."
  );

  const dataScienceProjects = portfolioProfiles.datascientist.projects.map((project) => project.id);
  assert(
    dataScienceProjects.includes("pneumonia-detection-cnn-transfer-learning"),
    "Data scientist profile must include pneumonia detection."
  );
  assert(
    dataScienceProjects.includes("credit-card-fraud-detection-anomaly-detection"),
    "Data scientist profile must include credit card fraud detection."
  );
  assert(
    dataScienceProjects.includes("customer-churn-predictive-classification-azure"),
    "Data scientist profile must include customer churn."
  );
  assert(
    dataScienceProjects.includes("walmart-sales-forecasting-time-series-foundation-models"),
    "Data scientist profile must include Walmart forecasting."
  );

  const educationSchools = portfolioProfiles["ai-ml"].education.map((entry) => entry.school);
  const northeasternEducation = portfolioProfiles["ai-ml"].education.find((entry) => entry.school === "Northeastern University");
  assert(educationSchools.includes("Northeastern University"), "Northeastern education entry is missing.");
  assert(
    educationSchools.includes("Kalinga Institute of Industrial Technology"),
    "Kalinga Institute of Industrial Technology education entry is missing."
  );
  assert(
    northeasternEducation?.degree === "Master of Science in Data Science",
    "Northeastern degree must use Master of Science in Data Science."
  );
  assert(portfolioProfiles["ai-ml"].personal.resume.endsWith("Resume_AI_ML.pdf"), "AI/ML profile must link the AI/ML resume.");
  assert(
    portfolioProfiles.datascientist.personal.resume.endsWith("Resume_Data_Scientist.pdf"),
    "Data scientist profile must link the data scientist resume."
  );
}

async function assertLayoutContracts() {
  const layout = await readRepoFile("src/components/Layout.tsx");
  const footerClassMatch = layout.match(/<footer className="([^"]+)"/);
  assert(footerClassMatch, "Could not find Footer root className.");
  const footerClassName = footerClassMatch[1];

  assert(footerClassName.includes("bg-black"), "Footer root must keep an opaque black background.");
  assert(!/min-h-\[.*vh.*\]/.test(footerClassName), "Footer root must stay compact; do not add viewport-height min-height to it.");
  assert(!footerClassName.includes("backdrop-blur"), "Footer should stay clean and opaque, not glassy over the 3D scene.");
  assert(!layout.includes("Previous Site"), "Visible Previous Site nav/footer label must not return.");
  assert(!layout.includes("Previous site archive"), "Visible Previous site archive footer label must not return.");

  const home = await readRepoFile("src/pages/Home.tsx");
  assert(
    !home.includes("scrollViewportState.el.scrollHeight / viewportHeight"),
    "Canvas scroll sync must not derive Drei pages from the native ScrollControls DOM height."
  );

  const contactIndex = home.indexOf('data-home-scroll-section="contact"');
  const footerIndex = home.indexOf('data-home-scroll-section="footer"');
  assert(contactIndex > -1 && footerIndex > -1 && contactIndex < footerIndex, "Home page must keep contact immediately before footer.");

  const contactSectionMatch = home.match(/<section\s+id="contact"[\s\S]*?data-home-scroll-section="contact"[\s\S]*?className="([^"]+)"/);
  const footerSectionMatch = home.match(/<section\s+aria-label="Footer"[\s\S]*?data-home-scroll-section="footer"[\s\S]*?className="([^"]+)"/);
  assert(contactSectionMatch, "Could not find contact section className.");
  assert(footerSectionMatch, "Could not find footer section className.");

  const contactSectionClassName = contactSectionMatch[1];
  const footerSectionClassName = footerSectionMatch[1];
  const forbiddenSpacerPattern = /\bmin-h-screen\b|\bmin-h-\[[^\]]*vh[^\]]*\]|\bpb-(3[2-9]|[4-9][0-9])\b|\bmd:pb-(3[2-9]|[4-9][0-9])\b|\blg:pb-(3[2-9]|[4-9][0-9])\b/;

  assert(footerSectionClassName.includes("bg-black"), "Footer wrapper must keep an opaque black background.");
  assert(
    !forbiddenSpacerPattern.test(contactSectionClassName),
    "Contact wrapper must not add viewport-height sizing or large bottom spacer padding before the footer."
  );
  assert(
    !forbiddenSpacerPattern.test(footerSectionClassName),
    "Footer wrapper must stay compact; do not use viewport-height sizing or fake spacer padding after the footer."
  );
}

async function assertHomeMotionContracts() {
  const homeMotion = await readRepoFile("src/components/HomeMotion.tsx");
  const home = await readRepoFile("src/pages/Home.tsx");
  const homeSections = await readRepoFile("src/components/HomeSections.tsx");
  const homeSceneData = await readRepoFile("src/data/homeSceneData.ts");
  const lowerScene = await readRepoFile("src/components/3d/HomeLowerScene.tsx");
  const storyScene = await readRepoFile("src/components/3d/StoryScene.tsx");

  assert(homeMotion.includes("export function ScrollRevealTile"), "ScrollRevealTile primitive must exist.");
  assert(homeMotion.includes("useReducedMotion"), "ScrollRevealTile must keep a reduced-motion path.");
  assert(homeMotion.includes("useScroll"), "ScrollRevealTile must use scroll-linked progress for parallax.");
  assert(homeMotion.includes("useTransform"), "ScrollRevealTile must map scroll progress into parallax transforms.");
  assert(homeMotion.includes("useSpring"), "ScrollRevealTile parallax should stay spring-smoothed.");
  assert(homeMotion.includes("useInView"), "ScrollRevealTile must pop once as tiles enter the Drei viewport.");
  assert(homeMotion.includes("data-home-reveal-tile"), "Rendered reveal tiles need a stable test/debug marker.");
  assert(homeMotion.includes("viewportRoot"), "ScrollRevealTile must accept the Drei ScrollControls viewport root.");
  assert(homeMotion.includes("ENABLE_SCROLL_PARALLAX = false"), "ScrollRevealTile parallax observers should stay disabled for the lightweight homepage.");
  assert(homeMotion.includes('willChange: visible ? "auto" : "opacity, transform"'), "ScrollRevealTile must release will-change after reveal.");
  assert(home.includes("ScrollRevealTile"), "Home must apply ScrollRevealTile to homepage surfaces.");
  assert(homeSections.includes("ScrollRevealTile"), "Homepage section components must apply ScrollRevealTile to cards and rows.");
  assert(home.includes("useLitePerformanceMode"), "Home must keep lightweight performance mode for smoother scrolling.");
  assert(home.includes("damping={isLitePerformanceMode ? 0.08 : 0.14}"), "ScrollControls damping must stay responsive.");
  assert(home.includes('scrollViewport.addEventListener("scroll", scheduleHeroStateMeasure, { passive: true })'), "Hero DOM measurement must be scroll-driven, not a permanent frame loop.");
  assert(home.includes("northeastern-education"), "Northeastern education 3D scene range must be measured from the first education tile.");
  assert(home.includes("viewportHeight * 1.05"), "Northeastern education scene must start before the first education tile reaches the center gap.");
  assert(home.includes("contact-panel"), "Contact 3D scene must be anchored to the contact panel.");
  assert(home.includes("viewportHeight * 0.08"), "Contact 3D scene must not fade in until the contact panel enters the viewport.");
  assert(homeSections.includes('sceneAnchor={idx === 0 ? "northeastern-education" : undefined}'), "Northeastern education tile must expose a scene anchor.");
  assert(homeSceneData.includes("signalLines"), "Contact scene data must use bounded communication/signal lines.");
  assert(homeSceneData.includes("coreOffset"), "Education scene data must anchor the academic core, not a fly-through object.");
  const educationSceneData = homeSceneData.match(/education: \{[\s\S]*?\n  contact:/)?.[0] ?? "";
  assert(!educationSceneData.includes('tone: "emerald"'), "Education scene should avoid the old green/teal visual motif.");
  assert(lowerScene.includes("ProductOrbitSystem"), "Projects scene must keep product-system orbit nodes.");
  assert(lowerScene.includes("DatabaseShardStack"), "Projects scene must keep database shard geometry.");
  assert(lowerScene.includes("ServiceGrid"), "Experience scene must keep enterprise service-grid geometry.");
  assert(lowerScene.includes("ObservabilityPulseStack"), "Experience scene must keep observability pulse geometry.");
  assert(lowerScene.includes("AcademicFoundationCore"), "Education scene must render the academic foundation core.");
  assert(lowerScene.includes("ContactSignalField"), "Contact scene must render the calm signal field.");
  assert(lowerScene.includes("educationCardExit"), "Education scene must fade before the next education card.");
  assert(lowerScene.includes("ranges.contact, 0.022"), "Contact bubble fade must stay tight to the contact range.");
  assert(!lowerScene.includes("sphereGeometry args={[1.34, 40, 40]}"), "Contact scene must not render the large green bubble.");
  assert(!lowerScene.includes("sphereGeometry args={[1, 24, 24]}"), "Contact scene must not render the green bubble core.");
  assert(!lowerScene.includes("EducationSpacecraft"), "Education scene must not return to the spaceship motif.");
  assert(!lowerScene.includes("ThrusterFlare"), "Education scene must not use engine thruster clutter.");
  assert(!lowerScene.includes("<Sparkles"), "Lower homepage scenes must not use noisy particle bursts.");
  assert(!storyScene.includes("sphereGeometry args={[5, 64, 64]}"), "ReactiveLight must not render a visible green bubble.");
  assert(!storyScene.includes("<Sparkles"), "StoryScene must not reintroduce noisy global particles.");
  assert(!storyScene.includes("<Float"), "StoryScene must not reintroduce generic floating space clutter.");
  assert(storyScene.includes("ScenePostEffects({ liteMode }"), "Postprocessing must be disabled in lightweight mode.");
  assert(storyScene.includes("count={liteMode ? 420 : 950}"), "Starfield count must stay tightly bounded for lightweight scrolling.");
  assert(storyScene.includes("InfrastructureBackplane"), "StoryScene must keep the subtle infrastructure backplane.");
  assert(storyScene.includes("!liteMode && <ReactiveLight />"), "Pointer-following light should not run in lightweight mode.");
  assert(lowerScene.includes("useSceneProfile(liteMode)"), "Lower 3D scene must use the lightweight profile.");
  assert(lowerScene.includes("!liteMode && <ContactSignalField"), "Contact signal field should not render in lightweight mode.");
  assert(lowerScene.includes("getChapterArrivalPulse"), "HomeLowerScene must keep chapter arrival pulse animation tied to section progress.");
  assert(storyScene.includes("getStoryChapterPulse"), "StoryScene must keep camera motion synced to section arrival pulses.");
}

async function main() {
  assertPortfolioData();
  await assertLayoutContracts();
  await assertHomeMotionContracts();
  console.log("Portfolio regression checks passed.");
}

await main();
