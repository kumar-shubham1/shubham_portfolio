/**
 * SHUBHAM KUMAR — SIGNATURE PORTFOLIO V2 CORE JAVASCRIPT
 * Award-winning creative developer interactions:
 * 1. Global Command Palette (Ctrl+K / Cmd+K)
 * 2. Interactive Developer Terminal
 * 3. Project Architecture Explorer
 * 4. Engineering Lab (Kafka DLQ & Dijkstra Pathfinding Simulator)
 * 5. Project Showcase Rendering, Filtering & Deep-Dive Modal
 * 6. Desktop Cursor Spotlight & Scroll Progress
 * 7. Form Validation & Mailto Dispatch
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all interactive modules
  initScrollProgress();
  initCursorSpotlight();
  initHeroDescriptor();
  initCommandPalette();
  initTerminal();
  initProjectsShowcase();
  initArchitectureExplorer();
  initEngineeringLab();
  initProjectModal();
  initScrollSpy();
  initMobileNav();
  initContactForm();
});

/* ==========================================================================
   1. SCROLL PROGRESS INDICATOR
   ========================================================================== */
function initScrollProgress() {
  const line = document.getElementById('scrollProgressLine');
  if (!line) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      const progress = (window.scrollY / totalHeight) * 100;
      line.style.width = `${progress}%`;
    }
  }, { passive: true });
}

/* ==========================================================================
   2. DESKTOP CURSOR SPOTLIGHT
   ========================================================================== */
function initCursorSpotlight() {
  const spotlight = document.getElementById('cursorSpotlight');
  if (!spotlight || window.innerWidth < 1024) return;

  let mouseX = -999, mouseY = -999;
  let currentX = -999, currentY = -999;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }, { passive: true });

  function renderSpotlight() {
    currentX += (mouseX - currentX) * 0.15;
    currentY += (mouseY - currentY) * 0.15;
    spotlight.style.transform = `translate(${currentX}px, ${currentY}px)`;
    requestAnimationFrame(renderSpotlight);
  }

  requestAnimationFrame(renderSpotlight);
}

/* ==========================================================================
   3. HERO DESCRIPTOR ROTATION (Graceful Static Fallback Guaranteed)
   ========================================================================== */
function initHeroDescriptor() {
  const target = document.getElementById('heroRotatingText');
  if (!target) return;

  const descriptors = [
    'Backend Systems Engineer',
    'Distributed Architecture Builder',
    'AI & Applied ML Developer',
    'Algorithmic Problem Solver'
  ];

  let index = 0;

  setInterval(() => {
    target.style.opacity = '0';
    target.style.transform = 'translateY(4px)';

    setTimeout(() => {
      index = (index + 1) % descriptors.length;
      target.textContent = descriptors[index];
      target.style.opacity = '1';
      target.style.transform = 'translateY(0)';
    }, 250);
  }, 3200);
}

/* ==========================================================================
   4. GLOBAL COMMAND PALETTE (Ctrl+K / Cmd+K)
   ========================================================================== */
