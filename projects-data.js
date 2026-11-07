/**
 * SHUBHAM KUMAR — PERSONAL PORTFOLIO CENTRALIZED DATA STORE
 * Clean, readable, verified project details, architectures, and engineering profiles.
 */

const PORTFOLIO_DATA = {
  personal: {
    name: "Shubham Kumar",
    wordmark: "Shubham Kumar",
    title: "Software Engineer | Backend & Full Stack Developer | AI/ML Enthusiast",
    headline: "Building intelligent software. Engineering systems that scale.",
    introduction: "I'm Shubham Kumar, a Computer Science undergraduate and software developer interested in backend engineering, distributed systems and AI-powered applications. I enjoy turning complex technical ideas into practical, reliable software.",
    education: {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Graphic Era University, Dehradun",
      status: "3rd Year",
      period: "2024 – Present",
      expectedGraduation: 2028
    },
    location: "Dehradun, Uttarakhand, India",
    email: "shubham824045@gmail.com",
    phone: "+91 97981 74491",
    whatsappUrl: "https://wa.me/919798174491?text=Hi%20Shubham%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!",
    github: "https://github.com/kumar-shubham1",
    linkedin: "https://www.linkedin.com/in/shubham-k-62aa571b7/",
    leetcode: "https://leetcode.com/u/kumar-shubham1/",
    gfg: "https://www.geeksforgeeks.org/user/shubhamvezhpz/",
    resumeUrl: "https://drive.google.com/file/d/1A7FP-SUBR1kGe3iCnRIEs2DJ4KaCDzTW/view"
  },

  skills: {
    programming: [
      { name: "Java", note: "Enterprise backend, OOP, Spring Boot" },
      { name: "Python", note: "Distributed workers, PyTorch ML, Flask" },
      { name: "C / C++", note: "DSA foundations, memory concepts" },
      { name: "JavaScript", note: "Full-stack apps, async patterns" },
      { name: "TypeScript", note: "Type-safe applications, Node.js" },
      { name: "SQL", note: "Relational queries, schema design" }
    ],
    backend: [
      { name: "Spring Boot", note: "RESTful microservices, Spring Data JPA" },
      { name: "Spring AI", note: "Model abstractions, vector search" },
      { name: "Node.js & Express", note: "High-concurrency API servers" },
      { name: "Flask", note: "Python micro-framework, ML inference" },
      { name: "REST APIs", note: "HTTP semantics, pagination, rate limits" }
    ],
    frontend: [
      { name: "React.js", note: "Component hierarchy, hooks, state" },
      { name: "Next.js", note: "Server-side rendering, routing" },
      { name: "Vue.js", note: "Lightweight reactive interfaces" },
      { name: "HTML5 & CSS3", note: "Semantic structure, responsive layouts" },
      { name: "Tailwind CSS", note: "Utility-first design systems" },
      { name: "Bootstrap", note: "Rapid prototyping grids" }
    ],
    databases: [
      { name: "PostgreSQL", note: "B-Tree indexing, complex joins" },
      { name: "MongoDB", note: "Document store, geospatial queries" },
      { name: "MySQL", note: "Relational storage, transactions" }
    ],
    aiml: [
      { name: "PyTorch", note: "Deep learning model training & inference" },
      { name: "Machine Learning", note: "Classification, regression, metrics" },
      { name: "Deep Learning", note: "CNN architectures, image processing" },
      { name: "Computer Vision", note: "ResNet9, OpenCV image preprocessing" },
      { name: "Generative AI", note: "LLM integration, embeddings, semantic search" }
    ],
    cloudDevops: [
      { name: "Docker", note: "Container packaging, multi-service compose" },
      { name: "Apache Kafka", note: "Event streaming, topic partitions, DLQ" },
      { name: "Google Cloud Platform", note: "Compute Engine, storage bucket setup" },
      { name: "Git & GitHub", note: "Branching workflows, version control" },
      { name: "Linux & Bash", note: "CLI navigation, process automation" },
      { name: "Postman", note: "API design testing, contract validation" }
    ],
    computerScience: [
      { name: "Data Structures & Algorithms", note: "700+ solved problems on LeetCode/GFG" },
      { name: "Object-Oriented Programming", note: "Encapsulation, inheritance, SOLID" },
      { name: "DBMS", note: "ACID properties, indexing, normalization" },
      { name: "Operating Systems", note: "Process scheduling, concurrency, memory" },
      { name: "Computer Networks", note: "TCP/IP, HTTP/HTTPS, DNS, WebSockets" },
      { name: "System Design", note: "Scalability, decoupling, caching, brokers" }
    ]
  },

  projects: [
    {
      id: "ordermesh",
      number: "01",
      title: "OrderMesh",
      subtitle: "Distributed Order Processing System",
      category: "distributed",
      categoryLabel: "Distributed Systems",
      summary: "An event-driven order processing engine using Apache Kafka and Docker to decouple microservice workflows and sustain high throughput during peak load.",
      metrics: "990+ messages/sec in performance testing",
      tech: ["Python", "Apache Kafka", "Docker", "Microservices", "Dead Letter Queues"],
      githubUrl: "https://github.com/kumar-shubham1/OrderMesh",
      liveUrl: null,
      whatProblem: "During sudden shopping spikes, synchronous databases get overwhelmed with write requests, causing timeouts, payment drops, and cascading service failures.",
      whyBuilt: "I wanted to understand how large e-commerce platforms process thousands of transactions per second without locking up their primary databases.",
      howItWorks: "Incoming orders are published to partitioned Kafka topics. Separate consumer workers process payment, update inventory, and commit states independently with automatic retry policies.",
      keyChallenge: "Handling malformed payloads without blocking healthy orders. I solved this by implementing Dead Letter Queues (DLQ) with exponential backoff retries.",
      whatLearned: "How log-based event streaming provides durability, how consumer groups scale horizontally, and why idempotency is critical in distributed transactions."
    },
    {
      id: "astraos",
      number: "02",
      title: "AstraOS",
      subtitle: "Offline AI Personal Operating System",
      category: "aiml",
      categoryLabel: "On-Device AI",
      summary: "A private, offline-first personal assistant shell that runs voice and text AI interactions directly on local hardware without sending telemetry to cloud servers.",
      metrics: "100% on-device offline inference",
      tech: ["TypeScript", "On-Device AI", "Local Models", "Web Speech API", "Node.js"],
      githubUrl: "https://github.com/kumar-shubham1/AstraOS",
      liveUrl: null,
      whatProblem: "Cloud-hosted AI assistants send private conversational queries to external servers, require constant internet access, and introduce network latency.",
      whyBuilt: "I wanted to explore the feasibility of running responsive personal productivity assistants completely locally on personal computer hardware.",
      howItWorks: "A lightweight TypeScript runtime processes natural language voice and text input, routes intents through local quantized model runtimes, and manages personal desktop utilities via an internal event loop.",
      keyChallenge: "Keeping memory consumption low and latency snappy on standard hardware without relying on cloud GPU clusters.",
      whatLearned: "Trade-offs between model parameter size and inference latency, speech recognition streaming in the browser, and offline state caching."
    },
    {
      id: "newssenseai",
      number: "03",
      title: "NewsSenseAI",
      subtitle: "AI-Powered News Intelligence Platform",
      category: "backend",
      categoryLabel: "Backend & Spring AI",
      summary: "An enterprise-grade news aggregation platform using Spring Boot, PostgreSQL, and Spring AI for semantic search, topic grouping, and contextual summaries.",
      metrics: "Sub-100ms API response latency",
      tech: ["Java", "Spring Boot", "Spring AI", "PostgreSQL", "REST APIs", "HikariCP"],
      githubUrl: "https://github.com/kumar-shubham1/NewsSense",
      liveUrl: null,
      whatProblem: "Readers waste time scrolling through repetitive news articles across different outlets that say the same thing with clickbait headlines.",
      whyBuilt: "To build a robust Java Spring backend that enriches news streams with semantic understanding rather than basic keyword queries.",
      howItWorks: "Spring Boot microservices ingest articles, store them in PostgreSQL with B-tree indices, and leverage Spring AI to generate abstractive summaries, category scores, and location tags.",
      keyChallenge: "Tuning connection pooling and database indices to keep response times under 100ms while executing complex multi-criteria filters.",
      whatLearned: "Production Spring Boot architectural patterns, HikariCP connection tuning, and integrating modern AI frameworks in the Java ecosystem."
    },
    {
      id: "crop-disease",
      number: "04",
      title: "Crop Disease Prediction",
      subtitle: "AI-Based Crop Disease Detection",
      category: "aiml",
      categoryLabel: "Computer Vision",
      summary: "A deep learning diagnostic web app that identifies plant leaf pathogens from photos in seconds, powered by a custom-trained ResNet9 neural network.",
      metrics: "Instant image diagnosis with confidence scores",
      tech: ["Python", "PyTorch", "ResNet9", "Flask", "React", "Next.js", "Docker"],
      githubUrl: "https://github.com/kumar-shubham1/Crop-Disease-Prediction",
      liveUrl: null,
      whatProblem: "Farmers often fail to identify plant diseases early, leading to crop loss and misuse of expensive chemical treatments.",
      whyBuilt: "To create an accessible diagnostic tool that gives farmers instant disease detection and remedy advice right from their phone camera.",
      howItWorks: "The user takes or uploads a leaf picture. A Flask REST API normalizes the image tensor, runs inference against a PyTorch ResNet9 CNN, and returns the disease name, confidence score, and treatment instructions.",
      keyChallenge: "Balancing model accuracy with fast mobile upload speeds on low-bandwidth rural connections.",
      whatLearned: "Convolutional neural network training, data augmentation techniques, tensor serialization, and containerizing PyTorch models with Docker."
    },
    {
      id: "ai-job-tracker",
      number: "05",
      title: "AI Job Tracker",
      subtitle: "Intelligent Job Application Management",
      category: "fullstack",
      categoryLabel: "Full Stack Web",
      summary: "A full-stack application that organizes the developer job search pipeline, tracking applications across stages with smart resume-to-job matching insights.",
      metrics: "Centralized pipeline with status tracking",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Tailwind CSS"],
      githubUrl: "https://github.com/kumar-shubham1/AI-Job-Tracker",
      liveUrl: null,
      whatProblem: "Active job applicants submit dozens of applications across different platforms, quickly losing track of status, interview stages, and follow-up deadlines.",
      whyBuilt: "To replace chaotic spreadsheets with an interactive kanban pipeline tailored specifically to developer job applications.",
      howItWorks: "Users log positions, track stages (Applied, Interviewing, Offered, Rejected), upload job descriptions to highlight key skill matches, and schedule follow-up reminders.",
      keyChallenge: "Structuring a flexible MongoDB schema that accommodates varied company application processes while maintaining fast query speeds.",
      whatLearned: "Full-stack MERN patterns, JWT authentication, state management for drag-and-drop boards, and building productivity tools people use daily."
    },
    {
      id: "disaster-relief",
      number: "06",
      title: "Disaster Relief Aid Portal",
      subtitle: "Disaster Resource Allocation System",
      category: "backend",
      categoryLabel: "Algorithms & Logistics",
      summary: "A disaster management logistics platform using Dijkstra's shortest-path algorithm and priority queues to allocate emergency resources across damaged infrastructure.",
      metrics: "Deterministic shortest-path route calculation",
      tech: ["Python", "Flask", "JavaScript", "Leaflet", "Chart.js", "Graph Algorithms"],
      githubUrl: "https://github.com/kumar-shubham1/Disaster-Relief-Aid-Request-Portal",
      liveUrl: null,
      whatProblem: "During natural disasters, blocked roads and damaged bridges cause relief trucks to get stuck or misallocate critical medical supplies to wrong depots.",
      whyBuilt: "To explore how classical graph algorithms can solve high-stakes logistics bottlenecks in disaster crisis scenarios.",
      howItWorks: "Emergency road grids are represented as a weighted graph. When roads flood or close, edge weights update dynamically, and Dijkstra's algorithm computes the safest, fastest supply delivery routes displayed on an interactive Leaflet map.",
      keyChallenge: "Recalculating shortest paths in real time as field responders report newly impassable roads without resetting the entire network state.",
      whatLearned: "Practical graph theory implementation with adjacency lists and min-heaps, geospatial coordinates rendering with Leaflet, and priority triage queue management."
    }
  ],

  architectures: {
    ordermesh: {
      title: "OrderMesh — Distributed Event-Driven Topology",
      note: "Conceptual architecture reflecting the implemented producer-consumer Kafka pipeline.",
      nodes: [
        { id: "gateway", label: "REST Order Gateway", type: "service", desc: "Receives order requests, validates payload schemas, assigns idempotency keys." },
        { id: "producer", label: "Kafka Order Producer", type: "service", desc: "Serializes order events and publishes asynchronously to topic partitions." },
        { id: "broker", label: "Kafka Broker Cluster", type: "broker", desc: "Partitioned 'orders-inbound' topic with persistent write-ahead logs." },
        { id: "workers", label: "Order Processor Workers", type: "worker", desc: "Consumer group reading partition batches for payment and inventory checks." },
        { id: "dlq", label: "Dead Letter Queue (DLQ)", type: "fallback", desc: "Safely isolates failed or unparseable messages for investigation." },
        { id: "db", label: "Persistent State Store", type: "storage", desc: "Final transaction records committed with at-least-once delivery." }
      ],
      flows: [
        { from: "REST Gateway", to: "Kafka Order Producer", label: "1. POST /api/orders" },
        { from: "Kafka Order Producer", to: "Kafka Broker Cluster", label: "2. Async Event Emit" },
        { from: "Kafka Broker Cluster", to: "Order Processor Workers", label: "3. Partition Batch Poll" },
        { from: "Order Processor Workers", to: "Persistent State Store", label: "4. State Commit (Success)" },
        { from: "Order Processor Workers", to: "Dead Letter Queue", label: "5. Route to DLQ (On Failure)" }
      ],
      tradeoffs: "Trade-off: Adding a Kafka broker cluster introduces deployment and operational overhead compared to direct SQL database writes, but protects downstream databases from traffic spikes and delivers 990+ messages/sec sustained throughput."
    },
    astraos: {
      title: "AstraOS — On-Device Offline AI Pipeline",
      note: "Conceptual architecture reflecting the local speech and quantized model inference flow.",
      nodes: [
        { id: "user", label: "Voice / Text Input", type: "entry", desc: "Captures natural speech via Web Speech API or typed terminal commands." },
        { id: "parser", label: "Intent Parser", type: "service", desc: "Extracts action intents and parameters from natural language prompts." },
        { id: "llm", label: "Local Quantized Model", type: "worker", desc: "Executes offline reasoning without external API calls or network dependencies." },
        { id: "bus", label: "Internal Event Bus", type: "broker", desc: "Dispatches commands to desktop environment utilities and tools." },
        { id: "cache", label: "Encrypted Local Cache", type: "storage", desc: "Persists context history and preferences directly on user device." }
      ],
      flows: [
        { from: "Voice / Text Input", to: "Intent Parser", label: "1. Stream Audio / Text" },
        { from: "Intent Parser", to: "Local Quantized Model", label: "2. Prompt Formulation" },
        { from: "Local Quantized Model", to: "Internal Event Bus", label: "3. Action Command Emit" },
        { from: "Internal Event Bus", to: "Encrypted Local Cache", label: "4. Local State Update" }
      ],
      tradeoffs: "Trade-off: Local models have smaller parameter counts than cloud APIs, but guarantee complete privacy, work 100% offline, and avoid recurring API subscription costs."
    },
    newssenseai: {
      title: "NewsSenseAI — Spring AI Intelligence Pipeline",
      note: "Conceptual architecture reflecting the Spring Boot and PostgreSQL backend.",
      nodes: [
        { id: "client", label: "Client Application", type: "entry", desc: "Queries articles by category, keyword, confidence score, and region." },
        { id: "controller", label: "Spring Boot REST Controller", type: "service", desc: "Validates incoming queries, manages security, and routes requests." },
        { id: "hikari", label: "HikariCP Connection Pool", type: "broker", desc: "Maintains optimal connection reuse for high concurrency under load." },
        { id: "postgres", label: "PostgreSQL Database", type: "storage", desc: "B-Tree indexed article tables with vector embedding support." },
        { id: "ai", label: "Spring AI Orchestrator", type: "worker", desc: "Coordinates article summarization and topic grouping." }
      ],
      flows: [
        { from: "Client Application", to: "Spring Boot REST Controller", label: "1. GET /api/v1/news" },
        { from: "Spring Boot REST Controller", to: "HikariCP Connection Pool", label: "2. Acquire DB Connection" },
        { from: "HikariCP Connection Pool", to: "PostgreSQL Database", label: "3. Indexed Query & Fetch" },
        { from: "Spring Boot REST Controller", to: "Spring AI Orchestrator", label: "4. Semantic Summarization" }
      ],
      tradeoffs: "Trade-off: Spring Boot has a larger initial memory footprint compared to minimal Node.js frameworks, but provides robust compile-time type safety, enterprise dependency injection, and clean architectural maintainability."
    }
  },

  verifiedGitHubRepos: [
    {
      name: "OrderMesh",
      description: "Distributed Order Processing System engineered with Apache Kafka, Python, and Docker.",
      language: "Python",
      stars: 1,
      forks: 0,
      url: "https://github.com/kumar-shubham1/OrderMesh"
    },
    {
      name: "AstraOS",
      description: "Offline-first personal AI operating environment with local model inference and desktop utilities.",
      language: "TypeScript",
      stars: 1,
      forks: 0,
      url: "https://github.com/kumar-shubham1/AstraOS"
    },
    {
      name: "NewsSense",
      description: "AI-Powered News Intelligence Platform using Java, Spring Boot, PostgreSQL, and Spring AI.",
      language: "Java",
      stars: 1,
      forks: 0,
      url: "https://github.com/kumar-shubham1/NewsSense"
    },
    {
      name: "Crop-Disease-Prediction",
      description: "Deep learning crop disease detection using PyTorch ResNet9 with Flask REST API.",
      language: "Python",
      stars: 1,
      forks: 0,
      url: "https://github.com/kumar-shubham1/Crop-Disease-Prediction"
    },
    {
      name: "AI-Job-Tracker",
      description: "Full-stack job application management platform with tracking pipelines and status workflows.",
      language: "JavaScript",
      stars: 1,
      forks: 0,
      url: "https://github.com/kumar-shubham1"
    },
    {
      name: "Disaster-Relief-Aid-Request-Portal",
      description: "Algorithm-based disaster relief resource allocation leveraging Dijkstra's shortest-path graph calculations.",
      language: "Python",
      stars: 1,
      forks: 0,
      url: "https://github.com/kumar-shubham1/Disaster-Relief-Aid-Request-Portal"
    }
  ]
};

// Global export for vanilla browser environment
if (typeof window !== 'undefined') {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
