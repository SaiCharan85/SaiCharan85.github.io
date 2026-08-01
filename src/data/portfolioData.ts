/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type ProfileSlug = "ai-ml" | "datascientist";
export type ProjectType = "AI" | "DE" | "DS";
export type ProjectIcon = "trend" | "pipeline" | "monitoring" | "application" | "translation" | "risk";

export interface ProjectDecision {
  title: string;
  detail: string;
}

export interface ProjectImpactMetric {
  label: string;
  value: string;
  detail: string;
}

export interface Project {
  id: string;
  title: string;
  type: ProjectType;
  typeLabel: string;
  icon: ProjectIcon;
  summary: string;
  role: string;
  domain: string;
  techStack: string[];
  problem: string;
  context: string;
  stakes: string;
  ownership: string[];
  goals: string[];
  architecture: string;
  implementation: string[];
  decisions: ProjectDecision[];
  flow: string;
  challenges: string[];
  impactMetrics: ProjectImpactMetric[];
  outcomes: string[];
  lessons: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  location: string;
  details: string[];
}

export interface SectionIntro {
  eyebrow: string;
  title: string;
  description: string;
}

export interface ContactSectionCopy extends SectionIntro {
  chips: string[];
  reachLabel: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    headline: string;
    about: string[];
    focusAreas: string[];
    email: string;
    linkedin: string;
    github: string;
    resume: string;
    location: string;
  };
  metrics: {
    label: string;
    value: string;
  }[];
  skills: SkillGroup[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
  certifications: {
    name: string;
    issuer: string;
    date: string;
  }[];
  sectionCopy: {
    about: {
      eyebrow: string;
      title: string;
      impactLabel: string;
      focusLabel: string;
    };
    skills: SectionIntro;
    projects: SectionIntro;
    experience: SectionIntro;
    education: SectionIntro;
    contact: ContactSectionCopy;
  };
  footer: {
    tagline: string;
  };
}

export const profileSlugs: ProfileSlug[] = ["ai-ml", "datascientist"];
export const defaultProfileSlug: ProfileSlug = "ai-ml";

const basePublicPath =
  typeof import.meta !== "undefined" && import.meta.env?.BASE_URL
    ? import.meta.env.BASE_URL
    : "/";

function withPublicAsset(path: string) {
  const normalizedBase = basePublicPath.endsWith("/") ? basePublicPath : `${basePublicPath}/`;
  return `${normalizedBase}${path.replace(/ /g, "%20")}`;
}

export function isProfileSlug(value: string | undefined): value is ProfileSlug {
  return Boolean(value && profileSlugs.includes(value as ProfileSlug));
}

const sharedIdentity = {
  name: "Sri Sai Charan Yarlagadda",
  email: "yarlagadda.sr@northeastern.edu",
  linkedin: "https://www.linkedin.com/in/sri-sai-charan-yarlagadda-ab073120b/",
  github: "https://github.com/SaiCharan85",
  location: "Boston, MA",
};

const sharedEducation: Education[] = [
  {
    school: "Northeastern University",
    degree: "Master of Science in Data Science",
    period: "Sep 2024 - Dec 2026",
    location: "Boston, MA",
    details: [
      "GPA: 3.73.",
      "Coursework: Natural Language Processing, Computer Vision, Supervised Machine Learning, Data Mining and Modeling, MLOps and LLMOps.",
    ],
  },
  {
    school: "Kalinga Institute of Industrial Technology",
    degree: "Bachelor of Technology in Computer Science Engineering",
    period: "Sep 2020 - May 2024",
    location: "Bhubaneswar, India",
    details: [
      "GPA: 3.76.",
      "Coursework: Machine Learning, Deep Learning, Data Analytics, Data Structures and Algorithms, and Cloud Computing.",
    ],
  },
];

const sharedCertifications = [
  {
    name: "MLOps and LLMOps coursework",
    issuer: "Northeastern University",
    date: "Resume-listed",
  },
  {
    name: "Data Science graduate training",
    issuer: "Northeastern University",
    date: "2024 - 2026",
  },
];

const sharedExperienceDescriptions: {
  crewasis: string[];
  crewasisSkills: string[];
  brainerHub: string[];
  brainerHubSkills: string[];
} = {
  crewasis: [
    "Designed and built an AI research pipeline ingesting 400+ research papers via SerpAPI, Google Docs, and PDFs into an S3 knowledge base, generating vector embeddings and training a Decision Tree classifier to route passages.",
    "Architected a 3-stage LLM pipeline using Llama 3.3 70B and Claude 3.7 Sonnet for chunking and synthesis, extracting 30 structured attributes across 12,000 question-paper analyses for research review.",
    "Selected QLoRA and LangChain to fine-tune Llama 3.3 70B for domain summarization after evaluating alternatives, improving domain accuracy 20% and reaching 91.7% extraction accuracy.",
    "Led deployment of the platform on AWS S3, Lambda, EC2, and Bedrock at 15K+ API calls per run, cutting hallucinations 28% with BERTScore and NLI checks, and delivering insight reports.",
  ],
  crewasisSkills: ["SerpAPI", "AWS Lambda", "Llama 3.3 70B", "QLoRA", "LangChain", "AWS Bedrock"],
  brainerHub: [
    "Designed a chat-based NLP bot using a Bi-LSTM intent classifier and GPT-3.5 Turbo for a stock-focused client, powering subscriptions, recommendations, and insights at 85% F1.",
    "Developed a Random Forest lead-scoring model for a sales client, prioritizing leads by conversion likelihood at 82% precision.",
    "Delivered an ARIMA stock-price prediction model with engineered lag features and a collaborative-filtering recommender for an e-commerce client, averaging 15% KPI uplift.",
    "Deployed all models on AWS EC2 and GCP Cloud Run, auto-scaling instances and tracking experiments in MLflow, delivering Power BI KPI dashboards at scale across all 3 client workflows.",
  ],
  brainerHubSkills: ["Bi-LSTM", "GPT-3.5 Turbo", "Random Forest", "ARIMA", "GCP Cloud Run", "MLflow"],
};

const aiMlExperience: Experience[] = [
  {
    company: "Crewasis.ai",
    role: "AI / ML Engineer",
    period: "Jul 2025 - Jan 2026",
    description: sharedExperienceDescriptions.crewasis,
    skills: sharedExperienceDescriptions.crewasisSkills,
  },
  {
    company: "BrainerHub Solutions LLP",
    role: "AI / ML Intern",
    period: "Jul 2023 - Dec 2023",
    description: sharedExperienceDescriptions.brainerHub,
    skills: sharedExperienceDescriptions.brainerHubSkills,
  },
];