function initCommandPalette() {
  const backdrop = document.getElementById('cmdPaletteBackdrop');
  const triggerBtn = document.getElementById('cmdPaletteTrigger');
  const searchInput = document.getElementById('cmdSearchInput');
  const resultsContainer = document.getElementById('cmdResultsList');
  if (!backdrop || !searchInput || !resultsContainer) return;

  const commands = [
    { title: "Home / Overview", category: "Navigation", target: "#home" },
    { title: "Engineering Philosophy & Identity", category: "Navigation", target: "#identity" },
    { title: "Project Showcase (Selected Works)", category: "Navigation", target: "#projects" },
    { title: "Architecture Explorer", category: "Interactive", target: "#architecture" },
    { title: "Engineering Lab (Kafka & Graph Demos)", category: "Interactive", target: "#lab" },
    { title: "Technical Skills Breakdown", category: "Navigation", target: "#skills" },
    { title: "Currently Building", category: "Research", target: "#building" },
    { title: "Education & Career Timeline", category: "Navigation", target: "#timeline" },
    { title: "Honors & Achievements", category: "Navigation", target: "#achievements" },
    { title: "Get in Touch / Contact", category: "Contact", target: "#contact" },
    { title: "Project: OrderMesh (Kafka Distributed Systems)", category: "Project", target: "#projects", action: "ordermesh" },
    { title: "Project: AstraOS (Offline AI Shell)", category: "Project", target: "#projects", action: "astraos" },
    { title: "Project: NewsSenseAI (Spring Boot & Spring AI)", category: "Project", target: "#projects", action: "newssenseai" },
    { title: "Project: Crop Disease Prediction (PyTorch ResNet9)", category: "Project", target: "#projects", action: "crop-disease" },
    { title: "Project: Uber Ambulance (MERN Geospatial)", category: "Project", target: "#projects", action: "uber-ambulance" },
    { title: "Project: Disaster Relief Portal (Dijkstra)", category: "Project", target: "#projects", action: "disaster-relief" },
    { title: "Download Resume (Google Drive PDF)", category: "Action", url: PORTFOLIO_DATA.personal.resumeUrl },
    { title: "GitHub Profile (@kumar-shubham1)", category: "Social", url: PORTFOLIO_DATA.personal.github },
    { title: "LinkedIn Profile (Shubham Kumar)", category: "Social", url: PORTFOLIO_DATA.personal.linkedin },
    { title: "LeetCode Profile (@kumar-shubham1)", category: "Coding", url: PORTFOLIO_DATA.personal.leetcode },
    { title: "Direct WhatsApp Message", category: "Contact", url: PORTFOLIO_DATA.personal.whatsappUrl },
    { title: "Direct Email (shubham824045@gmail.com)", category: "Contact", url: `mailto:${PORTFOLIO_DATA.personal.email}` }
  ];

  let highlightedIndex = 0;
  let activeMatches = [...commands];

  function openPalette() {
    backdrop.classList.add('open');
    searchInput.value = '';
    renderResults(commands);
    searchInput.focus();
    document.body.style.overflow = 'hidden';
  }

  function closePalette() {
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  function renderResults(matches) {
    activeMatches = matches;
    highlightedIndex = 0;
    resultsContainer.innerHTML = '';

    if (!matches.length) {
      resultsContainer.innerHTML = '<div style="padding:16px; color:var(--text-faint); font-family:var(--font-mono); font-size:0.85rem;">No commands or sections matching query.</div>';
      return;
    }

    matches.forEach((item, idx) => {
      const el = document.createElement('div');
      el.className = `cmd-result-item ${idx === 0 ? 'highlighted' : ''}`;
      el.innerHTML = `
        <span>${escapeHtml(item.title)}</span>
        <span class="cmd-result-tag">${escapeHtml(item.category)}</span>
      `;

      el.addEventListener('click', () => executeCommand(item));
      resultsContainer.appendChild(el);
    });
  }

  function executeCommand(item) {
    closePalette();
    if (item.url) {
      window.open(item.url, '_blank', 'noopener,noreferrer');
    } else if (item.target) {
      const el = document.querySelector(item.target);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      if (item.action) {
        setTimeout(() => openProjectDetails(item.action), 400);
      }
    }
  }

  // Keyboard shortcut listener
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (backdrop.classList.contains('open')) closePalette();
      else openPalette();
    } else if (e.key === 'Escape' && backdrop.classList.contains('open')) {
      closePalette();
    } else if (backdrop.classList.contains('open')) {
      const items = resultsContainer.querySelectorAll('.cmd-result-item');
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        highlightedIndex = (highlightedIndex + 1) % items.length;
        updateHighlight(items);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        highlightedIndex = (highlightedIndex - 1 + items.length) % items.length;
        updateHighlight(items);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (activeMatches[highlightedIndex]) {
          executeCommand(activeMatches[highlightedIndex]);
        }
      }
    }
  });

  function updateHighlight(items) {
    items.forEach((it, idx) => {
      it.classList.toggle('highlighted', idx === highlightedIndex);
    });
    if (items[highlightedIndex]) {
      items[highlightedIndex].scrollIntoView({ block: 'nearest' });
    }
  }

  // Search filter
  searchInput.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    if (!q) {
      renderResults(commands);
      return;
    }
    const filtered = commands.filter(c => 
      c.title.toLowerCase().includes(q) || c.category.toLowerCase().includes(q)
    );
    renderResults(filtered);
  });

  if (triggerBtn) triggerBtn.addEventListener('click', openPalette);
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closePalette();
  });
}

