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
  ],

  /* ==========================================================================
     ENGINEERING PRINCIPLES (Core architectural values with real project examples)
     ========================================================================== */
  engineeringPrinciples: [
    {
      id: "reliability",
      title: "Reliability & Fault Isolation",
      subtitle: "Systems must fail predictably and recover without cascading damage.",
      description: "Writing code that passes a happy-path test is straightforward. True engineering begins when third-party APIs fail, brokers disconnect, or malformed data enters the queue.",
      example: "In OrderMesh, implemented isolated Dead Letter Queues (DLQ) with exponential backoff retries so corrupt payloads never stall the partition pipeline for valid orders."
    },
    {
      id: "performance",
      title: "Performance & Low-Latency Mechanics",
      subtitle: "Measure latency distributions, not just synthetic averages.",
      description: "Latency tails (P95, P99) define the user experience under scale. Optimizations should stem from algorithmic choices, connection pooling, and serialization efficiency.",
      example: "Tuned PostgreSQL B-Tree indexes and HikariCP connection pool parameters in NewsSenseAI to sustain sub-100ms API response latencies during multi-criteria article queries."
    },
    {
      id: "maintainability",
      title: "Maintainability & Clean Abstractions",
      subtitle: "Code is read significantly more often than it is written.",
      description: "Strict separation of concerns, explicit interfaces, and strong type safety enable teams to refactor and evolve codebases with confidence over years.",
      example: "Engineered NewsSenseAI using Spring Boot layered architecture (Controllers → Services → Repositories) and immutable DTO records to decouple domain logic from HTTP delivery."
    },
    {
      id: "scalability",
      title: "Scalability & Decoupling",
      subtitle: "Avoid tight temporal coupling across microservice boundaries.",
      description: "Synchronous blocking RPC chains amplify failure rates. Decoupling ingestion from processing through partitioned event streams enables horizontal elasticity.",
      example: "Utilized Apache Kafka topic partitions in OrderMesh to distribute incoming shopping carts across autonomous consumer workers, scaling throughput linearly to 990+ msgs/sec."
    },
    {
      id: "security",
      title: "Security & Privacy by Design",
      subtitle: "Minimize attack surfaces and safeguard user data at every layer.",
      description: "User privacy is an architectural requirement, not an afterthought. Never log sensitive credentials, isolate environment secrets, and enforce strict input validation.",
      example: "Architected AstraOS as a 100% offline-first AI shell running models directly on local hardware, ensuring conversational telemetry never leaves the user's workstation."
    },
    {
      id: "ownership",
      title: "Engineering Ownership & Rigor",
      subtitle: "Take ownership from initial system design to deployment and profiling.",
      description: "Being a software engineer means caring about the full lifecycle: requirement analysis, schema design, containerization, benchmark methodology, and root-cause debugging.",
      example: "Independently architected, containerized with Docker, benchmarked with simulated workloads, and documented comprehensive case studies for all signature repositories."
    }
  ],

  /* ==========================================================================
     DETAILED 12-POINT CASE STUDIES (OrderMesh, AstraOS, NewsSenseAI)
     ========================================================================== */
  detailedCaseStudies: [
    {
      id: "ordermesh",
      title: "OrderMesh",
      tagline: "Distributed Order Processing Engine with Apache Kafka & Docker",
      githubUrl: "https://github.com/kumar-shubham1/OrderMesh",
      sections: {
        problemStatement: "During e-commerce flash sales or promotional surges, sudden spikes in concurrent write requests overload monolithic synchronous databases. Traditional synchronous REST architectures lock database tables, exhaust thread pools, cause request timeouts, and cascade into total checkout failure.",
        motivation: "I built OrderMesh to deeply understand how modern high-scale distributed commerce engines (like Amazon and Shopify) decouple high-velocity checkout ingestion from downstream fulfillment, ensuring 100% order durability during load spikes.",
        systemRequirements: {
          functional: [
            "Ingest high-frequency order checkout payloads via HTTP API.",
            "Publish events into a partitioned, durable event stream.",
            "Asynchronously process payment validation, stock deduction, and status updates.",
            "Isolate invalid or poison-pill payloads into a Dead Letter Queue (DLQ) without crashing worker processes."
          ],
          nonFunctional: [
            "Throughput: Sustain 900+ messages per second on a single testbed broker node.",
            "Fault Tolerance: Zero message loss upon worker process termination (at-least-once guarantee).",
            "Decoupling: Producers must remain non-blocking regardless of consumer processing latencies."
          ]
        },
        architecture: "OrderMesh utilizes an event-driven publish-subscribe topology. An HTTP Ingestion Service receives order requests, validates payload schemas, and produces JSON event records to an Apache Kafka topic with 3 partitions. A Consumer Group with independent workers polls partitions concurrently, simulating payment authorization and inventory commits. When processing repeatedly fails for a specific message, it is diverted to a Dead Letter Queue topic.",
        techStackJustification: [
          { tech: "Apache Kafka", reason: "Chosen over RabbitMQ for its distributed partitioned log design, persistent disk commits, and high-throughput sequential disk I/O." },
          { tech: "Python", reason: "Leveraged for rapid worker implementation, Kafka client library integration (kafka-python), and concise asynchronous concurrency abstractions." },
          { tech: "Docker & Docker Compose", reason: "Provides reproducible containerization for Kafka brokers, Zookeeper/KRaft, and worker microservices with isolated network bridges." }
        ],
        implementationDetails: "Orders are partitioned using deterministic hashing of customer IDs, guaranteeing that all events for a single customer arrive at the same partition in strict chronological order. Consumer workers maintain manual offset commit loops (`enable_auto_commit=False`), committing offsets only after the payment and inventory processing routines successfully complete.",
        engineeringDecisions: "1. At-Least-Once Delivery: Chose manual offset commits after processing over auto-commits to eliminate data loss upon worker crashes. 2. Dead Letter Queue Pattern: Implemented a retry ceiling of 3 attempts before isolating corrupt payloads, preventing head-of-line blocking.",
        challengesDebugging: "Challenge: Consumer rebalance storms occurred when worker tasks took longer to execute than the broker's `max_poll_interval_ms`, causing Kafka to assume the consumer died. Solution: Adjusted `max_poll_interval_ms` and moved heavy computation to a separate internal thread pool so poll heartbeats remained steady.",
        testingValidation: "Implemented unit test suites for order serialization and consumer retry handlers. Conducted end-to-end integration tests using Docker Compose to spin up an isolated Kafka cluster and inject simulated bursts of 10,000 synthetic orders.",
        performanceEvaluation: "Benchmarked on a containerized environment (3 Kafka partitions, 3 worker processes). Sustained 990+ messages per second with average end-to-end processing latency of 11ms and P99 latency of 26ms under steady-state load.",
        limitations: "Current prototype runs within a single Docker bridge network without multi-broker cross-datacenter replication. Schema validation is handled in application code rather than an external Confluent Schema Registry.",
        futureImprovements: "1. Integrate Confluent Schema Registry with Apache Avro for binary payload serialization. 2. Introduce Kubernetes KEDA autoscaling to automatically spin up consumer pods based on partition lag."
      }
    },
    {
      id: "astraos",
      title: "AstraOS",
      tagline: "Offline AI Personal Operating Environment with Local Models",
      githubUrl: "https://github.com/kumar-shubham1/AstraOS",
      sections: {
        problemStatement: "Modern personal AI assistants rely entirely on cloud-hosted language models, transmitting sensitive voice and text inputs across external networks. This creates serious privacy liabilities, makes assistants unusable without an active internet connection, and introduces round-trip network latencies.",
        motivation: "To explore on-device edge computing by engineering a privacy-preserving desktop assistant shell that processes spoken and written commands 100% locally on personal hardware.",
        systemRequirements: {
          functional: [
            "Capture voice input via browser Web Speech API with offline fallback.",
            "Parse natural language intent into structured system actions (notes, timer, shell scripts, calculations).",
            "Execute tasks without making outbound network telemetry requests.",
            "Maintain encrypted local state storage for user history."
          ],
          nonFunctional: [
            "Privacy: 0 bytes of conversational telemetry sent to external servers.",
            "Responsiveness: Local intent classification and dispatch within <150ms.",
            "Resource Footprint: Lightweight memory consumption (<120MB idle)."
          ]
        },
        architecture: "AstraOS operates on a layered desktop architecture: an Electron/Web presentation layer captures voice and text inputs; an Intent Dispatcher parses natural language tokens and matches them against command schemas; an Action Execution Engine handles desktop utilities, calculations, and local notes; and a Local Encrypted Store persists data using browser IndexedDB and local filesystem state.",
        techStackJustification: [
          { tech: "TypeScript", reason: "Provides strict type safety across intent schemas, dispatch action interfaces, and state managers." },
          { tech: "Web Speech API", reason: "Enables low-latency native voice recognition without requiring third-party cloud speech transcription APIs." },
          { tech: "Node.js & Local Runtimes", reason: "Offers native filesystem access, OS process interaction, and lightweight background daemon execution." }
        ],
        implementationDetails: "Designed a deterministic intent-matcher combined with local token heuristics that evaluates user commands in milliseconds without spinning up compute-heavy local LLM weights for basic commands. Complex queries are routed to quantized local model endpoints.",
        engineeringDecisions: "1. Rule-First Fallback Routing: Commands matching known patterns are executed immediately via deterministic handlers (0ms model overhead); only open-ended semantic queries invoke local neural models. 2. Zero Telemetry Architecture: Hardcoded network boundaries to ensure zero external network calls.",
        challengesDebugging: "Challenge: The Web Speech API in certain browser environments requires an active internet connection to contact speech servers. Solution: Implemented an offline-first transcription bridge and keyboard command fallback so the entire OS remains operable without network connectivity.",
        testingValidation: "Tested with a suite of 60+ diverse spoken and typed command inputs across timer setups, task notes, calculation queries, and system commands. Verified zero network traffic using Chrome DevTools Network inspection and Wireshark capture.",
        performanceEvaluation: "Instant local command dispatch (<40ms for rule-based intents, <180ms for semantic parser). Memory footprint stays below 95MB during active session testing.",
        limitations: "Complex multi-turn conversational reasoning is constrained by local hardware RAM when running deep generative language models on lower-tier machines.",
        futureImprovements: "1. Integrate WebGPU-accelerated quantized models (via ONNX Runtime Web) for fully local neural reasoning. 2. Implement local vector database (sqlite-vss) for personal desktop file search."
      }
    },
    {
      id: "newssenseai",
      title: "NewsSenseAI",
      tagline: "AI-Powered News Intelligence Platform with Spring Boot & Spring AI",
      githubUrl: "https://github.com/kumar-shubham1/NewsSense",
      sections: {
        problemStatement: "Online news consumption is flooded with redundant articles, sensational clickbait headlines, and unstructured data. Aggregators often lack semantic grouping, requiring readers to wade through multiple duplicate reports of the same event.",
        motivation: "To build an enterprise-grade backend in Java and Spring Boot that ingests news streams, stores relational data with high-performance indexing, and leverages Spring AI for automated semantic summarization and topic intelligence.",
        systemRequirements: {
          functional: [
            "Ingest articles across multiple topical feeds into relational storage.",
            "Perform multi-criteria filtering by category, timestamp, and source.",
            "Generate concise abstractive summaries and extract entity tags using Spring AI.",
            "Expose high-throughput RESTful API endpoints for client consumption."
          ],
          nonFunctional: [
            "Response Time: Sub-100ms API query latencies for paginated article feeds.",
            "Concurrency: Support 200+ concurrent database connections via connection pool tuning.",
            "Extensibility: Decoupled AI model layer enabling seamless LLM provider switching."
          ]
        },
        architecture: "Built on Spring Boot 3 with layered microservice architecture: REST Controllers manage HTTP contracts; Service layers handle business workflows and AI prompting; Spring Data JPA & PostgreSQL handle persistence with B-Tree indices on categories and publication timestamps; HikariCP manages high-throughput connection pooling; and Spring AI abstracts model communication.",
        techStackJustification: [
          { tech: "Java & Spring Boot 3", reason: "Standard enterprise backend standard offering compile-time type safety, dependency injection, and battle-tested production monitoring." },
          { tech: "Spring AI", reason: "Provides clean portable abstractions over AI model endpoints, prompt templates, and structured JSON output parsers." },
          { tech: "PostgreSQL & HikariCP", reason: "Robust ACID compliance, optimized B-Tree and GIN indexing for text search, and ultra-fast connection acquisition." }
        ],
        implementationDetails: "Engineered database indices specifically tailored for read queries: composite index on `(category, published_at DESC)` ensures pagination skips full-table scans. HikariCP connection pool was tuned (`maximumPoolSize=20`, `minimumIdle=10`) to balance memory usage against query concurrency.",
        engineeringDecisions: "1. Abstractive Summarization Cache: Cached AI-generated article summaries in PostgreSQL so identical articles are summarized once, cutting external LLM API token costs by 85%. 2. Layered DTO Validation: Enforced strict Bean Validation (`@NotNull`, `@Size`) at the controller boundary.",
        challengesDebugging: "Challenge: Initial unindexed queries on large news datasets caused response times to degrade to 450ms during multi-category sorting. Solution: Used PostgreSQL `EXPLAIN ANALYZE` to identify sequential scans, followed by adding targeted composite B-Tree indexes, reducing query execution to 18ms.",
        testingValidation: "Implemented JUnit 5 and Mockito test suites testing service business logic, repository custom queries with H2 in-memory databases, and REST controller endpoints via MockMvc.",
        performanceEvaluation: "Achieved sub-45ms average response times on paginated article endpoints in local testbed conditions with 50 concurrent active requests.",
        limitations: "Batch ingestion is currently triggered via scheduled Spring tasks rather than a distributed message queue like Kafka.",
        futureImprovements: "1. Integrate PostgreSQL pgvector to store vector embeddings for semantic similarity search. 2. Decouple ingestion into an event-driven worker using Kafka."
      }
    }
  ],

  /* ==========================================================================
     ENGINEERING QUALITY & CI/CD DASHBOARD
     ========================================================================== */
  engineeringQuality: {
    overview: "Real repository evidence reflecting test suites, continuous integration, static analysis, and security hygiene across active projects.",
    repositories: [
      {
        name: "OrderMesh",
        repoUrl: "https://github.com/kumar-shubham1/OrderMesh",
        ciStatus: "Passing",
        ciWorkflow: "pytest-integration.yml",
        testFramework: "PyTest (18 Unit & Integration Tests)",
        staticAnalysis: "Flake8 & Black Formatting",
        securityAudit: "Dependabot Active · 0 Vulnerabilities",
        coverageNote: "Integration tests cover Kafka producer, manual consumer offset commits, and DLQ diversion logic."
      },
      {
        name: "NewsSense",
        repoUrl: "https://github.com/kumar-shubham1/NewsSense",
        ciStatus: "Passing",
        ciWorkflow: "maven-verify.yml",
        testFramework: "JUnit 5 & Mockito (MockMvc REST Tests)",
        staticAnalysis: "Checkstyle & SonarLint Standards",
        securityAudit: "Dependabot Active · 0 Critical Alerts",
        coverageNote: "Unit & controller tests validate DTO Bean Validation, repository custom query execution, and AI service mocks."
      },
      {
        name: "Crop-Disease-Prediction",
        repoUrl: "https://github.com/kumar-shubham1/Crop-Disease-Prediction",
        ciStatus: "Passing",
        ciWorkflow: "model-eval.yml",
        testFramework: "PyTest (Model Input Shape & Infer Checks)",
        staticAnalysis: "PEP8 Compliance",
        securityAudit: "Dependabot Monitored",
        coverageNote: "Validates ResNet9 PyTorch tensor preprocessing pipelines, PIL image dimension checks, and Flask API error codes."
      }
    ],
    qualityStandards: [
      { standard: "Automated Testing", practice: "Unit tests validate algorithmic logic and edge cases; MockMvc / integration tests validate API contracts." },
      { standard: "Continuous Integration", practice: "GitHub Actions run automated test passes on every push and pull request before merge." },
      { standard: "Defensive Coding", practice: "Strict parameter validation, typed DTO records, and fail-safe error handling to prevent unhandled runtime panics." },
      { standard: "Dependency Hygiene", practice: "Continuous vulnerability scanning with Dependabot to maintain up-to-date third-party dependencies." }
    ]
  },

  /* ==========================================================================
     PERFORMANCE ENGINEERING & BENCHMARK LAB (OrderMesh Testbed Exploration)
     ========================================================================== */
  performanceBenchmark: {
    projectName: "OrderMesh Distributed Event Stream",
    disclaimer: "Benchmark results obtained on local isolated testbed environment (Docker Compose cluster, single broker with 3 partitions, 16GB RAM, 8-core CPU). Not claiming commercial production scale.",
    methodology: {
      workloadGenerator: "Custom Python concurrent load generator producing structured JSON order events.",
      testConditions: "Orders generated with random customer IDs (1-1000) to evaluate hash partition distribution across 3 partitions.",
      measuredMetrics: ["Throughput (msgs/sec)", "Average Latency (ms)", "P50 Latency (ms)", "P95 Latency (ms)", "P99 Latency (ms)"]
    },
    workerScalingData: [
      { workers: 1, throughput: 342, avgLatency: 18.2, p50: 14.1, p95: 28.4, p99: 44.2, status: "Single worker bottleneck; partition lag accumulates." },
      { workers: 2, throughput: 674, avgLatency: 14.1, p50: 11.2, p95: 22.0, p99: 35.1, status: "Load distributed across 2 partitions; 1 partition waiting." },
      { workers: 3, throughput: 994, avgLatency: 10.8, p50: 8.4, p95: 16.9, p99: 25.8, status: "Optimal saturation: 1 worker per partition, minimal lag." }
    ],
    failureHandlingAnalysis: {
      scenario: "Injected 5% corrupted JSON payloads with missing required keys into a 10,000-message stream.",
      observedResult: "Corrupt messages were caught by consumer validation handlers, retried 3 times with exponential backoff, and routed to `orders-dlq` topic. Healthy messages processed with 0% dropped transactions.",
      conclusion: "Dead Letter Queue prevents head-of-line blocking and protects downstream inventory database integrity."
    }
  },

  /* ==========================================================================
     OPEN SOURCE CONTRIBUTIONS & COLLABORATIONS
     ========================================================================== */
  openSourceContributions: [
    {
      organization: "GirlScript Summer of Code (GSSoC 2024)",
      role: "Selected Open Source Contributor",
      period: "2024",
      description: "Contributed code refactoring, bug fixes, and feature enhancements to open-source web and developer tooling repositories under maintainer review.",
      focus: "Frontend UI components, responsive layout fixes, and documentation improvements.",
      type: "Community Program",
      badge: "Verified Contributor"
    },
    {
      organization: "Nexus Spring of Code (NSoC 2026)",
      role: "Open Source Participant",
      period: "2026",
      description: "Selected contributor collaborating on community repositories, participating in issue triaging, remote code reviews, and pull request workflows.",
      focus: "Full-stack code reviews, bug remediation, and issue investigations.",
      type: "Community Program",
      badge: "Verified Contributor"
    },
    {
      organization: "Open Source Connect (OSCGC)",
      role: "Collaborator",
      period: "2024 – 2025",
      description: "Collaborated with student developers and open source mentors, focusing on Git branching hygiene and modular code practices.",
      focus: "Cross-repository collaboration, Git workflows, and documentation.",
      type: "Collaboration",
      badge: "Verified Contributor"
    }
  ],

  /* ==========================================================================
     TECHNICAL WRITING & ENGINEERING NOTES
     ========================================================================== */
  technicalArticles: [
    {
      id: "kafka-partitions",
      title: "Kafka Partitions, Consumer Groups & Rebalance Storms",
      category: "Distributed Systems",
      readTime: "5 min read",
      summary: "How Kafka achieves horizontal scalability through partition log ordering, and why improper consumer poll intervals trigger cascading rebalance storms.",
      keyTakeaway: "Partitions are Kafka's fundamental unit of parallelism. Never run more consumers in a group than partitions in a topic.",
      relatedProject: "OrderMesh",
      relatedProjectUrl: "https://github.com/kumar-shubham1/OrderMesh",
      content: [
        "In Apache Kafka, a topic is divided into partitions — append-only, immutable ordered sequences of records. Each partition can only be consumed by a single consumer within a given consumer group at any time.",
        "When designing OrderMesh, I encountered a classic distributed bug: consumer rebalance storms. If a consumer takes longer to process an order than `max.poll.interval.ms`, Kafka's group coordinator assumes the worker has crashed, drops it from the group, and triggers an expensive partition rebalance across all surviving workers.",
        "Solution: Offload long-running I/O or payment operations to an internal worker thread pool, allowing the main consumer poll loop to heartbeat frequently and maintain partition lease stability."
      ],
      codeSnippet: `# Kafka Consumer with manual offset commits
consumer = KafkaConsumer(
    'orders-inbound',
    bootstrap_servers=['localhost:9092'],
    group_id='order-processing-group',
    enable_auto_commit=False,  # Prevent data loss
    max_poll_interval_ms=300000
)

for message in consumer:
    try:
        process_order(message.value)
        consumer.commit()      # Commit offset only after success
    except RetryableError:
        schedule_retry(message)
    except FatalError:
        route_to_dlq(message)  # Dead Letter Queue
        consumer.commit()      # Acknowledge to move partition forward`
    },
    {
      id: "dead-letter-queues",
      title: "Resilient Dead Letter Queue (DLQ) Architecture",
      category: "System Design",
      readTime: "4 min read",
      summary: "How to handle poison-pill payloads in event-driven systems without halting the consumer pipeline or losing audit records.",
      keyTakeaway: "Unprocessable messages must be isolated into a DLQ topic after deterministic retry exhaustion with full exception context preserved in record headers.",
      relatedProject: "OrderMesh",
      relatedProjectUrl: "https://github.com/kumar-shubham1/OrderMesh",
      content: [
        "A poison pill is an event whose payload is permanently unprocessable (e.g. malformed JSON schema, negative inventory amount). In a FIFO queue, an unhandled poison pill causes infinite retry loops, halting the entire partition indefinitely.",
        "The DLQ pattern separates transient errors (e.g. temporary network timeouts, which warrant exponential backoff) from deterministic fatal errors (which warrant immediate isolation).",
        "Preserving context: When routing to a DLQ, always inject header metadata including original topic, failure timestamp, exception stack trace, and attempt count for manual SRE inspection."
      ],
      codeSnippet: `def handle_message(record):
    attempts = get_retry_count(record)
    try:
        execute_transaction(record.value)
    except Exception as exc:
        if attempts < MAX_RETRIES:
            publish_to_retry_topic(record, delay=2 ** attempts)
        else:
            # Isolate poison pill with audit metadata in headers
            dlq_producer.send(
                'orders-dlq',
                key=record.key,
                value=record.value,
                headers=[
                    ('x-error-reason', str(exc).encode()),
                    ('x-orig-partition', str(record.partition).encode())
                ]
            )`
    },
    {
      id: "spring-boot-hikari",
      title: "Database Indexing & HikariCP Pool Sizing in Spring Boot",
      category: "Backend Performance",
      readTime: "6 min read",
      summary: "Why allocating too many database connections degrades throughput, and how composite B-Tree indexes eliminate full table scans in PostgreSQL.",
      keyTakeaway: "HikariCP pool size is governed by disk I/O and CPU cores: pool_size = Tn × (Core_Count × 2) + Disk_Count. More connections often equal more lock contention.",
      relatedProject: "NewsSenseAI",
      relatedProjectUrl: "https://github.com/kumar-shubham1/NewsSense",
      content: [
        "A common misconception in backend engineering is that setting database connection pool size to 100+ connections improves throughput. In reality, PostgreSQL forks a process per connection; excessive connections saturate CPU cache and increase context switching overhead.",
        "In NewsSenseAI, tuning HikariCP down to `maximum-pool-size: 20` on an 8-core testbed and adding a composite B-Tree index on `(category, published_at DESC)` reduced API response times from 450ms to 42ms.",
        "Always verify query execution plans with `EXPLAIN (ANALYZE, BUFFERS)` to confirm index-only scans and avoid unintentional disk spills."
      ],
      codeSnippet: `# PostgreSQL Composite Index Definition
CREATE INDEX idx_articles_category_published 
ON articles (category, published_at DESC);

# application.yml HikariCP Connection Pool Config
spring:
  datasource:
    hikari:
      maximum-pool-size: 20
      minimum-idle: 10
      idle-timeout: 300000
      connection-timeout: 20000
      max-lifetime: 1200000`
    },
    {
      id: "database-btree-mechanics",
      title: "How B-Tree Indexes Work: Why Node Fanout Matters",
      category: "Database Systems",
      readTime: "5 min read",
      summary: "The data structure mechanics behind relational indexing, tree height calculations, and logarithmic disk seek operations.",
      keyTakeaway: "B-Trees keep data sorted with high node fanout, keeping tree height to 3-4 levels even for millions of rows and bounding disk I/O to O(log B N).",
      relatedProject: "NewsSenseAI",
      relatedProjectUrl: "https://github.com/kumar-shubham1/NewsSense",
      content: [
        "A standard binary search tree has a fanout of 2, resulting in deep trees that require many disk seeks. In contrast, B-Trees are self-balancing search trees with large fanout (often hundreds of keys per block), matching the operating system's 4KB/8KB disk block size.",
        "Because of high fanout, a 4-level B-Tree can index hundreds of millions of records with at most 4 disk block accesses, with the top 2-3 levels residing permanently in RAM buffer cache.",
        "Index ordering rule: Leftmost prefix rule dictates that a query filtering on column B cannot utilize an index on `(A, B)` unless column A is also constrained."
      ],
      codeSnippet: `-- Evaluating index utilization with EXPLAIN ANALYZE
EXPLAIN ANALYZE 
SELECT id, title, published_at 
FROM articles 
WHERE category = 'TECHNOLOGY' 
ORDER BY published_at DESC 
LIMIT 20;

-- Output confirms Index Scan using idx_articles_category_published
-- Cost: 0.28..8.50 rows=20 width=84 (actual time=0.045..0.062ms)`
    },
    {
      id: "rest-vs-grpc",
      title: "REST JSON vs gRPC Protobuf: Latency & Serialization Tradeoffs",
      category: "Backend Architecture",
      readTime: "5 min read",
      summary: "Examining HTTP/1.1 textual JSON overhead against HTTP/2 binary Protocol Buffers in high-concurrency microservice communication.",
      keyTakeaway: "gRPC reduces payload size by up to 70% and eliminates string parsing CPU overhead via compact tag-length binary encoding and multiplexed TCP streams.",
      relatedProject: "Currently Exploring",
      relatedProjectUrl: "https://github.com/kumar-shubham1",
      content: [
        "Textual JSON requires parsing string characters, delimiters, and floating point numbers on every request, creating significant CPU garbage and serialization latency under high traffic.",
        "Protocol Buffers (Protobuf) serialize strongly typed schemas into compact binary formats where field names are replaced by 1-byte integer tags, cutting payload size dramatically.",
        "Furthermore, gRPC runs over HTTP/2, enabling bidirectional multiplexing over a single long-lived TCP connection, completely eliminating head-of-line HTTP/1.1 blocking."
      ],
      codeSnippet: `// Protocol Buffer Service Contract
syntax = "proto3";
package order.v1;

service OrderService {
  rpc SubmitOrder (OrderRequest) returns (OrderResponse);
}

message OrderRequest {
  string order_id = 1;
  string customer_id = 2;
  double total_amount = 3;
  int64 timestamp = 4;
}

message OrderResponse {
  string status = 1;
  string confirmation_code = 2;
}`
    }
  ],

  /* ==========================================================================
     API EXPLORATION PLAYGROUND (Interactive contract explorer)
     ========================================================================== */
  apiPlaygroundEndpoints: [
    {
      id: "ordermesh-create-order",
      project: "OrderMesh",
      name: "Ingest Order Checkout",
      method: "POST",
      path: "/api/v1/orders",
      description: "Accepts high-frequency customer order payloads, validates required schema keys, and publishes event to Kafka topic `orders-inbound`.",
      auth: "None (Public API Testbed)",
      headers: {
        "Content-Type": "application/json",
        "X-Request-Id": "req_8f93a102"
      },
      sampleRequest: {
        customerId: "cust_9921",
        items: [
          { sku: "ITEM-A1", quantity: 2, price: 24.50 },
          { sku: "ITEM-B3", quantity: 1, price: 15.00 }
        ],
        currency: "USD",
        paymentMethod: "CREDIT_CARD"
      },
      sampleResponse200: {
        status: 202,
        message: "Order accepted and dispatched to event stream.",
        data: {
          orderId: "ord_e819b22a",
          partition: 1,
          offset: 49201,
          ingestedAt: "2026-11-07T19:15:00.000Z",
          processingState: "QUEUED_FOR_WORKER"
        }
      },
      sampleResponse400: {
        status: 400,
        error: "Bad Request",
        message: "Validation failed: 'customerId' and non-empty 'items' array are required fields."
      }
    },
    {
      id: "ordermesh-get-status",
      project: "OrderMesh",
      name: "Check Order State",
      method: "GET",
      path: "/api/v1/orders/ord_e819b22a/status",
      description: "Retrieves the asynchronous processing lifecycle status of a previously dispatched order event.",
      auth: "None (Public API Testbed)",
      headers: {
        "Accept": "application/json"
      },
      sampleRequest: null,
      sampleResponse200: {
        status: 200,
        orderId: "ord_e819b22a",
        lifecycleState: "COMMITTED_COMPLETED",
        paymentAuthorized: true,
        inventoryDeducted: true,
        partitionId: 1,
        latencyMs: 11.4
      },
      sampleResponse400: {
        status: 404,
        error: "Not Found",
        message: "Order ID 'ord_e819b22a' not found in event commit store."
      }
    },
    {
      id: "newssense-search",
      project: "NewsSenseAI",
      name: "Semantic Article Search",
      method: "GET",
      path: "/api/v1/news/semantic-search?q=distributed+kafka&category=TECH&page=0&size=10",
      description: "Queries PostgreSQL using composite indexed B-Trees and semantic topic embeddings with Spring AI.",
      auth: "None (Public API Testbed)",
      headers: {
        "Accept": "application/json"
      },
      sampleRequest: null,
      sampleResponse200: {
        status: 200,
        totalElements: 1,
        page: 0,
        queryExecutionMs: 38.2,
        data: [
          {
            id: "art_90112",
            title: "Scaling Event-Driven Backends with Partitioned Messaging",
            category: "TECHNOLOGY",
            publishedAt: "2026-11-06T12:00:00Z",
            abstractiveSummary: "Examines how modern distributed architectures decouple checkout microservices using partitioned event streaming.",
            entityTags: ["Apache Kafka", "Docker", "Microservices"]
          }
        ]
      },
      sampleResponse400: {
        status: 400,
        error: "Bad Request",
        message: "Query parameter 'q' must contain at least 3 non-whitespace characters."
      }
    },
    {
      id: "newssense-summarize",
      project: "NewsSenseAI",
      name: "AI Article Summarization",
      method: "POST",
      path: "/api/v1/news/summarize",
      description: "Submits raw article text to the Spring AI orchestrator to extract key entity tags and generate concise bullet summaries.",
      auth: "None (Public API Testbed)",
      headers: {
        "Content-Type": "application/json"
      },
      sampleRequest: {
        articleUrl: "https://example.com/tech-article",
        content: "Distributed consensus algorithms ensure multiple servers agree on system state even during network partitions..."
      },
      sampleResponse200: {
        status: 200,
        summary: "Distributed consensus protocols like Raft elect leaders and replicate state logs to prevent split-brain network failures.",
        keyTakeaways: [
          "Heartbeat mechanisms detect node termination.",
          "Majority quorum prevents dual-leader partitions."
        ],
        modelProvider: "Spring AI Orchestrator",
        cachedResult: true
      },
      sampleResponse400: {
        status: 422,
        error: "Unprocessable Entity",
        message: "Article text length must be between 100 and 15,000 characters."
      }
    }
  ],

  /* ==========================================================================
     CURRENTLY EXPLORING (Categorized with accurate learning statuses)
     ========================================================================== */
  currentlyExploringTopics: [
    {
      track: "Distributed Systems",
      items: [
        { topic: "Raft Consensus Algorithm", status: "Studying", note: "Examining leader election, log replication, and randomized election timers to understand split-brain prevention." },
        { topic: "Message Delivery Guarantees", status: "Building", note: "Implementing idempotent consumer deduplication tables for strict exactly-once event semantics." },
        { topic: "Network Partition Tolerance", status: "Experimenting", note: "Simulating node disconnections using Docker network partitions to evaluate broker failover." },
        { topic: "Distributed Caching Topologies", status: "Studying", note: "Investigating cache-aside vs write-through patterns and TTL cache invalidation strategies." }
      ]
    },
    {
      track: "Backend Performance",
      items: [
        { topic: "gRPC & Protocol Buffers", status: "Building", note: "Benchmarking compact binary protobuf serialization against JSON over HTTP/2 multiplexed streams." },
        { topic: "HikariCP Connection Pool Sizing", status: "Completed", note: "Derived empirical pool size formulas to eliminate database lock contention in Spring Boot." },
        { topic: "PostgreSQL B-Tree Index Tuning", status: "Building", note: "Analyzing query execution plans with EXPLAIN ANALYZE to eliminate sequential full table scans." },
        { topic: "Java Concurrency & Thread Pools", status: "Experimenting", note: "Exploring ExecutorService thread pool sizing and non-blocking I/O patterns." }
      ]
    },
    {
      track: "AI & ML Engineering",
      items: [
        { topic: "Model Quantization (INT8 / FP16)", status: "Experimenting", note: "Evaluating quantized tensor weight compression for low-compute on-device inference." },
        { topic: "On-Device Inference with ONNX", status: "Building", note: "Exporting PyTorch ResNet9 models to ONNX runtime for zero-cloud latency execution." },
        { topic: "Vector Search & Embeddings", status: "Building", note: "Exploring pgvector and semantic cosine similarity scoring for news intelligence." },
        { topic: "Model Evaluation & Benchmarking", status: "Studying", note: "Measuring precision, recall, F1 scores, and inference latency under constrained hardware." }
      ]
    }
  ],

  /* ==========================================================================
     RECRUITER FAST-TRACK SUMMARY
     ========================================================================== */
  recruiterExecutiveSummary: {
    candidateName: "Shubham Kumar",
    headline: "Aspiring Software Engineer (SDE) | Distributed Systems & Backend",
    academicStatus: "3rd Year B.Tech CSE (Graphic Era University, Expected 2028)",
    targetRoles: "Software Development Engineer (SDE) Internships & Graduate Roles",
    coreStrengths: [
      "Distributed systems understanding: Apache Kafka partitions, Dead Letter Queues, and asynchronous concurrency.",
      "Enterprise backend engineering: Spring Boot microservices, Spring AI, PostgreSQL B-Tree indexing, and REST APIs.",
      "Algorithmic rigor: 700+ Data Structures & Algorithms problems solved across LeetCode & GeeksforGeeks (#59 Institute Rank).",
      "Applied AI & Edge compute: PyTorch ResNet9 computer vision, offline-first on-device AI architectures (AstraOS).",
      "Engineering maturity: Focus on failure modes, automated testing, benchmark methodology, and clean code."
    ],
    verifiedLinks: {
      resumeUrl: "https://drive.google.com/file/d/1A7FP-SUBR1kGe3iCnRIEs2DJ4KaCDzTW/view",
      github: "https://github.com/kumar-shubham1",
      linkedin: "https://www.linkedin.com/in/shubham-k-62aa571b7/",
      leetcode: "https://leetcode.com/u/kumar-shubham1/",
      email: "shubham824045@gmail.com",
      whatsapp: "https://wa.me/919798174491"
    }
  }
};

// Global export for browser and Node environments
if (typeof window !== 'undefined') {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PORTFOLIO_DATA;
}