const dataScienceExperience: Experience[] = [
  {
    company: "Crewasis.ai",
    role: "ML Engineer / Data Scientist",
    period: "Jul 2025 - Jan 2026",
    description: sharedExperienceDescriptions.crewasis,
    skills: sharedExperienceDescriptions.crewasisSkills,
  },
  {
    company: "BrainerHub Solutions LLP",
    role: "Data Science / ML Intern",
    period: "Jul 2023 - Dec 2023",
    description: sharedExperienceDescriptions.brainerHub,
    skills: sharedExperienceDescriptions.brainerHubSkills,
  },
];

const aiMlSkills: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["Python", "SQL", "R", "C++", "JavaScript"],
  },
  {
    category: "NLP and LLMs",
    skills: ["HuggingFace Transformers", "LangChain", "Prompt Engineering", "LoRA", "QLoRA", "RAG", "vLLM", "spaCy", "NLTK"],
  },
  {
    category: "ML and Deep Learning",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Keras", "XGBoost", "OpenCV", "BiomedCLIP", "HuggingFace diffusers"],
  },
  {
    category: "Cloud and MLOps",
    skills: ["AWS S3", "Lambda", "EC2", "SageMaker", "Bedrock", "GCP Cloud Run", "Composer", "GKE", "Docker", "Kubernetes", "MLflow", "Airflow", "DVC"],
  },
];

const dataScienceSkills: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["Python", "C++", "SQL", "R", "JavaScript"],
  },
  {
    category: "Modeling",
    skills: ["Scikit-learn", "PyTorch", "TensorFlow", "Keras", "XGBoost", "LightGBM", "Statsmodels", "SciPy"],
  },
  {
    category: "Methods",
    skills: ["CNNs", "RNNs", "LSTMs", "Transformers", "Time Series", "Anomaly Detection", "Transfer Learning", "Foundation Models"],
  },
  {
    category: "Data and Cloud",
    skills: ["Pandas", "NumPy", "PySpark", "Snowflake", "PostgreSQL", "MySQL", "Azure ML Studio", "Azure Data Factory", "MLflow", "Tableau", "Power BI"],
  },
];

const innovateAiProject: Project = {
  id: "innovateai-rag-literature-review-engine",
  title: "InnovateAI RAG Literature Review Engine",
  type: "AI",
  typeLabel: "RAG and Agentic AI",
  icon: "translation",
  summary:
    "Production RAG pipeline for tracking AI and tech-trend research: a validated, bias-checked ingestion pipeline feeds hybrid retrieval and reranked Gemini generation, deployed on GKE with CI/CD-gated releases and an MCP server for LLM-client tool use.",
  role: "AI / ML Engineer",
  domain: "Academic Search / Research Intelligence",
  techStack: ["LangChain", "FAISS", "BM25", "RRF", "Gemini 2.0 Flash", "Airflow", "Great Expectations", "Fairlearn", "DVC", "Terraform", "GKE"],
  problem:
    "Tracking AI and tech research trends needed a pipeline that ingested arXiv and news sources reliably, retrieved evidence accurately, and stayed fast enough for repeated interactive use.",
  context:
    "Resume-backed project and public GitHub repository (InnovateAI) describing a RAG pipeline for tracking AI and tech trends across research papers and news.",
  stakes:
    "Unvalidated ingestion or ungated releases could let corrupted data or unfair, low-quality responses reach users, so both the data pipeline and the deployment path needed explicit gates.",
  ownership: [
    "Built an Airflow-orchestrated (Cloud Composer) ingestion pipeline for arXiv papers and tech news with Great Expectations validation, deduplication, schema enforcement, and Fairlearn bias checks, versioned via DVC on GCS.",
    "Assembled a hybrid retrieval RAG pipeline (FAISS dense + BM25 sparse via reciprocal rank fusion) with ms-marco-MiniLM-L6 cross-encoder reranking and Gemini 2.0 Flash generation.",
    "Added citation extraction, a 7-check response validator, and MLflow tracking around every generated answer.",
    "Deployed FastAPI and Streamlit on GKE via GitHub Actions CI/CD and Terraform, gating releases on quality and fairness thresholds with drift-triggered auto-retraining, and shipped an MCP server exposing the pipeline as an LLM-callable tool.",
  ],
  goals: [
    "Keep ingested research and news data validated, deduplicated, and bias-checked before it reaches retrieval.",
    "Ground generated answers in retrieved evidence with citations and automated response validation.",
    "Ship releases only when they clear quality and fairness gates, with the pipeline callable directly by other LLM clients.",
  ],
  architecture:
    "Airflow DAGs on Cloud Composer ingest arXiv and news sources through Great Expectations validation, deduplication, schema enforcement, and Fairlearn bias checks before DVC-versioned storage on GCS; FAISS and BM25 retrieval results are fused with RRF, reranked by a cross-encoder, and passed to Gemini 2.0 Flash for citation-backed generation behind a 7-check response validator; FastAPI and Streamlit run on GKE behind CI/CD-gated releases, with an MCP server exposing the same pipeline as a tool for other LLM clients.",
  implementation: [
    "Validated and deduplicated ingested arXiv and tech-news documents with Great Expectations and Fairlearn bias checks, versioning outputs with DVC on GCS.",
    "Fused FAISS dense and BM25 sparse retrieval through reciprocal rank fusion and reranked candidates with an ms-marco-MiniLM-L6 cross-encoder before Gemini 2.0 Flash generation.",
    "Wired citation extraction and a 7-check response validator into the generation path, with MLflow tracking retrieval and latency metrics.",
    "Deployed FastAPI and Streamlit to GKE through GitHub Actions CI/CD and Terraform, gating releases on quality/fairness thresholds with drift-triggered auto-retraining.",
  ],
  decisions: [
    {
      title: "Validate before retrieval",
      detail: "Ran Great Expectations, deduplication, schema enforcement, and Fairlearn bias checks on ingested data so retrieval never worked over corrupted or unfairly skewed sources.",
    },
    {
      title: "Hybrid retrieval, then rerank",
      detail: "Combined FAISS dense and BM25 sparse retrieval through RRF and added cross-encoder reranking so generation started from a stronger, more relevant evidence set.",
    },
    {
      title: "Gate releases, don't just ship",
      detail: "Used GitHub Actions CI/CD and Terraform to gate releases on quality and fairness thresholds with drift-triggered auto-retraining, rather than deploying on merge alone.",
    },
  ],
  flow: "arXiv + Tech News -> Airflow Ingestion (Great Expectations, Dedup, Fairlearn) -> DVC on GCS -> FAISS + BM25 Retrieval -> RRF Fusion -> Cross-Encoder Reranking -> Gemini 2.0 Flash + Citations -> 7-Check Validator -> FastAPI/Streamlit on GKE",
  challenges: [
    "Keeping ingestion validated and bias-checked without slowing down the pipeline's refresh cadence.",
    "Gating releases on quality and fairness thresholds while still supporting drift-triggered auto-retraining.",
  ],
  impactMetrics: [
    {
      label: "P95 Latency",
      value: "-58%",
      detail: "Query latency dropped from 6.7s to 2.8s after hybrid retrieval and reranking optimization.",
    },
    {
      label: "Response Validator",
      value: "7 Checks",
      detail: "Citation extraction plus a 7-check response validator gate every generated answer before it ships.",
    },
    {
      label: "Release Gate",
      value: "Quality + Fairness",
      detail: "GitHub Actions releases are gated on quality and Fairlearn fairness thresholds, with drift-triggered auto-retraining.",
    },
  ],
  outcomes: [
    "Built a validated ingestion pipeline (Great Expectations, deduplication, schema enforcement, Fairlearn bias checks) for arXiv papers and tech news, versioned with DVC on GCS.",
    "Cut P95 query latency 58% (6.7s to 2.8s) with hybrid FAISS/BM25 retrieval, RRF fusion, and cross-encoder reranking ahead of Gemini 2.0 Flash generation.",
    "Deployed FastAPI and Streamlit on GKE via GitHub Actions CI/CD and Terraform, and shipped an MCP server exposing the pipeline as a callable tool for any LLM client.",
  ],
  lessons: [
    "Data validation and bias checks belong before retrieval, not as an afterthought on model outputs.",
    "Exposing a RAG pipeline through an MCP server makes it reusable by other LLM clients instead of being a one-off endpoint.",
  ],
};

