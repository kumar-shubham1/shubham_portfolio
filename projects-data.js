/**
 * SHUBHAM KUMAR — ULTIMATE PORTFOLIO CENTRALIZED DATA STORE
 * Single source of truth for Personal Details, Featured Projects,
 * System Architectures, GitHub Activity Fallbacks, and Currently Building items.
 */

const PORTFOLIO_DATA = {
  personal: {
    name: "Shubham Kumar",
    title: "Software Engineer | Backend & Full Stack Developer | AI/ML Enthusiast",
    headline: "Engineering ideas into systems that matter.",
    introduction: "I build scalable backend systems, distributed applications, and AI-powered software. I enjoy solving real-world problems through clean code, thoughtful system design, and modern technologies.",
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

  currentlyBuilding: {
    activeProjects: [
      {
        title: "Distributed Consensus Protocols (Raft)",
        category: "Systems Research",
        focus: "Implementing leader election, log replication, and heartbeat mechanisms in Python/Go to examine network partition split-brain resilience.",
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
    technologiesExploring: ["Raft Consensus", "gRPC / Protobuf", "eBPF", "Vector Indexing (HNSW)", "Quantized LLMs"],
    engineeringInterests: [
      "Distributed Stream Processing & Event Brokers",
      "High-Throughput Fault-Tolerant Microservices",
      "Applied Deep Learning & Computer Vision",
      "Algorithmic Optimization & Graph Systems"
    ],
    learningGoals: [
      "Master distributed storage engine internals (LSM Trees, WAL)",
      "Deepen Spring Cloud and Kubernetes container orchestration",
      "Expand competitive coding achievements on LeetCode & Codeforces"
    ]
  },

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
      architecture: "Producer services publish validated order events with idempotency keys to partitioned Apache Kafka topics. Consumer groups pull batches in parallel, processing inventory allocation and payment validation with manual offset commits. Faulty messages are isolated into Dead Letter Queues.",
      keyChallenges: "Managing partition rebalancing during dynamic consumer scaling and eliminating message duplication through consumer-side idempotency verification.",
      engineeringDecisions: "Chosen Kafka over RabbitMQ for persistent append-only log retention and deterministic multi-subscriber consumer group replays during failure recoveries.",
      highlights: [
        "Partitioned Apache Kafka topics to allow scalable horizontal consumer worker scaling.",
        "Manual offset commit management to ensure strictly at-least-once delivery guarantees.",
        "Dead Letter Queue (DLQ) isolation routing corrupt messages without blocking the main event queue.",
        "Docker Compose orchestration for multi-container broker and worker deployment."
      ],
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
      architecture: "A local TypeScript event loop manages bidirectional Web Speech audio capture, routes natural language intents through local quantized model runtimes, and commits contextual state to encrypted local storage without external network egress.",
      keyChallenges: "Operating within strict local RAM and CPU compute envelopes while maintaining natural conversational response times under 150ms.",
      engineeringDecisions: "Architected around local event buses rather than cloud webhooks to maintain complete data autonomy and privacy-preserving execution.",
      highlights: [
        "Lightweight TypeScript orchestrator managing command parsing and local tool executions.",
        "Bi-directional voice interface integrating Web Speech recognition and local text-to-speech.",
        "Contextual memory storage engine utilizing encrypted local JSON state caches.",
        "Zero-cloud network sandbox ensuring complete data privacy."
      ],
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
      architecture: "Layered Spring Boot enterprise application featuring HikariCP connection pooling, indexed PostgreSQL data access via Spring Data JPA, and decoupled Spring AI model client abstractions.",
      keyChallenges: "Optimizing database indexing strategies to handle concurrent geospatial queries and vector similarity searches with sub-100ms latency.",
      engineeringDecisions: "Adopted Spring AI's unified client abstraction to keep the backend decoupled from specific LLM providers and simplify enterprise testing.",
      highlights: [
        "Spring Boot enterprise architecture following modular Service-Repository patterns.",
        "PostgreSQL connection pooling via HikariCP and B-tree indexing for low-latency queries.",
        "Spring AI integration for automated article summarization and key entity extraction.",
        "Geospatial query endpoints for radius-based regional news discovery."
      ],
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
      architecture: "PyTorch-trained ResNet9 neural network weights served through a lightweight Flask REST inference worker, consuming preprocessed multipart tensor payloads from a Next.js/React frontend.",
      keyChallenges: "Mitigating class imbalance across rare leaf rust conditions and ensuring high inference accuracy across varying mobile camera lighting conditions.",
      engineeringDecisions: "Selected ResNet9 over heavyweight ResNet50 to reduce memory footprint by 80% while retaining over 97% classification fidelity on test datasets.",
      highlights: [
        "Trained a lightweight ResNet9 CNN architecture in PyTorch achieving high validation accuracy with minimal parameter footprint.",
        "Constructed Flask REST endpoint handling image tensor normalization and confidence scoring.",
        "Integrated reactive web interface with real-time camera upload previews and diagnosis cards.",
        "Containerized with Docker for reproducible deployment across low-spec server targets."
      ],
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
      architecture: "Node.js and Express REST backend utilizing MongoDB 2dsphere spherical geospatial indexing for rapid proximity discovery, paired with Google Maps JavaScript Directions API on the client.",
      keyChallenges: "Minimizing GPS coordinate serialization latency and preventing concurrent dispatch race conditions when multiple ambulances accept an emergency distress signal.",
      engineeringDecisions: "Utilized MongoDB geospatial spherical coordinates over external GIS services to minimize third-party API latency during critical emergency dispatch requests.",
      highlights: [
        "MongoDB 2dsphere geospatial indexing for sub-50ms radius queries of available ambulances.",
        "Google Maps JavaScript API and Directions API for real-time transit routing estimates.",
        "Two-sided role-based authentication workflows for emergency responders and distress callers.",
        "Optimized Express.js API handlers reducing dispatch handoff delays."
      ],
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
      architecture: "Flask Python backend maintaining in-memory weighted adjacency list graph structures, computing shortest transit paths via min-heaps and delivering GeoJSON vector layers to Leaflet maps.",
      keyChallenges: "Dynamically updating road segment weights in the graph when first responders report newly flooded or blocked transport corridors without restarting the routing engine.",
      engineeringDecisions: "Designed custom weighted graph data structures allowing real-time edge weight recalculations with minimal computational complexity.",
      highlights: [
        "Implemented graph pathfinding logic with priority queues to compute lowest-cost safe delivery routes.",
        "Built a multi-tier urgency triage queue prioritizing acute medical supplies over general goods.",
        "Interactive Leaflet canvas visualization showing live hazard heatmaps and road blockages.",
        "Flask backend providing structured GeoJSON routing coordinates."
      ],
      architectureTag: "Dijkstra Priority Graph Engine"
    }
  ],

  architectures: {
    ordermesh: {
      title: "OrderMesh — Distributed Event-Driven Topology",
      subtitle: "Conceptual blueprint reflecting actual repository implementation (Python, Kafka, Docker)",
      nodes: [
        { id: "client", label: "Client / REST Gateway", type: "entry", desc: "HTTP Order POST requests received, validated, and given idempotency UUIDs." },
        { id: "producer", label: "Order Producer Service", type: "service", desc: "Serializes payloads, assigns partition keys, and pushes asynchronously to Kafka." },
        { id: "kafka", label: "Apache Kafka Broker Cluster", type: "broker", desc: "Partitioned 'orders-inbound' topic with distributed commit log persistence." },
        { id: "consumer", label: "Order Processor Workers", type: "worker", desc: "Horizontal consumer group polling batches for inventory, ledger & notifications." },
        { id: "dlq", label: "Dead Letter Queue (DLQ)", type: "fallback", desc: "Isolates unparseable or retry-exhausted messages for telemetry review." },
        { id: "db", label: "Persistent Order Store", type: "storage", desc: "Final order lifecycle states and transaction commitments." }
      ],
      flows: [
        { from: "Client Gateway", to: "Producer Service", label: "1. POST /api/v1/orders" },
        { from: "Producer Service", to: "Kafka Broker", label: "2. Async Partition Emit" },
        { from: "Kafka Broker", to: "Consumer Workers", label: "3. Consumer Poll (Partition Key)" },
        { from: "Consumer Workers", to: "Persistent Store", label: "4. State Commit (Success)" },
        { from: "Consumer Workers", to: "Dead Letter Queue", label: "5. Route to DLQ (On Retry Expiry)" }
      ],
      tradeoffs: "Tradeoff Analysis: Introducing Kafka adds broker cluster operational complexity compared to direct database writes, but decouples producer availability from database latency, absorbs peak spikes, and yields 990+ msgs/sec throughput."
    },
    astraos: {
      title: "AstraOS — Local On-Device AI Pipeline",
      subtitle: "Conceptual blueprint reflecting actual repository implementation (TypeScript, Local AI, Web Speech)",
      nodes: [
        { id: "user", label: "User Input (Voice / CLI)", type: "entry", desc: "Continuous speech capture via Web Speech API or keyboard terminal prompt." },
        { id: "parser", label: "Command & Intent Parser", type: "service", desc: "Normalizes raw text into structured intent queries with parameter extraction." },
        { id: "local_llm", label: "Quantized Local Model Runtime", type: "worker", desc: "Offline inference engine generating contextual tool calls without cloud access." },
        { id: "bus", label: "Desktop Internal Event Bus", type: "broker", desc: "Coordinates command dispatch across local desktop environment utilities." },
        { id: "storage", label: "Encrypted State & Memory Cache", type: "storage", desc: "Local JSON memory logs and user preferences with zero telemetry egress." }
      ],
      flows: [
        { from: "Voice / CLI Input", to: "Intent Parser", label: "1. Audio / Text Stream" },
        { from: "Intent Parser", to: "Local Quantized Model", label: "2. Contextual Prompt Dispatch" },
        { from: "Local Quantized Model", to: "Event Bus", label: "3. Action Execution Call" },
        { from: "Event Bus", to: "Encrypted State Cache", label: "4. Local Memory Commit" }
      ],
      tradeoffs: "Tradeoff Analysis: Local on-device models have smaller parameter counts than trillion-parameter cloud APIs, but deliver 100% privacy, zero latency over internet boundaries, and continuous offline availability."
    },
    newssenseai: {
      title: "NewsSenseAI — Spring AI Intelligence Pipeline",
      subtitle: "Conceptual blueprint reflecting actual repository implementation (Java, Spring Boot, Spring AI, PostgreSQL)",
      nodes: [
        { id: "client", label: "API Consumer / Dashboard", type: "entry", desc: "Semantic query specifying target category, score, and geospatial radius." },
        { id: "controller", label: "Spring Boot REST Controller", type: "service", desc: "Request validation, authentication, and HTTP response serialization." },
        { id: "postgres", label: "PostgreSQL Database", type: "storage", desc: "B-Tree indexed relational articles + vector search embeddings." },
        { id: "spring_ai", label: "Spring AI Orchestrator", type: "worker", desc: "LLM abstraction generating contextual abstractive summaries and metadata." },
        { id: "hikari", label: "HikariCP Connection Pool", type: "broker", desc: "High-performance connection reuse keeping database access sub-10ms." }
      ],
      flows: [
        { from: "API Consumer", to: "Spring REST Controller", label: "1. GET /api/v1/news/semantic" },
        { from: "Spring REST Controller", to: "HikariCP Pool", label: "2. Acquire DB Connection" },
        { from: "HikariCP Pool", to: "PostgreSQL Database", label: "3. Vector & Relational Query" },
        { from: "Spring REST Controller", to: "Spring AI Orchestrator", label: "4. LLM Summary Context" }
      ],
      tradeoffs: "Tradeoff Analysis: Layered enterprise Spring Boot requires slightly higher JVM startup overhead, but provides compile-time type safety, robust connection pooling, and seamless Spring AI ecosystem integration."
    }
  },

  verifiedGitHubRepos: [
    {
      name: "OrderMesh",
      description: "Distributed Order Processing System engineered with Apache Kafka, Python, and Docker. 990+ msgs/sec.",
      language: "Python",
      stars: 1,
      forks: 0,
      url: "https://github.com/kumar-shubham1/OrderMesh",
      topics: ["kafka", "distributed-systems", "docker", "microservices"]
    },
    {
      name: "AstraOS",
      description: "Offline-first AI personal operating environment with local inference, voice synthesis, and desktop shell.",
      language: "TypeScript",
      stars: 1,
      forks: 0,
      url: "https://github.com/kumar-shubham1/AstraOS",
      topics: ["typescript", "on-device-ai", "offline-first", "speech-api"]
    },
    {
      name: "NewsSense",
      description: "AI-Powered News Intelligence Platform using Java, Spring Boot, PostgreSQL, and Spring AI framework.",
      language: "Java",
      stars: 1,
      forks: 0,
      url: "https://github.com/kumar-shubham1/NewsSense",
      topics: ["spring-boot", "spring-ai", "postgresql", "java"]
    },
    {
      name: "Crop-Disease-Prediction",
      description: "Deep learning crop disease detection pipeline using custom-trained ResNet9 in PyTorch with Flask REST API.",
      language: "Python",
      stars: 1,
      forks: 0,
      url: "https://github.com/kumar-shubham1/Crop-Disease-Prediction",
      topics: ["pytorch", "resnet9", "computer-vision", "flask"]
    },
    {
      name: "Uber-Ambulance",
      description: "Emergency ambulance booking & hospital discovery platform with MongoDB 2dsphere geospatial indexing.",
      language: "JavaScript",
      stars: 1,
      forks: 0,
      url: "https://github.com/kumar-shubham1/Uber-Ambulance",
      topics: ["mern-stack", "geospatial", "google-maps-api", "express"]
    },
    {
      name: "Disaster-Relief-Aid-Request-Portal",
      description: "Algorithm-based disaster relief resource allocation leveraging Dijkstra's shortest-path graph calculations.",
      language: "Python",
      stars: 1,
      forks: 0,
      url: "https://github.com/kumar-shubham1/Disaster-Relief-Aid-Request-Portal",
      topics: ["dijkstra", "graph-algorithms", "flask", "leaflet"]
    }
  ]
};

// Global export for vanilla browser environment
if (typeof window !== 'undefined') {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