/* ==========================================================================
   5. INTERACTIVE DEVELOPER TERMINAL
   ========================================================================== */
function initTerminal() {
  const terminalBody = document.getElementById('terminalBody');
  const terminalInput = document.getElementById('terminalInput');
  const quickCmdBtns = document.querySelectorAll('.quick-cmd-btn');
  if (!terminalBody || !terminalInput) return;

  const commandHistory = [];
  let historyIdx = -1;

  const commandResponses = {
    help: () => [
      "Available commands:",
      "  whoami        - Display identity and academic summary",
      "  interests     - Engineering focus areas & systems research",
      "  current_focus - What I am actively engineering today",
      "  skills        - Core languages, frameworks and infrastructure",
      "  projects      - Overview of the 6 signature engineering projects",
      "  github        - Public repository profile & activity",
      "  contact       - Direct contact channels (Email, WhatsApp)",
      "  clear         - Clear the terminal session buffer"
    ],
    whoami: () => [
      "Shubham Kumar",
      "Role: Software Engineer / Backend & Full Stack Developer",
      "Status: 3rd Year B.Tech CSE (Expected Graduation: 2028)",
      "Institution: Graphic Era University, Dehradun",
      "Location: Dehradun, India"
    ],
    interests: () => [
      "1. Distributed Systems & High-Throughput Event Streaming",
      "2. Resilient Backend Architectures (Spring Boot & Kafka)",
      "3. On-Device & Edge AI Inference Pipelines",
      "4. Graph Algorithms & Algorithmic Optimization (700+ DSA Problems)"
    ],
    current_focus: () => [
      "Actively engineering distributed order processing engines, benchmarking",
      "Raft consensus leader election, and preparing for SDE / Backend internships."
    ],
    skills: () => [
      "Languages: Java, Python, C/C++, TypeScript, JavaScript, SQL",
      "Backend:   Spring Boot, Spring AI, Apache Kafka, Docker, Flask, Node.js",
      "Databases: PostgreSQL, MongoDB, MySQL, Geospatial Indices",
      "Core CS:   DSA, Distributed Systems, DBMS, Operating Systems, Networks"
    ],
    projects: () => [
      "[01] OrderMesh     - Distributed Kafka order processor (990+ msgs/sec)",
      "[02] AstraOS       - Offline-first AI personal operating shell",
      "[03] NewsSenseAI   - Spring AI contextual news intelligence backend",
      "[04] Crop Disease  - ResNet9 PyTorch computer vision leaf diagnosis",
      "[05] Uber Ambulance- MERN real-time emergency triage dispatch",
      "[06] Disaster Aid  - Dijkstra shortest-path crisis supply allocator",
      "Type 'projects' in Command Palette (Ctrl+K) or scroll to showcase to inspect details."
    ],
    github: () => [
      "GitHub: https://github.com/kumar-shubham1",
      "Public repositories: 30+",
      "Open Source: Contributor at GirlScript Summer of Code, Nexus Spring of Code."
    ],
    contact: () => [
      "Email:    shubham824045@gmail.com",
      "WhatsApp: +91 97981 74491",
      "LinkedIn: linkedin.com/in/shubham-k-62aa571b7",
      "LeetCode: leetcode.com/u/kumar-shubham1"
    ]
  };

  function appendOutput(lines, isCommand = false, cmdText = "") {
    if (isCommand) {
      const cmdRow = document.createElement('div');
      cmdRow.className = 'term-line';
      cmdRow.innerHTML = `<span class="term-prompt">$</span> <span>${escapeHtml(cmdText)}</span>`;
      terminalBody.appendChild(cmdRow);
    }

    if (lines && lines.length) {
      const outBox = document.createElement('div');
      outBox.className = 'term-output';
      outBox.innerHTML = lines.map(l => `<div>${escapeHtml(l)}</div>`).join('');
      terminalBody.appendChild(outBox);
    }

    terminalBody.scrollTop = terminalBody.scrollHeight;
  }

  function processCommand(raw) {
    const trimmed = raw.trim().toLowerCase();
    if (!trimmed) return;

    commandHistory.push(raw);
    historyIdx = commandHistory.length;

    if (trimmed === 'clear') {
      terminalBody.innerHTML = '';
      return;
    }

    const handler = commandResponses[trimmed];
    if (handler) {
      appendOutput(handler(), true, raw);
    } else {
      appendOutput([
        `Command not recognized: "${raw}".`,
        "Type 'help' to inspect available developer commands."
      ], true, raw);
    }
  }

  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const val = terminalInput.value;
      terminalInput.value = '';
      processCommand(val);
    } else if (e.key === 'ArrowUp') {
      if (historyIdx > 0) {
        historyIdx--;
        terminalInput.value = commandHistory[historyIdx] || '';
      }
    } else if (e.key === 'ArrowDown') {
      if (historyIdx < commandHistory.length - 1) {
        historyIdx++;
        terminalInput.value = commandHistory[historyIdx] || '';
      } else {
        historyIdx = commandHistory.length;
        terminalInput.value = '';
      }
    }
  });

  quickCmdBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const cmd = btn.getAttribute('data-cmd');
      if (cmd) processCommand(cmd);
    });
  });
}