const theraBotProject: Project = {
  id: "therabot-emotion-aware-mental-health-ai",
  title: "TheraBot Emotion-Aware Mental Health AI",
  type: "AI",
  typeLabel: "Emotion-Aware NLP",
  icon: "application",
  summary:
    "Sequential NLP system that classifies emotion, detects sarcasm, and generates empathetic responses with speech-to-text input and Redis-backed conversation memory.",
  role: "AI / ML Engineer",
  domain: "Mental Health AI / Conversational Systems",
  techStack: ["BERTweet", "RoBERTa", "distilGPT2", "LoRA", "Flask", "Google Cloud Speech-to-Text", "Redis"],
  problem:
    "Supportive conversational AI needs to understand emotional tone and conversational history before generating responses that feel coherent and empathetic.",
  context:
    "Resume-backed NLP project combining emotion classification, sarcasm correction, speech transcription, and fine-tuned response generation.",
  stakes:
    "A mental health assistant that misses tone or context can respond in ways that feel generic, inconsistent, or emotionally mismatched.",
  ownership: [
    "Built a sequential NLP pipeline for emotion classification, sarcasm detection, and empathetic generation.",
    "Integrated real-time audio transcription through Google Cloud Speech-to-Text.",
    "Stored sliding-window conversation memory in Redis to preserve multi-turn context.",
  ],
  goals: [
    "Classify user emotion across seven categories.",
    "Correct tone interpretation when sarcasm changes the user intent.",
    "Generate empathetic responses while preserving conversation context.",
  ],
  architecture:
    "Audio input is transcribed through Google Cloud Speech-to-Text, routed through BERTweet emotion classification and RoBERTa sarcasm detection, augmented with Redis conversation context, and answered by a LoRA-tuned distilGPT2 generation layer exposed through Flask.",
  implementation: [
    "Trained BERTweet for seven-category emotion classification and RoBERTa for sarcasm detection.",
    "Fine-tuned distilGPT2 with LoRA adapters on Psychology 10K for empathetic response generation.",
    "Implemented a Flask REST API and Redis sliding memory of five prior exchanges for contextual responses.",
  ],
  decisions: [
    {
      title: "Pipeline over one model",
      detail: "Separated emotion, sarcasm, and generation so each step could target a specific failure mode.",
    },
    {
      title: "Short memory window",
      detail: "Used a five-exchange Redis window to preserve therapeutic context without overloading generation input.",
    },
    {
      title: "Speech as first-class input",
      detail: "Added cloud transcription so the same emotional pipeline could serve text and audio interaction patterns.",
    },
  ],
  flow: "Audio or Text Input -> Speech Transcription -> Emotion Classification -> Sarcasm Detection -> Redis Context -> Empathetic Generation -> API Response",
  challenges: [
    "Avoiding tone drift between emotion classification, sarcasm correction, and response generation.",
    "Keeping context useful without making the generation path heavy or slow.",
  ],
  impactMetrics: [
    {
      label: "Emotion F1",
      value: "73%",
      detail: "BERTweet classified seven emotion categories across 25K+ samples.",
    },
    {
      label: "Sarcasm F1",
      value: "74%",
      detail: "RoBERTa helped correct tone interpretation before response generation.",
    },
    {
      label: "P95 Latency",
      value: "200ms",
      detail: "The Flask API delivered responses at a low-latency target for interactive use.",
    },
  ],
  outcomes: [
    "Generated empathetic responses with a reported 24% empathy uplift.",
    "Improved user-rated coherence by 18% compared with stateless baselines.",
    "Delivered real-time transcription and response routing through a Flask API.",
  ],
  lessons: [
    "Emotion-aware systems need structured context, not only a more expressive generator.",
    "Small, targeted model stages can be easier to debug than one opaque end-to-end model.",
  ],
};

