/**
 * Shubham Kumar — Portfolio Data Store (V2 Signature Edition)
 * Centralized data store for Featured Projects, Architecture Explorer,
 * Currently Building, and Interactive Engineering Demonstrations.
 */

const PORTFOLIO_DATA = {
  personal: {
    name: "Shubham Kumar",
    role: "Software Engineer / Backend & Full Stack Developer",
    education: {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Graphic Era University, Dehradun",
      status: "3rd Year",
      period: "2024 — Present",
      expectedGraduation: 2028
    },
    location: "Dehradun, India",
    email: "shubham824045@gmail.com",
    phone: "+91 97981 74491",
    whatsappUrl: "https://wa.me/919798174491?text=Hi%20Shubham%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!",
    github: "https://github.com/kumar-shubham1",
    linkedin: "https://www.linkedin.com/in/shubham-k-62aa571b7/",
    leetcode: "https://leetcode.com/u/kumar-shubham1/",
    gfg: "https://www.geeksforgeeks.org/user/shubhamvezhpz/",
    resumeUrl: "https://drive.google.com/file/d/1A7FP-SUBR1kGe3iCnRIEs2DJ4KaCDzTW/view"
  },

  currentlyBuilding: [
    {
      title: "Distributed Consensus Protocols",
      category: "Systems Research",
      focus: "Implementing Raft consensus leader election and log replication in Python/Go to explore split-brain resilience.",
      status: "Active Prototype",
      tech: ["Raft", "Distributed Systems", "RPC", "Python"]
    },
    {
      title: "High-Throughput gRPC Microservices",
      category: "Backend Architecture",
      focus: "Benchmarking Protocol Buffers vs REST JSON serialization latencies under high concurrency workloads.",
      status: "Benchmarking",
      tech: ["Java", "gRPC", "Protobuf", "Docker"]
    },
    {
      title: "On-Device Edge Vision Pipelines",
      category: "AI Engineering",
      focus: "Optimizing quantized PyTorch models for zero-cloud latency inference in low-compute hardware environments.",
      status: "Model Quantization",
      tech: ["PyTorch", "ONNX", "Computer Vision"]
    }
  ],

  projects: [
    {
      id: "ordermesh",
      number: "01",
      title: "OrderMesh",
      subtitle: "Distributed Order Processing System",
      category: "distributed",
      categoryLabel: "Distributed Systems & Streaming",
      summary: "High-throughput, event-driven distributed order processing engine built with Apache Kafka and Docker to decouple microservice workflows and guarantee fault tolerance under peak traffic.",
      metrics: "990+ msgs/sec sustained throughput",
      tech: ["Python", "Apache Kafka", "Docker", "Microservices", "Dead Letter Queues", "Async IO"],
      githubUrl: "https://github.com/kumar-shubham1/OrderMesh",
      liveUrl: null,
      problem: "E-commerce order spikes often overwhelm monolithic relational databases, creating cascading service timeouts, dropped transaction states, and single points of failure.",
      solution: "Engineered an asynchronous, event-driven pipeline where incoming orders are published to partitioned Kafka topics, processed in parallel by decoupled consumers with exponential retry backoff and DLQ containment.",
      implementation: [
        "Partitioned Apache Kafka topics to allow scalable horizontal consumer worker scaling.",
        "Manual offset commit management to ensure strictly at-least-once delivery guarantees.",
        "Dead Letter Queue (DLQ) isolation routing corrupt messages without blocking the main event queue.",
        "Docker Compose orchestration for multi-container broker and worker deployment."
      ],
      decisions: "Chosen Kafka over RabbitMQ for persistent append-only log retention and deterministic multi-subscriber consumer group replays during failure recoveries.",
      architectureTag: "Event-Driven Producer/Consumer"
    },
    {
      id: "astraos",
      number: "02",
      title: "AstraOS",
      subtitle: "Offline AI Personal Operating Environment",
      category: "aiml",
      categoryLabel: "On-Device AI & Systems",
      summary: "An offline-first personal AI assistant and desktop productivity shell designed to run private multi-modal intelligence entirely on local device hardware without cloud telemetries.",
      metrics: "100% Offline Local Model Inference",
      tech: ["TypeScript", "On-Device AI", "Local LLMs", "Web Speech API", "Node.js", "Desktop Shell"],
      githubUrl: "https://github.com/kumar-shubham1/AstraOS",
      liveUrl: null,
      problem: "Cloud-hosted AI assistants leak sensitive personal queries, require persistent internet bandwidth, and incur unbounded API subscription costs.",
      solution: "Constructed an offline runtime shell leveraging local quantized models for privacy-preserving semantic query resolution, voice synthesis, and desktop command dispatch.",
      implementation: [
        "Lightweight TypeScript orchestrator managing command parsing and local tool executions.",
        "Bi-directional voice interface integrating Web Speech recognition and local text-to-speech.",
        "Contextual memory storage engine utilizing encrypted local JSON state caches.",
        "Zero-cloud network sandbox ensuring zero telemetry leaks."
      ],
      decisions: "Architected around local event buses rather than cloud webhooks to maintain sub-150ms command execution times entirely on-device.",
      architectureTag: "Local Event Bus & Quantized Runtime"
    },
    {
      id: "newssenseai",
      number: "03",
      title: "NewsSenseAI",
      subtitle: "AI-Powered News Intelligence Platform",
      category: "backend",
      categoryLabel: "Enterprise Backend & Spring AI",
      summary: "Contextual news aggregation and semantic ranking backend platform leveraging Java, Spring Boot, Spring AI, and PostgreSQL for real-time article retrieval and abstractive summarization.",
      metrics: "Sub-100ms API response latency",
      tech: ["Java", "Spring Boot", "Spring AI", "PostgreSQL", "REST APIs", "HikariCP", "Vector Search"],
      githubUrl: "https://github.com/kumar-shubham1/NewsSense",
      liveUrl: null,
      problem: "Traditional keyword news searches miss conceptual nuances, flood users with duplicate clickbait, and struggle with multi-source geopolitical context ranking.",
      solution: "Developed high-performance Spring Boot REST microservices integrating Spring AI for semantic vector embeddings, source credibility indexing, and geospatial news queries.",
      implementation: [
        "Spring Boot enterprise architecture following modular Service-Repository patterns.",
        "PostgreSQL connection pooling via HikariCP and B-tree indexing for low-latency queries.",
        "Spring AI integration for automated article summarization and key entity extraction.",
        "Geospatial query endpoints for radius-based regional news discovery."
      ],
      decisions: "Adopted Spring AI's unified client abstraction to keep the backend decoupled from specific LLM providers and simplify enterprise testing.",
      architectureTag: "Layered Spring Boot Microservice"
    },
    {
      id: "crop-disease",
      number: "04",
      title: "Crop Disease Prediction",
      subtitle: "Deep Learning-Based Crop Pathogen Detection",
      category: "aiml",
      categoryLabel: "Computer Vision & Diagnostics",
      summary: "End-to-end agricultural diagnostics pipeline deploying a customized PyTorch ResNet9 convolutional neural network for rapid plant leaf pathology diagnosis and actionable treatment guidance.",
      metrics: "Sub-second inference per image",
      tech: ["Python", "PyTorch", "ResNet9", "Flask", "React", "Next.js", "Docker"],
      githubUrl: "https://github.com/kumar-shubham1/Crop-Disease-Prediction",
      liveUrl: null,
      problem: "Smallholder farmers face severe crop yield loss due to delayed identification of fungal and viral leaf diseases without accessible agronomic specialists.",
      solution: "Engineered a deep learning inference system accessible via mobile-friendly web interface that classifies leaf disease images and serves localized treatment remedies.",
      implementation: [
        "Trained a lightweight ResNet9 CNN architecture in PyTorch achieving high validation accuracy with minimal parameter footprint.",
        "Constructed Flask REST endpoint handling image tensor normalization and confidence scoring.",
        "Integrated reactive web interface with real-time camera upload previews and diagnosis cards.",
        "Containerized with Docker for reproducible deployment across low-spec server targets."
      ],
      decisions: "Selected ResNet9 over heavyweight ResNet50 to reduce memory footprint by 80% while retaining over 97% classification fidelity on test datasets.",
      architectureTag: "CNN Tensor Pipeline + Flask REST"
    },
    {
      id: "uber-ambulance",
      number: "05",
      title: "Uber Ambulance",
      subtitle: "Emergency Medical Transport Platform",
      category: "fullstack",
      categoryLabel: "Full-Stack Geospatial Engineering",
      summary: "Mission-critical emergency ambulance dispatch and live tracking application built on the MERN stack with Google Maps Platform integration for real-time triage routing.",
      metrics: "Real-time GPS dispatch workflow",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Google Maps API", "Geospatial Indexing"],
      githubUrl: "https://github.com/kumar-shubham1/Uber-Ambulance",
      liveUrl: null,
      problem: "Fragmented emergency dispatch networks lead to critical response delays and lack of patient-to-hospital route transparency during medical emergencies.",
      solution: "Created an on-demand medical transport web application connecting patients with the closest certified ambulances and nearest specialized emergency trauma centers.",
      implementation: [
        "MongoDB 2dsphere geospatial indexing for sub-50ms radius queries of available ambulances.",
        "Google Maps JavaScript API and Directions API for real-time transit routing estimates.",
        "Two-sided role-based authentication workflows for emergency responders and distress callers.",
        "Optimized Express.js API handlers reducing dispatch handoff delays."
      ],
      decisions: "Utilized MongoDB geospatial spherical coordinates over external GIS services to minimize third-party API latency during critical emergency dispatch requests.",
      architectureTag: "MERN Geospatial Dispatch Loop"
    },
    {
      id: "disaster-relief",
      number: "06",
      title: "Disaster Relief Aid Portal",
      subtitle: "Algorithm-Based Relief Resource Allocation",
      category: "backend",
      categoryLabel: "Graph Algorithms & Logistics",
      summary: "Crisis logistics management platform leveraging Dijkstra's shortest-path graph algorithms and priority queues to calculate optimal supply distribution routes across damaged transit grids.",
      metrics: "Deterministic shortest-path allocation",
      tech: ["Python", "Flask", "JavaScript", "Leaflet", "Chart.js", "Graph Algorithms"],
      githubUrl: "https://github.com/kumar-shubham1/Disaster-Relief-Aid-Request-Portal",
      liveUrl: null,
      problem: "Natural disaster zones suffer from broken communication, impassable road segments, and chaotic resource misallocations that delay life-saving medical supplies.",
      solution: "Architected a graph-based logistics engine that models road network closures as weighted graph nodes, running Dijkstra's algorithm to dispatch priority aid efficiently.",
      implementation: [
        "Implemented graph pathfinding logic with priority queues to compute lowest-cost safe delivery routes.",
        "Built a multi-tier urgency triage queue prioritizing acute medical supplies over general goods.",
        "Interactive Leaflet canvas visualization showing live hazard heatmaps and road blockages.",
        "Flask backend providing structured GeoJSON routing coordinates."
      ],
      decisions: "Designed custom weighted graph data structures allowing real-time edge weight recalculations when emergency response teams report newly flooded or blocked roads.",
      architectureTag: "Dijkstra Priority Graph Engine"
    }
  ],

  architectures: {
    ordermesh: {
      title: "OrderMesh — Distributed Event-Driven Topology",
      nodes: [
        { id: "client", label: "Client / REST Gateway", type: "entry", desc: "HTTP Order POST requests received and authenticated." },
        { id: "producer", label: "Order Producer Service", type: "service", desc: "Validates schema, attaches idempotency UUID, writes to Kafka." },
        { id: "kafka", label: "Apache Kafka Cluster", type: "broker", desc: "Partitioned 'orders-inbound' topic with persistent commit logs." },
        { id: "consumer", label: "Order Processor Workers", type: "worker", desc: "Concurrent worker group pulling batches; handles inventory & payment." },
        { id: "dlq", label: "Dead Letter Queue (DLQ)", type: "fallback", desc: "Isolates unparseable or exhausted retry payloads for manual inspection." },
        { id: "db", label: "Order State Store", type: "storage", desc: "Stores finalized order states and transaction receipts." }
      ],
      flows: [
        { from: "client", to: "producer", label: "1. POST /order" },
        { from: "producer", to: "kafka", label: "2. Async Event Emit" },
        { from: "kafka", to: "consumer", label: "3. Consumer Poll (Partition Key)" },
        { from: "consumer", to: "db", label: "4. State Commit (Success)" },
        { from: "consumer", to: "dlq", label: "5. Route to DLQ (On Max Retries)" }
      ],
      tradeoffs: "Tradeoff: Kafka introduces cluster operational overhead compared to direct database writes, but achieves 990+ msgs/sec throughput and prevents downstream database exhaustion."
    },
    astraos: {
      title: "AstraOS — Local On-Device AI Pipeline",
      nodes: [
        { id: "user", label: "User Input (Voice / CLI)", type: "entry", desc: "Speech audio input via Web Speech API or raw text query." },
        { id: "parser", label: "Command Intent Engine", type: "service", desc: "Extracts system intents, arguments, and security permissions." },
        { id: "local_llm", label: "Quantized Local Model", type: "worker", desc: "Offline inference engine generating contextual tool calls." },
        { id: "bus", label: "Internal Event Bus", type: "broker", desc: "Dispatches commands to desktop environment utilities." },
        { id: "storage", label: "Encrypted State Cache", type: "storage", desc: "Local JSON memory logs with zero telemetry network egress." }
      ],
      flows: [
        { from: "user", to: "parser", label: "1. Capture Input" },
        { from: "parser", to: "local_llm", label: "2. Offline Prompt Context" },
        { from: "local_llm", to: "bus", label: "3. Structured Action Call" },
        { from: "bus", to: "storage", label: "4. Local Memory Commit" }
      ],
      tradeoffs: "Tradeoff: Running models on-device limits parameter sizes compared to cloud APIs, but yields 100% privacy, zero network latency, and complete autonomy."
    },
    newssenseai: {
      title: "NewsSenseAI — Spring AI Intelligence Pipeline",
      nodes: [
        { id: "client", label: "API Consumer", type: "entry", desc: "Search and intelligence queries specifying topics and locations." },
        { id: "controller", label: "Spring Boot REST Controller", type: "service", desc: "Request validation, rate-limiting, and response serialization." },
        { id: "postgres", label: "PostgreSQL Database", type: "storage", desc: "Indexed relational tables + vector search indices." },
        { id: "spring_ai", label: "Spring AI Orchestrator", type: "worker", desc: "Abstractive summarization and contextual sentiment scoring." },
        { id: "hikari", label: "HikariCP Connection Pool", type: "broker", desc: "Maintains optimal connection reuse for high concurrency." }
      ],
      flows: [
        { from: "client", to: "controller", label: "1. GET /api/v1/news/semantic" },
        { from: "controller", to: "hikari", label: "2. Acquire Connection" },
        { from: "hikari", to: "postgres", label: "3. Vector & Filter Search" },
        { from: "controller", to: "spring_ai", label: "4. LLM Contextual Summarize" }
      ],
      tradeoffs: "Tradeoff: Layered Spring architecture has higher initial memory startup than Node.js, but delivers rock-solid type safety, dependency injection, and enterprise reliability."
    }
  }
};

// Helper exports for global browser context
if (typeof window !== 'undefined') {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