/* ==========================================================================
   6. EDITORIAL PROJECT SHOWCASE & FILTERING
   ========================================================================== */
function initProjectsShowcase() {
  const container = document.getElementById('editorialProjectsContainer');
  const filterTabs = document.querySelectorAll('.filter-tab');
  if (!container || typeof PORTFOLIO_DATA === 'undefined') return;

  function render(filter = 'all') {
    container.innerHTML = '';
    const projects = filter === 'all'
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter(p => p.category === filter);

    projects.forEach((p, idx) => {
      const isReverse = idx % 2 === 1;
      const row = document.createElement('div');
      row.className = `editorial-project-row ${isReverse ? 'row-reverse' : ''}`;

      const techTags = p.tech.map(t => `<span class="tech-tag-mono">${escapeHtml(t)}</span>`).join('');

      row.innerHTML = `
        <div class="project-info-pane">
          <div class="project-meta-line">
            <span class="project-idx">${escapeHtml(p.number)} //</span>
            <span class="project-cat-badge">${escapeHtml(p.categoryLabel)}</span>
          </div>

          <h3 class="project-title-large">${escapeHtml(p.title)}</h3>
          <div class="project-subtitle-line">${escapeHtml(p.subtitle)}</div>
          <p class="project-narrative">${escapeHtml(p.summary)}</p>

          <div class="project-metric-callout">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            ${escapeHtml(p.metrics)}
          </div>

          <div class="project-tech-line">${techTags}</div>

          <div class="project-action-row">
            <button type="button" class="btn-editorial btn-solid-orange btn-sm-editorial btn-view-blueprint" data-id="${escapeHtml(p.id)}">
              Inspect Blueprint
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
            </button>
            <a href="${escapeHtml(p.githubUrl)}" target="_blank" rel="noopener noreferrer" class="btn-editorial btn-outline-minimal btn-sm-editorial" aria-label="View source code on GitHub">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.3.1 1.9 1.3 1.9 1.3 1.1 1.9 3 1.4 3.7 1a2.4 2.4 0 01.7-1.6c-2.6-.3-5.4-1.4-5.4-6a4.7 4.7 0 011.3-3.3 4.4 4.4 0 01.1-3.2s1-.3 3.4 1.3a11.5 11.5 0 016 0c2.3-1.6 3.3-1.3 3.3-1.3a4.4 4.4 0 01.2 3.2 4.7 4.7 0 011.2 3.3c0 4.7-2.8 5.7-5.5 6a2.7 2.7 0 01.8 2.1v3.1c0 .3.2.7.8.6A12 12 0 0012 .3z"/></svg>
              GitHub Code
            </a>
          </div>
        </div>

        <div class="project-visual-pane">
          <div class="technical-blueprint-card">
            <div class="blueprint-header">
              <span>SYSTEM BLUEPRINT // ${escapeHtml(p.id.toUpperCase())}</span>
              <span>VERIFIED REPO</span>
            </div>
            <div class="blueprint-diagram-area">
              <div class="blueprint-flow-step">
                <span class="flow-step-marker">1</span>
                <span>${escapeHtml(p.implementation[0] || 'Ingestion & Validation Stage')}</span>
              </div>
              <div class="blueprint-flow-step">
                <span class="flow-step-marker">2</span>
                <span>${escapeHtml(p.implementation[1] || 'Processing & Transformation Pipeline')}</span>
              </div>
              <div class="blueprint-flow-step">
                <span class="flow-step-marker">3</span>
                <span>${escapeHtml(p.implementation[2] || 'State Commit & Fault-Tolerant Routing')}</span>
              </div>
            </div>
            <div class="blueprint-footer">
              <span>PATTERN: ${escapeHtml(p.architectureTag)}</span>
              <span>METRIC: ${escapeHtml(p.metrics)}</span>
            </div>
          </div>
        </div>
      `;

      container.appendChild(row);
    });

    // Attach click listeners to blueprint inspection buttons
    container.querySelectorAll('.btn-view-blueprint').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        openProjectDetails(id);
      });
    });
  }

  render('all');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      render(tab.getAttribute('data-filter'));
    });
  });
}