const multiMedAiProject: Project = {
  id: "multimedai-medical-intelligence-platform",
  title: "MultiMedAI Medical Intelligence Platform",
  type: "AI",
  typeLabel: "Multimodal Medical AI Assistant",
  icon: "monitoring",
  summary:
    "Local, zero-cost, CPU-only multimodal medical AI assistant combining BiomedCLIP image retrieval, Gemini-plus-local-fallback vision analysis, document RAG, live literature search, and labelled anatomy diagrams behind one safety-gated chat UI.",
  role: "AI / ML Engineer",
  domain: "Medical AI / Multimodal Retrieval and Reasoning",
  techStack: ["FastAPI", "BiomedCLIP", "Gemini 3.1 Flash-Lite", "Qwen2.5-1.5B", "moondream2", "SD-Turbo", "MiniLM", "SQLite", "PubMed E-utils"],
  problem:
    "Medical AI assistants that answer in free-form text risk fabricating findings, so responses needed to stay grounded in real images, documents, or literature while running on a CPU-only, zero-cost setup.",
  context:
    "Public GitHub project (MultiMedAI) built as a local, CPU-only assistant for medical education and research, explicitly positioned as not a diagnostic device.",
  stakes:
    "An assistant that invents medical findings or mislabels retrieved evidence could mislead students and researchers, so every answer needed to trace back to a real image, document, paper, or labelled reference.",
  ownership: [
    "Built a FastAPI backend with intent routing across image retrieval, image analysis, document RAG, literature search, labelled-diagram lookup, and image synthesis.",
    "Built an ~80K-image BiomedCLIP retrieval bank with cosine search and a confidence floor so low-confidence matches are rejected instead of shown.",
    "Integrated a Gemini 3.1 Flash-Lite reasoning path with a local CPU fallback chain (Qwen2.5-1.5B, moondream2) so the app runs with zero required cloud dependency.",
    "Implemented a safety and access-gating layer with NSFW image classification and audit-logged, credential-based access requests for restricted content.",
  ],
  goals: [
    "Ground every response in a real image, document, retrieved paper, or labelled diagram instead of free-form generation.",
    "Run entirely on a CPU-only machine at zero cloud cost, with optional free-tier accelerators.",
    "Report honest, unembellished metrics rather than inflating model performance.",
  ],
  architecture:
    "A FastAPI router detects intent and dispatches to BiomedCLIP retrieval over a precomputed embedding bank, Gemini-or-local-fallback vision analysis, MiniLM-embedded document RAG in SQLite, PubMed and Google Scholar literature search, Wikimedia Commons labelled-diagram lookup, and SD-Turbo synthesis for non-labelled illustrative images, with a safety gate checked before restricted or generated content is returned.",
  implementation: [
    "Built a frozen BiomedCLIP ViT-B/16 retrieval index across roughly 80,761 images pooled from open pathology, radiology, dermatology, brain MRI, and skeletal datasets.",
    "Embedded 8,192 PubMed passages with MiniLM into a SQLite-backed document and knowledge-base store for RAG-grounded answers and PDF report generation.",
    "Precomputed embeddings and froze all encoders so the full pipeline runs on a CPU-only Windows/AMD machine without a GPU.",
  ],
  decisions: [
    {
      title: "Retrieval over generation",
      detail: "Prioritized returning real retrieved images, documents, and literature over free-form generation so answers stayed traceable to a real source.",
    },
    {
      title: "Local fallback by default",
      detail: "Kept Qwen2.5-1.5B and moondream2 as CPU fallbacks so the app runs with zero required paid API dependency, treating Gemini's free tier as an optional accelerator.",
    },
    {
      title: "Report honest numbers",
      detail: "Enforced a project rule to report measured metrics on small CPU-sized subsets as-is, including a modest 65% Hit@10 and a frozen-probe VQA ceiling around 55%, rather than inflating results.",
    },
  ],
  flow: "User Message -> Intent Detection -> BiomedCLIP Retrieval / Gemini or Local Vision Analysis / MiniLM Document RAG / PubMed + Scholar Search / Wikimedia Diagram Lookup / SD-Turbo Synthesis -> Safety Gate -> Grounded Response or PDF Report",
  challenges: [
    "Keeping every answer grounded while supporting six different capabilities behind one chat interface.",
    "Running a multimodal retrieval and reasoning stack entirely on CPU without sacrificing response quality.",
  ],
  impactMetrics: [
    {
      label: "Retrieval Hit@10",
      value: "65.0%",
      detail: "BiomedCLIP ViT-B/16 outperformed a QuiltNet baseline (52.5%) on a 500-image held-out retrieval benchmark.",
    },
    {
      label: "Image Bank",
      value: "80K+",
      detail: "Pooled pathology, radiology, dermatology, brain MRI, and skeletal images into one cosine-searchable retrieval bank.",
    },
    {
      label: "Chest Classifier Accuracy",
      value: "~94%",
      detail: "A TB / COVID / Pneumonia / Normal probe reached strong accuracy on chest X-ray disease classification.",
    },
  ],
  outcomes: [
    "Shipped a CPU-only, zero-cloud-cost multimodal assistant spanning retrieval, vision analysis, document RAG, literature search, and labelled diagrams.",
    "Reached 65.0% concept Hit@10 with BiomedCLIP retrieval and roughly 94% accuracy on a chest-disease classification probe.",
    "Built a safety and access-gating layer with NSFW detection and audit-logged, credential-based restricted-content requests.",
  ],
  lessons: [
    "Retrieval-grounded design reduces hallucination risk more reliably than prompting a generator to be cautious.",
    "Reporting honest, modest metrics (a 55% VQA ceiling, ~511 FID) builds more credibility than rounding up performance claims.",
  ],
};