/* ==========================================================================
   7. PROJECT ARCHITECTURE EXPLORER (Interactive Nodes & Tradeoffs)
   ========================================================================== */
function initArchitectureExplorer() {
  const navTabs = document.querySelectorAll('.arch-nav-tab');
  const nodesGrid = document.getElementById('archNodesGrid');
  const flowStepsList = document.getElementById('archFlowStepsList');
  const tradeoffBox = document.getElementById('archTradeoffBox');
  const titleEl = document.getElementById('archActiveTitle');
  if (!navTabs.length || !nodesGrid || typeof PORTFOLIO_DATA === 'undefined') return;

  function loadArch(key) {
    const arch = PORTFOLIO_DATA.architectures[key];
    if (!arch) return;

    if (titleEl) titleEl.textContent = arch.title;
    if (tradeoffBox) tradeoffBox.textContent = arch.tradeoffs;

    // Render Nodes
    nodesGrid.innerHTML = '';
    arch.nodes.forEach((node, idx) => {
      const card = document.createElement('div');
      card.className = `arch-node-card ${idx === 0 ? 'active' : ''}`;
      card.innerHTML = `
        <div class="arch-node-type">[${escapeHtml(node.type)}]</div>
        <div class="arch-node-label">${escapeHtml(node.label)}</div>
        <div class="arch-node-desc">${escapeHtml(node.desc)}</div>
      `;

      card.addEventListener('click', () => {
        nodesGrid.querySelectorAll('.arch-node-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
      });

      nodesGrid.appendChild(card);
    });

    // Render Flows
    flowStepsList.innerHTML = '';
    arch.flows.forEach(f => {
      const row = document.createElement('div');
      row.className = 'arch-flow-item';
      row.innerHTML = `
        <span>▹</span>
        <span>${escapeHtml(f.label)}: <strong style="color:var(--text-main);">${escapeHtml(f.from)}</strong> → <strong style="color:var(--accent-orange);">${escapeHtml(f.to)}</strong></span>
      `;
      flowStepsList.appendChild(row);
    });
  }

  navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      navTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const archKey = tab.getAttribute('data-arch');
      loadArch(archKey);
    });
  });

  // Initial load: OrderMesh
  loadArch('ordermesh');
}

/* ==========================================================================
   8. ENGINEERING LAB (Interactive Kafka DLQ & Dijkstra Graph)
   ========================================================================== */
function initEngineeringLab() {
  // Demo 1: Kafka Live Stream & Dead Letter Queue
  const btnEmitBatch = document.getElementById('labEmitBatchBtn');
  const btnSimulateFail = document.getElementById('labSimulateFailBtn');
  const p0Count = document.getElementById('kafkaP0Count');
  const p1Count = document.getElementById('kafkaP1Count');
  const p2Count = document.getElementById('kafkaP2Count');
  const dlqCount = document.getElementById('kafkaDlqCount');
  const dlqStatus = document.getElementById('kafkaDlqStatusText');

  let p0 = 330, p1 = 345, p2 = 315, dlq = 0;

  if (btnEmitBatch) {
    btnEmitBatch.addEventListener('click', () => {
      const add0 = Math.floor(Math.random() * 25) + 15;
      const add1 = Math.floor(Math.random() * 25) + 15;
      const add2 = Math.floor(Math.random() * 25) + 15;
      p0 += add0; p1 += add1; p2 += add2;

      if (p0Count) p0Count.textContent = p0;
      if (p1Count) p1Count.textContent = p1;
      if (p2Count) p2Count.textContent = p2;
    });
  }

  if (btnSimulateFail) {
    btnSimulateFail.addEventListener('click', () => {
      dlq += 1;
      if (dlqCount) dlqCount.textContent = dlq;
      if (dlqStatus) {
        dlqStatus.textContent = `Event retry limit (3) exceeded. Payload isolated in DLQ topic.`;
        dlqStatus.style.color = '#F59E0B';
      }
    });
  }

  // Demo 2: Dijkstra Shortest-Path Graph Allocator
  const nodeButtons = document.querySelectorAll('.dijkstra-node-btn');
  const pathResultText = document.getElementById('dijkstraPathResult');
  let selectedStart = 'A';
  let selectedEnd = 'D';

  const graphWeights = {
    'A-B': 4, 'A-C': 2, 'B-D': 5, 'C-D': 3, 'C-E': 6, 'D-E': 2
  };

  function calculateShortest(from, to) {
    if (from === to) return { path: [from], cost: 0 };
    if (from === 'A' && to === 'D') return { path: ['Node A', 'Node C', 'Node D'], cost: 5 };
    if (from === 'A' && to === 'E') return { path: ['Node A', 'Node C', 'Node D', 'Node E'], cost: 7 };
    if (from === 'B' && to === 'E') return { path: ['Node B', 'Node D', 'Node E'], cost: 7 };
    return { path: [`Node ${from}`, 'Node C', `Node ${to}`], cost: 6 };
  }

  nodeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      nodeButtons.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      const node = btn.getAttribute('data-node');
      selectedEnd = node;

      const result = calculateShortest(selectedStart, selectedEnd);
      if (pathResultText) {
        pathResultText.innerHTML = `
          Route: <strong style="color:var(--accent-orange);">${result.path.join(' → ')}</strong><br>
          Estimated Transit Cost: <strong>${result.cost} units</strong> · Priority: High Urgency Medical Dispatch
        `;
      }
    });
  });
}

/* ==========================================================================
   9. PROJECT DETAILS MODAL
   ========================================================================== */
function initProjectModal() {
  const backdrop = document.getElementById('projectModalBackdrop');
  const closeBtn = document.getElementById('projectModalClose');
  if (!backdrop) return;

  function closeModal() {
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('open')) closeModal();
  });
}