const pneumoniaDetectionProject: Project = {
  id: "pneumonia-detection-cnn-transfer-learning",
  title: "Pneumonia Detection CNN and Transfer Learning",
  type: "DS",
  typeLabel: "Computer Vision Classification",
  icon: "monitoring",
  summary:
    "Chest X-ray screening pipeline using ResNet50 transfer learning, ONNX Runtime inference, and OpenCV visualization for clinical error analysis.",
  role: "ML Engineer / Data Scientist",
  domain: "Medical Imaging / Clinical Screening",
  techStack: ["PyTorch", "ResNet50", "OpenCV", "ONNX Runtime", "ChestXRay2017", "C++"],
  problem:
    "Clinical screening needs high recall on pneumonia cases while still making errors visible enough for qualitative review.",
  context:
    "Resume-backed project and public GitHub repository focused on ChestXRay2017 classification and C++ inference.",
  stakes:
    "False negatives are especially costly in screening, so recall and transparent error analysis matter more than a single accuracy headline.",
  ownership: [
    "Fine-tuned ResNet50 pre-trained on ImageNet for binary X-ray classification.",
    "Built a modular C++ inference pipeline with OpenCV preprocessing and ONNX Runtime.",
    "Created confidence-score visualization and color-coded prediction banners for qualitative review.",
  ],
  goals: [
    "Reach high recall on pneumonia-positive X-rays.",
    "Address class imbalance during training.",
    "Make inference fast and reproducible outside the training notebook.",
  ],
  architecture:
    "X-ray images are loaded and normalized through OpenCV, transformed into CHW tensors, evaluated by an ONNX-exported ResNet50 model, and displayed with confidence annotations for review.",
  implementation: [
    "Replaced the ResNet50 final fully connected layer for binary classification and handled 3:1 class imbalance with weighted random sampling.",
    "Implemented BGR-to-RGB conversion, bilinear resize to 224x224, ImageNet normalization, and HWC-to-CHW layout in C++.",
    "Analyzed precision-recall tradeoffs using confusion matrix outcomes from 624 test images.",
  ],
  decisions: [
    {
      title: "Optimize for recall",
      detail: "Prioritized recall because missing pneumonia cases is a higher-risk failure mode in screening.",
    },
    {
      title: "Separate inference path",
      detail: "Built C++ and ONNX Runtime inference so the model could run outside the training environment.",
    },
    {
      title: "Visualize decisions",
      detail: "Added annotated output so predictions were inspectable, not just reported as aggregate metrics.",
    },
  ],
  flow: "Chest X-ray -> OpenCV Preprocessing -> ONNX Tensor Conversion -> ResNet50 Inference -> Confidence Annotation -> Screening Review",
  challenges: [
    "Balancing high recall against false positive volume.",
    "Making preprocessing match training-time assumptions during C++ inference.",
  ],
  impactMetrics: [
    {
      label: "Recall",
      value: "99.49%",
      detail: "The model missed only two pneumonia cases in the reported test set.",
    },
    {
      label: "F1 Score",
      value: "88.89%",
      detail: "Precision-recall balance remained strong despite recall-first tuning.",
    },
    {
      label: "Inference",
      value: "0.199s",
      detail: "Per-image inference stayed fast enough for lightweight screening workflows.",
    },
  ],
  outcomes: [
    "Fine-tuned ResNet50 on 5,216 training images from ChestXRay2017.",
    "Achieved 99.49% recall and 88.89% F1-score on 624 test images.",
    "Built OpenCV visualization for confidence scores and qualitative error analysis.",
  ],
  lessons: [
    "Clinical ML evaluation should start from the cost of different errors.",
    "Production-style inference reveals preprocessing issues that notebooks can hide.",
  ],
};

const fraudDetectionProject: Project = {
  id: "credit-card-fraud-detection-anomaly-detection",
  title: "Credit Card Fraud Detection",
  type: "DS",
  typeLabel: "Anomaly Detection",
  icon: "risk",
  summary:
    "Fraud detection workflow combining PCA and JSD feature selection, Isolation Forest, autoencoders, and deep neural classification on highly imbalanced transaction data.",
  role: "Data Scientist",
  domain: "Financial Fraud / Imbalanced Classification",
  techStack: ["PCA", "JSD", "Isolation Forest", "Autoencoders", "TensorFlow", "Keras", "SMOTE", "Grid Search"],
  problem:
    "Fraud events are rare, making naive accuracy misleading and requiring robust anomaly signals plus precision-recall aware evaluation.",
  context:
    "Resume-backed project and public GitHub repository using hundreds of thousands of transaction records and deep learning models.",
  stakes:
    "A fraud model must surface suspicious transactions without overwhelming analysts with false positives or missing rare high-risk events.",
  ownership: [
    "Applied PCA and Jensen-Shannon divergence feature selection to preserve anomaly signal.",
    "Trained Isolation Forest, autoencoder reconstruction models, and a DNN classifier.",
    "Validated model robustness with stratified cross-validation and grid search.",
  ],
  goals: [
    "Improve training efficiency while preserving fraud signal.",
    "Handle a 0.17% fraud-rate dataset with imbalance-aware methods.",
    "Track precision, recall, and F1 stability across folds.",
  ],
  architecture:
    "Transaction features are reduced and selected through PCA/JSD analysis, resampled with SMOTE where supervised learning is used, evaluated by anomaly and neural models, and validated through stratified cross-validation.",
  implementation: [
    "Reduced feature dimensionality by 42% while preserving anomaly signal.",
    "Trained unsupervised Isolation Forest and autoencoder reconstruction-error models alongside a supervised DNN.",
    "Ran 5-fold stratified cross-validation with grid search across 50+ configurations.",
  ],
  decisions: [
    {
      title: "Evaluate beyond accuracy",
      detail: "Focused on ROC-AUC, precision, recall, and F1 because class imbalance makes accuracy uninformative.",
    },
    {
      title: "Compare anomaly families",
      detail: "Used tree-based anomaly scoring, reconstruction error, and supervised neural classification to compare different fraud signals.",
    },
    {
      title: "Reduce dimensions carefully",
      detail: "Used PCA and JSD analysis to speed training without discarding the rare-event signal.",
    },
  ],
  flow: "Transaction Records -> PCA + JSD Feature Selection -> SMOTE / Anomaly Modeling -> DNN + Autoencoder + Isolation Forest -> Cross-Validation -> Fraud Scores",
  challenges: [
    "Learning from a 0.17% fraud-rate dataset without overfitting synthetic examples.",
    "Keeping metric variance low across folds on rare-event data.",
  ],
  impactMetrics: [
    {
      label: "Records",
      value: "284K+",
      detail: "The workflow operated on a large transaction dataset with rare fraud labels.",
    },
    {
      label: "ROC-AUC",
      value: "0.91",
      detail: "The combined modeling approach produced strong ranking performance.",
    },
    {
      label: "Precision",
      value: "93.2%",
      detail: "The model retained high precision on rare fraud data.",
    },
  ],
  outcomes: [
    "Reduced dimensionality by 42% and improved model training efficiency by 38%.",
    "Achieved ROC-AUC 0.91 and 93.2% precision on highly imbalanced data.",
    "Validated model stability with less than 2% variance across stratified folds.",
  ],
  lessons: [
    "Fraud detection needs threshold and stability analysis, not a single leaderboard score.",
    "Feature reduction is useful only if anomaly signal is explicitly protected.",
  ],
};