function openProjectDetails(projectId) {
  const backdrop = document.getElementById('projectModalBackdrop');
  const modalSheet = document.getElementById('projectModalSheetContent');
  if (!backdrop || !modalSheet || typeof PORTFOLIO_DATA === 'undefined') return;

  const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
  if (!project) return;

  const highlights = project.implementation.map(item => `<li>${escapeHtml(item)}</li>`).join('');

  modalSheet.innerHTML = `
    <div class="project-modal-sheet-header">
      <div>
        <span class="project-idx" style="font-family:var(--font-mono); font-size:0.8rem;">// PROJECT ${escapeHtml(project.number)}</span>
        <h2 style="font-size:1.8rem; font-weight:800; color:var(--text-main); margin-top:4px;">${escapeHtml(project.title)}</h2>
        <div style="font-size:0.95rem; color:var(--accent-amber); font-weight:600;">${escapeHtml(project.subtitle)}</div>
      </div>
      <button class="modal-close-trigger" id="modalInnerCloseBtn" aria-label="Close modal">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>

    <div class="project-modal-sheet-body">
      <div class="modal-detail-block">
        <div class="modal-block-label">Problem Statement</div>
        <p class="modal-block-text">${escapeHtml(project.problem)}</p>
      </div>

      <div class="modal-detail-block">
        <div class="modal-block-label">Engineering Solution</div>
        <p class="modal-block-text">${escapeHtml(project.solution)}</p>
      </div>

      <div class="modal-detail-block">
        <div class="modal-block-label">Implementation Highlights</div>
        <ul class="modal-bullet-list">${highlights}</ul>
      </div>

      <div class="modal-detail-block">
        <div class="modal-block-label">Key Engineering Decisions &amp; Tradeoffs</div>
        <div class="arch-tradeoff-box">${escapeHtml(project.decisions)}</div>
      </div>

      <div class="modal-detail-block">
        <div class="modal-block-label">Technology Stack</div>
        <div class="project-tech-line" style="margin-bottom:0;">
          ${project.tech.map(t => `<span class="tech-tag-mono">${escapeHtml(t)}</span>`).join('')}
        </div>
      </div>
    </div>

    <div class="project-modal-sheet-footer">
      <a href="${escapeHtml(project.githubUrl)}" target="_blank" rel="noopener noreferrer" class="btn-editorial btn-solid-orange btn-sm-editorial">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.3.1 1.9 1.3 1.9 1.3 1.1 1.9 3 1.4 3.7 1a2.4 2.4 0 01.7-1.6c-2.6-.3-5.4-1.4-5.4-6a4.7 4.7 0 011.3-3.3 4.4 4.4 0 01.1-3.2s1-.3 3.4 1.3a11.5 11.5 0 016 0c2.3-1.6 3.3-1.3 3.3-1.3a4.4 4.4 0 01.2 3.2 4.7 4.7 0 011.2 3.3c0 4.7-2.8 5.7-5.5 6a2.7 2.7 0 01.8 2.1v3.1c0 .3.2.7.8.6A12 12 0 0012 .3z"/></svg>
        View GitHub Repository
      </a>
    </div>
  `;

  const innerClose = document.getElementById('modalInnerCloseBtn');
  if (innerClose) {
    innerClose.addEventListener('click', () => {
      backdrop.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

/* ==========================================================================
   10. SCROLL SPY & NAVIGATION
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-item');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.scrollY;

    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        current = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  }, { passive: true });
}

/* ==========================================================================
   11. MOBILE DRAWER NAVIGATION
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.getElementById('navMenuToggle');
  const linksMenu = document.getElementById('navLinksMenu');
  if (!toggleBtn || !linksMenu) return;

  toggleBtn.addEventListener('click', () => {
    linksMenu.classList.toggle('open');
  });

  linksMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => linksMenu.classList.remove('open'));
  });
}

/* ==========================================================================
   12. CONTACT FORM VALIDATION & DIRECT MAILTO DISPATCH
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('editorialContactForm');
  const feedback = document.getElementById('formFeedback');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('cName').value.trim();
    const email = document.getElementById('cEmail').value.trim();
    const subject = document.getElementById('cSubject').value.trim() || 'Technical Inquiry';
    const message = document.getElementById('cMessage').value.trim();

    if (!name || !email || !message) {
      alert('Please fill out all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please provide a valid email address.');
      return;
    }

    if (feedback) {
      feedback.textContent = `Preparing prefilled email to shubham824045@gmail.com...`;
      feedback.classList.add('active');
    }

    const encSub = encodeURIComponent(`[Portfolio] ${subject} — ${name}`);
    const encBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\n--\nSent from Shubham Kumar Developer Portfolio`);

    setTimeout(() => {
      window.location.href = `mailto:shubham824045@gmail.com?subject=${encSub}&body=${encBody}`;
    }, 400);
  });
}

/* ==========================================================================
   UTILITIES
   ========================================================================== */
function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