const turbofanPredictiveMaintenanceProject: Project = {
  id: "predictive-maintenance-turbofan-failure-prediction",
  title: "Predictive Maintenance - Turbofan Failure Prediction",
  type: "DS",
  typeLabel: "Predictive Maintenance",
  icon: "monitoring",
  summary:
    "Sensor-driven failure prediction for NASA C-MAPSS turbofan engines using leakage-safe temporal feature engineering and a benchmarked Gradient Boosting classifier.",
  role: "Data Scientist",
  domain: "Industrial IoT / Predictive Maintenance",
  techStack: ["Gradient Boosting", "RBF SVM", "GroupShuffleSplit", "NASA C-MAPSS", "Permutation Importance", "Calibration Curves"],
  problem:
    "Turbofan operators need advance warning of engine failure from sensor streams without leaking future or cross-engine information into training.",
  context:
    "Resume-backed project using the NASA C-MAPSS turbofan degradation dataset across 100 engines and 21 sensor channels.",
  stakes:
    "Leaking cross-engine or look-ahead information would overstate model performance and undermine trust in failure warnings that maintenance teams act on.",
  ownership: [
    "Engineered 90+ temporal features per engine, including rolling means/std, rate-of-change, and drift-from-start, from 21 sensor channels.",
    "Framed failure prediction as binary classification for failure within 30 cycles and split data by engine ID with GroupShuffleSplit to prevent leakage.",
    "Benchmarked Gradient Boosting against an RBF SVM and validated the selected model with calibration curves and permutation importance.",
  ],
  goals: [
    "Predict failure within a 30-cycle warning window.",
    "Prevent cross-engine and look-ahead leakage during feature engineering and validation.",
    "Select a model that is both accurate and calibrated enough to trust for maintenance decisions.",
  ],
  architecture:
    "Raw sensor channels are aggregated into rolling and drift-based temporal features per engine, engine-grouped splitting isolates train and validation sets, and Gradient Boosting and RBF SVM classifiers are benchmarked and validated with calibration and importance analysis.",
  implementation: [
    "Computed rolling means/std, rate-of-change, and drift-from-start features per engine across 21 sensor channels.",
    "Used GroupShuffleSplit by engine ID for a 70/30 train-validation split to avoid cross-engine leakage.",
    "Validated the selected Gradient Boosting model with calibration curves and permutation importance analysis.",
  ],
  decisions: [
    {
      title: "Group by engine, not by row",
      detail: "Used GroupShuffleSplit on engine ID instead of random row splitting so the validation set never leaked information from the same engine's history.",
    },
    {
      title: "Temporal features over raw readings",
      detail: "Engineered rolling and drift-based features because raw sensor snapshots underrepresent degradation trends leading up to failure.",
    },
    {
      title: "Benchmark before committing",
      detail: "Compared Gradient Boosting against an RBF SVM so the final model choice was evidence-based rather than assumed.",
    },
  ],
  flow: "Sensor Channels -> Temporal Feature Engineering -> GroupShuffleSplit by Engine -> Gradient Boosting vs RBF SVM -> Calibration + Importance Validation -> Failure Risk Score",
  challenges: [
    "Preventing cross-engine and look-ahead leakage while still capturing degradation trends.",
    "Balancing precision and recall for a 30-cycle failure warning window.",
  ],
  impactMetrics: [
    {
      label: "ROC-AUC",
      value: "0.994",
      detail: "Gradient Boosting achieved near-ceiling ranking performance on held-out engines.",
    },
    {
      label: "PR-AUC",
      value: "0.97",
      detail: "Precision-recall performance stayed strong despite the binary failure-window framing.",
    },
    {
      label: "Recall",
      value: "90.6%",
      detail: "The model caught the large majority of true failure-within-30-cycles cases.",
    },
  ],
  outcomes: [
    "Engineered 90+ temporal features per engine across 21 sensor channels for 100 turbofan engines.",
    "Selected Gradient Boosting at ROC-AUC 0.994 and 0.97 PR-AUC, with 89.7% precision and 90.6% recall.",
    "Validated the model with calibration curves and permutation importance rather than a single held-out score.",
  ],
  lessons: [
    "Leakage-safe validation matters more for time-based sensor data than most tabular problems.",
    "Calibration and feature importance checks build more trust in a maintenance model than accuracy alone.",
  ],
};

const customerChurnProject: Project = {
  id: "customer-churn-predictive-classification-azure",
  title: "Customer Churn Predictive Classification",
  type: "DS",
  typeLabel: "Predictive Analytics on Azure",
  icon: "trend",
  summary:
    "End-to-end churn modeling pipeline with Snowflake extraction, Azure Data Factory orchestration, RFM and cohort features, XGBoost/DNN modeling, and Tableau stakeholder dashboards.",
  role: "Data Scientist",
  domain: "Customer Analytics / Retention Modeling",
  techStack: ["Snowflake", "Azure Data Factory", "Azure ML Studio", "XGBoost", "ANN", "K-means", "MLflow", "Tableau"],
  problem:
    "Retention teams need churn signals that are timely, interpretable, and connected to customer behavior features rather than isolated model outputs.",
  context:
    "Resume-backed Data Scientist project aligned with Sai's public churn analytics repository and Azure-based ML workflow.",
  stakes:
    "Weak churn predictions can waste retention spend, while opaque predictions make it hard for non-technical stakeholders to act.",
  ownership: [
    "Extracted 500K+ records from Snowflake using optimized SQL patterns.",
    "Orchestrated ETL through Azure Data Factory and engineered RFM plus cohort features.",
    "Trained K-means segmentation, XGBoost, and a 3-layer DNN in Azure ML Studio.",
    "Designed Tableau dashboards for churn drivers, segment profiles, and feature importance.",
  ],
  goals: [
    "Produce reliable churn features from warehouse-scale data.",
    "Combine segmentation with supervised prediction.",
    "Translate model outputs into stakeholder-ready retention dashboards.",
  ],
  architecture:
    "Snowflake SQL extracts behavioral records, Azure Data Factory orchestrates transformations, engineered RFM and cohort features feed Azure ML experiments, and Tableau dashboards expose churn drivers and segment profiles.",
  implementation: [
    "Used CTEs and window functions to extract and shape 500K+ customer records.",
    "Engineered eight or more RFM and cohort features with automated validation reaching 92% data quality.",
    "Tracked Azure ML experiments with MLflow while comparing clustering, boosted trees, and neural models.",
  ],
  decisions: [
    {
      title: "Feature behavior first",
      detail: "Built RFM and cohort features before modeling so predictions mapped to understandable customer behavior.",
    },
    {
      title: "Segment before action",
      detail: "Used K-means profiles alongside churn scoring so stakeholders could interpret different retention groups.",
    },
    {
      title: "Dashboard the drivers",
      detail: "Used Tableau to expose feature importance and segment patterns rather than leaving results in notebooks.",
    },
  ],
  flow: "Snowflake Records -> Azure Data Factory ETL -> RFM + Cohort Features -> Azure ML Models -> MLflow Tracking -> Tableau Retention Dashboards",
  challenges: [
    "Keeping feature validation high across a large warehouse extract.",
    "Making model outputs actionable for non-technical retention stakeholders.",
  ],
  impactMetrics: [
    {
      label: "Records",
      value: "500K+",
      detail: "The pipeline extracted and transformed large customer-history datasets.",
    },
    {
      label: "AUC",
      value: "0.89",
      detail: "Predictive models produced strong churn ranking performance.",
    },
    {
      label: "Retention Lift",
      value: "21%",
      detail: "The churn workflow supported a reported retention uplift.",
    },
  ],
  outcomes: [
    "Engineered eight or more RFM and cohort features with 92% data quality.",
    "Achieved AUC 0.89 and 83% precision with an ANN and XGBoost ensemble.",
    "Built Tableau dashboards with 15+ interactive visualizations for churn drivers and segment profiles.",
  ],
  lessons: [
    "Churn work becomes useful when model features map to retention actions.",
    "BI delivery is part of the data science product, not a separate afterthought.",
  ],
};

const walmartForecastingProject: Project = {
  id: "walmart-sales-forecasting-time-series-foundation-models",
  title: "Walmart Sales Forecasting",
  type: "DS",
  typeLabel: "Time Series Forecasting",
  icon: "pipeline",
  summary:
    "Retail forecasting project comparing ARIMA, SARIMAX, Exponential Smoothing, XGBoost, Random Forest, and TimesFM with stationarity testing and seasonal decomposition.",
  role: "Data Scientist",
  domain: "Retail Forecasting / Inventory Planning",
  techStack: ["ARIMA", "SARIMAX", "Exponential Smoothing", "XGBoost", "Random Forest", "TimesFM", "ADF Test", "STL", "Matplotlib", "Seaborn"],
  problem:
    "Retail planners need forecasts that account for seasonality, uncertainty, and model cost across many stores and product histories.",
  context:
    "Resume-backed time-series project over 420K+ retail records across 45 stores, comparing classical, deep learning, and foundation-model approaches.",
  stakes:
    "Forecast error affects inventory planning, stockouts, and overstock risk, so accuracy must be weighed against inference cost and data requirements.",
  ownership: [
    "Cleaned and analyzed 420K+ retail time-series records across 45 stores.",
    "Tested stationarity and decomposed trend, seasonality, and residual components.",
    "Benchmarked classical, deep learning, and zero-shot foundation forecasting models.",
  ],
  goals: [
    "Compare forecasting families under expanding-window cross-validation.",
    "Quantify demand uncertainty for inventory planning.",
    "Produce visual explanations of seasonal and prediction interval behavior.",
  ],
  architecture:
    "Cleaned store-level sales histories pass through stationarity and decomposition analysis, multiple forecasting families are benchmarked through expanding-window validation, and Monte Carlo simulation produces uncertainty views for planning.",
  implementation: [
    "Ran Augmented Dickey-Fuller stationarity tests and STL seasonal decomposition before model fitting.",
    "Compared ARIMA, SARIMAX, Exponential Smoothing, XGBoost, Random Forest, and TimesFM via 5-fold expanding-window cross-validation on RMSE/MAE.",
    "Produced eight or more trend and seasonality visualizations for demand planning.",
  ],
  decisions: [
    {
      title: "Diagnose before modeling",
      detail: "Used stationarity testing and decomposition to understand signal shape before selecting models.",
    },
    {
      title: "Benchmark families",
      detail: "Compared classical statistical, tree-based, and zero-shot foundation-model approaches so the result considered practical tradeoffs.",
    },
    {
      title: "Let nonlinear signal win",
      detail: "Selected XGBoost over the statistical baselines and TimesFM's un-tuned zero-shot output because it captured nonlinear holiday and promo interactions the others missed.",
    },
  ],
  flow: "Retail Sales Records -> Cleaning -> ADF + STL Diagnostics -> ARIMA / SARIMAX / Exponential Smoothing / XGBoost / Random Forest / TimesFM -> Expanding-Window Cross-Validation -> Forecast",
  challenges: [
    "Separating trend and seasonality across many stores.",
    "Comparing statistical, tree-based, and foundation-model families with different data and inference requirements.",
  ],
  impactMetrics: [
    {
      label: "Records",
      value: "420K+",
      detail: "The analysis covered retail time-series history across 45 stores.",
    },
    {
      label: "Stores",
      value: "45",
      detail: "Forecasting workflows were evaluated across multi-store retail data.",
    },
    {
      label: "Forecast Accuracy",
      value: "91%",
      detail: "XGBoost was selected as the best-performing model, beating the statistical baselines and TimesFM's zero-shot output.",
    },
  ],
  outcomes: [
    "Validated trend, seasonality, and residual components before forecasting.",
    "Evaluated ARIMA, SARIMAX, Exponential Smoothing, XGBoost, Random Forest, and TimesFM under 5-fold expanding-window cross-validation.",
    "Selected XGBoost at 91% forecast accuracy, capturing nonlinear holiday/promo interactions the statistical baselines missed.",
  ],
  lessons: [
    "Forecasting decisions need to account for model cost and data requirements as well as error.",
    "Uncertainty views make forecasts more useful for operations than point estimates alone.",
  ],
};

function createBaseProfile({
  headline,
  about,
  focusAreas,
  metrics,
  skills,
  projects,
  experience,
  resume,
  sectionCopy,
  footerTagline,
}: {
  headline: string;
  about: string[];
  focusAreas: string[];
  metrics: PortfolioData["metrics"];
  skills: SkillGroup[];
  projects: Project[];
  experience: Experience[];
  resume: string;
  sectionCopy: PortfolioData["sectionCopy"];
  footerTagline: string;
}): PortfolioData {
  return {
    personal: {
      ...sharedIdentity,
      headline,
      about,
      focusAreas,
      resume: withPublicAsset(resume),
    },
    metrics,
    skills,
    projects,
    experience,
    education: sharedEducation,
    certifications: sharedCertifications,
    sectionCopy,
    footer: {
      tagline: footerTagline,
    },
  };
}

const aiMlProfile = createBaseProfile({
  headline: "AI / ML Engineer | NLP, LLMs, RAG, and Multimodal AI",
  about: [
    "I build applied AI systems that connect retrieval, fine-tuning, model serving, evaluation, and cloud orchestration into usable products.",
    "My strongest work spans RAG pipelines, agentic LangChain workflows, NLP classification, LLM adaptation with LoRA and QLoRA, and multimodal medical AI.",
    "Across Crewasis.ai, BrainerHub, and graduate work at Northeastern, I focus on systems where model quality, latency, and operational reliability have to move together.",
  ],
  focusAreas: ["RAG systems", "LLM fine-tuning", "NLP pipelines", "Cloud MLOps"],
  metrics: [
    { label: "Extraction Accuracy", value: "91.7%" },
    { label: "Latency Reduction", value: "58%" },
    { label: "Corpus Scale", value: "10K+" },
    { label: "Cloud Stack", value: "AWS + GCP" },
  ],
  skills: aiMlSkills,
  projects: [innovateAiProject, theraBotProject, multiMedAiProject],
  experience: aiMlExperience,
  resume: "Resume_AI_ML.pdf",
  sectionCopy: {
    about: {
      eyebrow: "About Sai",
      title: "AI engineer building retrieval, language, and multimodal systems that hold up beyond the demo.",
      impactLabel: "AI Signal",
      focusLabel: "Current Focus",
    },
    skills: {
      eyebrow: "AI Stack",
      title: "LLMs, NLP, deep learning, and cloud MLOps in one practical toolkit.",
      description:
        "Hands-on work across HuggingFace, LangChain, PyTorch, TensorFlow, AWS Bedrock, vLLM, Docker, Kubernetes, MLflow, Airflow, and GCP.",
    },
    projects: {
      eyebrow: "AI Case Studies",
      title: "Selected projects where retrieval quality, model behavior, and latency all matter.",
      description:
        "RAG literature review, emotion-aware mental health AI, and multimodal medical intelligence projects grounded in resume and public GitHub evidence.",
    },
    experience: {
      eyebrow: "Experience",
      title: "Applied AI experience across document intelligence, chatbots, and cloud deployment.",
      description:
        "Crewasis.ai and BrainerHub work spans corpus ingestion, LLM adaptation, NLP routing, structured extraction, and containerized model delivery.",
    },
    education: {
      eyebrow: "Education",
      title: "Northeastern data science graduate training plus computer science engineering.",
      description:
        "Graduate coursework in NLP, computer vision, supervised ML, data mining, MLOps, and LLMOps builds on KIIT computer science foundations.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let us talk about AI systems, LLM applications, or production ML workflows.",
      description:
        "Open to AI/ML engineering, NLP, RAG, LLMOps, and applied machine learning conversations.",
      chips: ["AI / ML Engineering", "RAG Systems", "LLMOps"],
      reachLabel: "Best Way To Reach Sai",
    },
  },
  footerTagline: "AI / ML engineer building grounded, scalable, and measurable intelligent systems.",
});

const dataScientistProfile = createBaseProfile({
  headline: "Data Scientist | Machine Learning, Forecasting, Computer Vision, and Analytics",
  about: [
    "I build data science workflows that connect clean data, model selection, validation, and stakeholder-facing outputs.",
    "My project work spans medical image classification, fraud anomaly detection, customer churn prediction, and retail sales forecasting.",
    "I bring an engineering lens to data science: reproducible pipelines, metric-aware validation, cloud experiment tracking, and dashboards that make results usable.",
  ],
  focusAreas: ["Predictive modeling", "Computer vision", "Anomaly detection", "Time series forecasting"],
  metrics: [
    { label: "Vision Recall", value: "99.49%" },
    { label: "Fraud ROC-AUC", value: "0.91" },
    { label: "Churn Records", value: "500K+" },
    { label: "Forecast Data", value: "420K+" },
  ],
  skills: dataScienceSkills,
  projects: [
    pneumoniaDetectionProject,
    fraudDetectionProject,
    turbofanPredictiveMaintenanceProject,
    customerChurnProject,
    walmartForecastingProject,
  ],
  experience: dataScienceExperience,
  resume: "Resume_Data_Scientist.pdf",
  sectionCopy: {
    about: {
      eyebrow: "About Sai",
      title: "Data scientist turning models into reliable, explainable decision systems.",
      impactLabel: "Model Signal",
      focusLabel: "Analytical Focus",
    },
    skills: {
      eyebrow: "Data Science Stack",
      title: "Machine learning, statistical modeling, cloud data, and visualization.",
      description:
        "Python, SQL, PyTorch, TensorFlow, Scikit-learn, XGBoost, Snowflake, Azure ML, MLflow, Tableau, Power BI, and time-series tooling.",
    },
    projects: {
      eyebrow: "Modeling Work",
      title: "Projects where metrics, validation, and operational usefulness drive the story.",
      description:
        "Computer vision screening, rare-event fraud detection, churn modeling, and retail forecasting with reproducible evaluation and clear outcomes.",
    },
    experience: {
      eyebrow: "Experience",
      title: "ML engineering experience with data science delivery discipline.",
      description:
        "Experience includes feature engineering, classification and regression, sequence models, forecasting modules, MLflow tracking, and stakeholder dashboards.",
    },
    education: {
      eyebrow: "Education",
      title: "Data science graduate study with a computer science engineering base.",
      description:
        "Northeastern coursework in supervised ML, data mining, computer vision, MLOps, and data engineering builds on KIIT coursework in ML, DL, analytics, and algorithms.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let us talk about data science, predictive modeling, or ML-backed analytics.",
      description:
        "Open to data scientist, ML engineer, analytics, forecasting, and computer vision opportunities.",
      chips: ["Data Science", "Predictive ML", "Forecasting"],
      reachLabel: "Best Way To Reach Sai",
    },
  },
  footerTagline: "Data scientist building validated models and decision-ready analytics workflows.",
});

export const portfolioProfiles: Record<ProfileSlug, PortfolioData> = {
  "ai-ml": aiMlProfile,
  datascientist: dataScientistProfile,
};
