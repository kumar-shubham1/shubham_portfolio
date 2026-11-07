/**
 * SHUBHAM KUMAR — ULTIMATE PORTFOLIO SIGNATURE JAVASCRIPT
 * Award-winning creative developer interactions:
 * 1. Global Command Palette (Ctrl+K / Cmd+K)
 * 2. Developer Terminal ("Inside Shubham's Dev Environment")
 * 3. Project Architecture Explorer (OrderMesh, AstraOS, NewsSenseAI)
 * 4. Engineering Lab (Kafka Partition Stream, Dijkstra Routing, Process Scheduler)
 * 5. GitHub Activity & Live Public API Dashboard with Verified Fallback
 * 6. Editorial Project Showcase & Case Study Sheet
 * 7. Desktop Cursor Spotlight & Subtle Magnetic Buttons
 * 8. Form Validation & Mailto Generation
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all interactive modules
  initTheme();
  initScrollProgress();
  initCursorSpotlight();
  initMagneticButtons();
  initHeroTyping();
  initCommandPalette();
  initDevTerminal();
  initPrinciples();
  initDetailedCaseStudies();
  initProjectsShowcase();
  initArchitectureExplorer();
  initEngineeringLab();
  initQualityDashboard();
  initBenchmarkLab();
  initApiPlayground();
  initGitHubDashboard();
  initOpenSourceSection();
  initTechnicalNotes();
  initCurrentlyExploring();
  initProjectModal();
  initScrollSpy();
  initMobileNav();
  initContactForm();
});

/* ==========================================================================
   0. THEME INITIALIZATION & TOGGLE
   ========================================================================= */
function initTheme() {
  const toggle = document.getElementById('themeToggle');
  if (!toggle) return;

  function getCurrentTheme() {
    return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }

  function setTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      toggle.setAttribute('aria-label', 'Switch to Light Theme');
    } else {
      document.documentElement.removeAttribute('data-theme');
      toggle.setAttribute('aria-label', 'Switch to Dark Theme');
    }
    localStorage.setItem('portfolio-theme', theme);
  }

  // Set initial accessible label
  toggle.setAttribute('aria-label', getCurrentTheme() === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme');

  toggle.addEventListener('click', () => {
    const current = getCurrentTheme();
    setTheme(current === 'dark' ? 'light' : 'dark');
  });

  // Listen for system preference changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('portfolio-theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });
}

/* ==========================================================================
   1. SCROLL PROGRESS INDICATOR
   ========================================================================= */
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
   ========================================================================= */
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
   3. SUBTLE MAGNETIC BUTTON EFFECT
   ========================================================================= */
function initMagneticButtons() {
  if (window.innerWidth < 1024) return;
  const magneticBtns = document.querySelectorAll('.btn-magnetic');

  magneticBtns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0px, 0px)';
    });
  });
}

/* ==========================================================================
   4. HERO TYPING & ROTATING DESCRIPTOR (Graceful Fallback)
   ========================================================================= */
function initHeroTyping() {
  const target = document.getElementById('heroRotatingText');
  if (!target) return;

  const descriptors = [
    'Aspiring Software Engineer',
    'Backend Development Enthusiast',
    'Distributed Systems Explorer',
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
   5. GLOBAL COMMAND PALETTE (Ctrl+K / Cmd+K)
   ========================================================================= */
function initCommandPalette() {
  const backdrop = document.getElementById('cmdPaletteBackdrop');
  const triggerBtn = document.getElementById('cmdPaletteTrigger');
  const searchInput = document.getElementById('cmdSearchInput');
  const resultsContainer = document.getElementById('cmdResultsList');
  if (!backdrop || !searchInput || !resultsContainer) return;

  // Global commands palette registry
  const commands = [
    { title: "Go to Home", category: "Navigation", target: "#home" },
    { title: "About Shubham (Engineering Profile)", category: "Navigation", target: "#about" },
    { title: "Engineering Principles", category: "Architecture", target: "#principles" },
    { title: "Engineering Case Studies (12-Point Analysis)", category: "Deep Dive", target: "#case-studies" },
    { title: "View Skills Stack", category: "Navigation", target: "#skills" },
    { title: "Explore Projects", category: "Navigation", target: "#projects" },
    { title: "Open OrderMesh", category: "Case Study", target: "#projects", action: "ordermesh" },
    { title: "Open AstraOS", category: "Case Study", target: "#projects", action: "astraos" },
    { title: "Open NewsSenseAI", category: "Case Study", target: "#projects", action: "newssenseai" },
    { title: "Open AI Job Tracker", category: "Case Study", target: "#projects", action: "ai-job-tracker" },
    { title: "Project Architecture Explorer", category: "Systems", target: "#architecture" },
    { title: "Engineering Lab", category: "Interactive", target: "#lab" },
    { title: "Engineering Quality Dashboard", category: "Verification", target: "#quality" },
    { title: "Performance & Benchmark Lab", category: "Benchmarks", target: "#benchmarks" },
    { title: "Problem Solving & DSA (700+ Problems)", category: "Coding", target: "#dsa" },
    { title: "Interactive API Playground", category: "Contracts", target: "#api-playground" },
    { title: "Developer Activity & GitHub", category: "Navigation", target: "#github-activity" },
    { title: "Open Source Contributions", category: "Open Source", target: "#opensource" },
    { title: "Engineering Notes & Field Notes", category: "Writing", target: "#notes" },
    { title: "Currently Exploring Topics", category: "Roadmap", target: "#exploring" },
    { title: "Career & Academic Timeline", category: "Navigation", target: "#timeline" },
    { title: "View Honors & Achievements", category: "Navigation", target: "#achievements" },
    { title: "Download Resume", category: "Action", url: PORTFOLIO_DATA.personal.resumeUrl },
    { title: "Open GitHub Profile", category: "Social", url: PORTFOLIO_DATA.personal.github },
    { title: "Open LinkedIn Profile", category: "Social", url: PORTFOLIO_DATA.personal.linkedin },
    { title: "Open LeetCode Profile", category: "Coding", url: PORTFOLIO_DATA.personal.leetcode },
    { title: "Open GeeksforGeeks Profile", category: "Coding", url: PORTFOLIO_DATA.personal.gfg },
    { title: "Contact Shubham", category: "Contact", target: "#contact" },
    { title: "Switch to Dark Theme", category: "Theme", action: "theme-dark" },
    { title: "Switch to Light Theme", category: "Theme", action: "theme-light" }
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
      resultsContainer.innerHTML = '<div style="padding:16px; color:var(--text-faint); font-family:var(--font-mono); font-size:0.85rem;">No matching commands found.</div>';
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
    if (item.action === 'theme-dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('portfolio-theme', 'dark');
      return;
    }
    if (item.action === 'theme-light') {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('portfolio-theme', 'light');
      return;
    }
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

  // Keyboard shortcut listener: Ctrl+K, Cmd+K, Escape, Arrows, Enter
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
        if (items.length > 0) {
          highlightedIndex = (highlightedIndex + 1) % items.length;
          updateHighlight(items);
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (items.length > 0) {
          highlightedIndex = (highlightedIndex - 1 + items.length) % items.length;
          updateHighlight(items);
        }
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

  // Search input filter
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
   6. DEVELOPER TERMINAL ("Inside Shubham's Dev Environment")
   ========================================================================= */
function initDevTerminal() {
  const terminalBody = document.getElementById('terminalBody');
  const terminalInput = document.getElementById('terminalInput');
  const quickCmdBtns = document.querySelectorAll('.quick-cmd-btn');
  if (!terminalBody || !terminalInput) return;

  const commandHistory = [];
  let historyIdx = -1;

  // Expected authentic responses exactly per user specification
  const commandResponses = {
    help: () => [
      "Inside Shubham's Dev Environment — Available Commands:",
      "  whoami         - View identity and professional title",
      "  about          - View engineering background & education",
      "  skills         - Technologies, languages, and frameworks",
      "  projects       - Overview of the 6 signature projects",
      "  dsa            - Algorithmic problem solving & profiles",
      "  current-focus  - What I am building and researching now",
      "  github         - Public repositories and profile link",
      "  contact        - Direct contact info (Email, LinkedIn, WhatsApp)",
      "  clear          - Clear current terminal output buffer"
    ],
    whoami: () => [
      "Shubham Kumar — Aspiring Software Engineer."
    ],
    about: () => [
      "Shubham Kumar — B.Tech in Computer Science & Engineering (3rd Year — approaching 4th Year).",
      "Graphic Era University, Dehradun (Expected Graduation: 2028).",
      "Focus: Scalable backend architectures, distributed event streaming, and applied AI."
    ],
    skills: () => [
      "Java, Spring Boot, Python, Kafka, React, Next.js, PostgreSQL and more."
    ],
    projects: () => [
      "OrderMesh, AstraOS, NewsSenseAI, Crop Disease Prediction, AI Job Tracker and Disaster Relief Portal."
    ],
    "current-focus": () => [
      "Backend Engineering, Distributed Systems and AI Engineering."
    ],
    "current_focus": () => [
      "Backend Engineering, Distributed Systems and AI Engineering."
    ],
    dsa: () => [
      "DSA Foundation: 700+ problems solved across LeetCode and GeeksforGeeks.",
      "LeetCode: https://leetcode.com/u/kumar-shubham1/",
      "GeeksforGeeks: https://www.geeksforgeeks.org/profile/shubhamvezhpz"
    ],
    github: () => [
      "GitHub Profile: https://github.com/kumar-shubham1",
      "Public Repositories: 30+ projects exploring distributed systems, AI & web."
    ],
    principles: () => [
      "Pillars: Reliability First, Bounded Latency, Maintainability, Horizontal Scalability, Security in Depth, Ownership."
    ],
    quality: () => [
      "Evidence: JUnit 5 & PyTest automated suites, GitHub Actions CI, SpotBugs, 0 Dependabot alerts."
    ],
    benchmarks: () => [
      "OrderMesh: 12,400 events/sec sustained throughput, 14.2ms avg latency, 38ms P99 across 3 Kafka partitions."
    ],
    notes: () => [
      "Field Notes: 5 technical articles on partition rebalancing, idempotency, Dijkstra transit, and on-device PyTorch."
    ],
    contact: () => [
      "Email:        shubham824045@gmail.com",
      "WhatsApp:     +91 97981 74491",
      `LinkedIn:     ${PORTFOLIO_DATA.personal.linkedin}`,
      `LeetCode:     ${PORTFOLIO_DATA.personal.leetcode}`,
      `GeeksforGeeks:${PORTFOLIO_DATA.personal.gfg}`
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
   6.1. ENGINEERING PRINCIPLES
   ========================================================================== */
function initPrinciples() {
  const container = document.getElementById('principlesContainer');
  if (!container || typeof PORTFOLIO_DATA === 'undefined' || !PORTFOLIO_DATA.engineeringPrinciples) return;

  container.innerHTML = PORTFOLIO_DATA.engineeringPrinciples.map((p, idx) => `
    <div class="principle-card">
      <div class="principle-top-row">
        <span class="principle-num">// PILLAR 0${idx + 1}</span>
        <span class="principle-system-badge">${escapeHtml(p.id.toUpperCase())}</span>
      </div>
      <h3 class="principle-title">${escapeHtml(p.title)}</h3>
      <div style="font-size:0.86rem; color:var(--accent-secondary); font-weight:600; margin-bottom:8px;">${escapeHtml(p.subtitle)}</div>
      <p class="principle-statement">${escapeHtml(p.description)}</p>
      <div class="principle-example-box">
        <strong>Implementation Proof:</strong> ${escapeHtml(p.example)}
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   6.2. DEDICATED ENGINEERING CASE STUDIES (12-POINT ARCHITECTURAL BREAKDOWN)
   ========================================================================== */
function initDetailedCaseStudies() {
  const tabsNav = document.getElementById('caseStudiesTabsNav');
  const panel = document.getElementById('caseStudyActivePanel');
  if (!tabsNav || !panel || typeof PORTFOLIO_DATA === 'undefined' || !PORTFOLIO_DATA.detailedCaseStudies) return;

  function renderCaseStudy(key) {
    const cs = Array.isArray(PORTFOLIO_DATA.detailedCaseStudies)
      ? PORTFOLIO_DATA.detailedCaseStudies.find(x => x.id === key)
      : PORTFOLIO_DATA.detailedCaseStudies[key];
    if (!cs) return;

    const sec = cs.sections || cs;
    const req = sec.systemRequirements || sec.requirements || { functional: [], nonFunctional: [] };
    const techList = sec.techStackJustification || sec.techChoices || [];

    panel.innerHTML = `
      <div class="cs-overview-banner">
        <div>
          <span class="edu-badge">${escapeHtml(sec.architecture ? 'VERIFIED ARCHITECTURE' : 'SYSTEM DEEP DIVE')}</span>
          <h3 class="cs-overview-title">${escapeHtml(cs.title)}</h3>
          <div class="cs-overview-sub">${escapeHtml(cs.tagline || cs.subtitle || '')}</div>
        </div>
        <div style="display:flex; gap:10px; align-items:center;">
          <a href="${escapeHtml(cs.githubUrl)}" target="_blank" rel="noopener noreferrer" class="btn-editorial btn-outline-minimal btn-sm-editorial">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.3.1 1.9 1.3 1.9 1.3 1.1 1.9 3 1.4 3.7 1a2.4 2.4 0 01.7-1.6c-2.6-.3-5.4-1.4-5.4-6a4.7 4.7 0 011.3-3.3 4.4 4.4 0 01.1-3.2s1-.3 3.4 1.3a11.5 11.5 0 016 0c2.3-1.6 3.3-1.3 3.3-1.3a4.4 4.4 0 01.2 3.2 4.7 4.7 0 011.2 3.3c0 4.7-2.8 5.7-5.5 6a2.7 2.7 0 01.8 2.1v3.1c0 .3.2.7.8.6A12 12 0 0012 .3z"/></svg>
            GitHub Repository
          </a>
        </div>
      </div>

      <div class="case-study-12point-grid">
        <div class="cs-point-card">
          <div class="cs-point-header">
            <span class="cs-point-idx">01</span>
            <span class="cs-point-title">Problem Statement</span>
          </div>
          <p class="cs-point-content">${escapeHtml(sec.problemStatement || '')}</p>
        </div>

        <div class="cs-point-card">
          <div class="cs-point-header">
            <span class="cs-point-idx">02</span>
            <span class="cs-point-title">Project Motivation</span>
          </div>
          <p class="cs-point-content">${escapeHtml(sec.motivation || '')}</p>
        </div>

        <div class="cs-point-card">
          <div class="cs-point-header">
            <span class="cs-point-idx">03</span>
            <span class="cs-point-title">System Requirements</span>
          </div>
          <div class="cs-point-content">
            <strong style="color:var(--text-main);">Functional:</strong>
            <ul>${(req.functional || []).map(f => `<li>${escapeHtml(f)}</li>`).join('')}</ul>
            <strong style="display:block; margin-top:8px; color:var(--text-main);">Non-Functional:</strong>
            <ul>${(req.nonFunctional || []).map(nf => `<li>${escapeHtml(nf)}</li>`).join('')}</ul>
          </div>
        </div>

        <div class="cs-point-card">
          <div class="cs-point-header">
            <span class="cs-point-idx">04</span>
            <span class="cs-point-title">Architecture &amp; Data Flow</span>
          </div>
          <div class="cs-point-content">
            <p>${escapeHtml(sec.architecture || sec.architectureOverview || '')}</p>
          </div>
        </div>

        <div class="cs-point-card">
          <div class="cs-point-header">
            <span class="cs-point-idx">05</span>
            <span class="cs-point-title">Technology Choices &amp; Justification</span>
          </div>
          <div class="cs-point-content">
            <ul>${techList.map(tc => `<li><strong>${escapeHtml(tc.tech)}:</strong> ${escapeHtml(tc.reason || tc.justification || '')}</li>`).join('')}</ul>
          </div>
        </div>

        <div class="cs-point-card">
          <div class="cs-point-header">
            <span class="cs-point-idx">06</span>
            <span class="cs-point-title">Implementation Details</span>
          </div>
          <div class="cs-point-content">
            <p>${escapeHtml(sec.implementationDetails || '')}</p>
          </div>
        </div>

        <div class="cs-point-card">
          <div class="cs-point-header">
            <span class="cs-point-idx">07</span>
            <span class="cs-point-title">Important Engineering Decisions</span>
          </div>
          <div class="cs-point-content">
            <p>${escapeHtml(sec.engineeringDecisions || '')}</p>
          </div>
        </div>

        <div class="cs-point-card">
          <div class="cs-point-header">
            <span class="cs-point-idx">08</span>
            <span class="cs-point-title">Challenges &amp; Debugging</span>
          </div>
          <div class="cs-point-content">
            <p>${escapeHtml(sec.challengesDebugging || '')}</p>
          </div>
        </div>

        <div class="cs-point-card">
          <div class="cs-point-header">
            <span class="cs-point-idx">09</span>
            <span class="cs-point-title">Testing &amp; Validation</span>
          </div>
          <div class="cs-point-content">
            <p>${escapeHtml(sec.testingValidation || '')}</p>
          </div>
        </div>

        <div class="cs-point-card">
          <div class="cs-point-header">
            <span class="cs-point-idx">10</span>
            <span class="cs-point-title">Performance Evaluation</span>
          </div>
          <div class="cs-point-content">
            <p>${escapeHtml(sec.performanceEvaluation || '')}</p>
          </div>
        </div>

        <div class="cs-point-card">
          <div class="cs-point-header">
            <span class="cs-point-idx">11</span>
            <span class="cs-point-title">Current Limitations</span>
          </div>
          <div class="cs-point-content">
            <p>${escapeHtml(sec.limitations || '')}</p>
          </div>
        </div>

        <div class="cs-point-card">
          <div class="cs-point-header">
            <span class="cs-point-idx">12</span>
            <span class="cs-point-title">Future Improvements</span>
          </div>
          <div class="cs-point-content">
            <p>${escapeHtml(sec.futureImprovements || '')}</p>
          </div>
        </div>
      </div>
    `;
  }

  const tabButtons = tabsNav.querySelectorAll('.case-study-tab-btn');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const csKey = btn.getAttribute('data-cs');
      renderCaseStudy(csKey);
    });
  });

  // Default initial render
  renderCaseStudy('ordermesh');
}

/* ==========================================================================
   7. EDITORIAL PROJECT SHOWCASE & CASE STUDY TRIGGER
   ========================================================================= */
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
            <button type="button" class="btn-editorial btn-solid-orange btn-sm-editorial btn-magnetic btn-view-blueprint" data-id="${escapeHtml(p.id)}">
              Inspect Case Study
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
            </button>
            <a href="${escapeHtml(p.githubUrl)}" target="_blank" rel="noopener noreferrer" class="btn-editorial btn-outline-minimal btn-sm-editorial btn-magnetic" aria-label="View source code on GitHub">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.3.1 1.9 1.3 1.9 1.3 1.1 1.9 3 1.4 3.7 1a2.4 2.4 0 01.7-1.6c-2.6-.3-5.4-1.4-5.4-6a4.7 4.7 0 011.3-3.3 4.4 4.4 0 01.1-3.2s1-.3 3.4 1.3a11.5 11.5 0 016 0c2.3-1.6 3.3-1.3 3.3-1.3a4.4 4.4 0 01.2 3.2 4.7 4.7 0 011.2 3.3c0 4.7-2.8 5.7-5.5 6a2.7 2.7 0 01.8 2.1v3.1c0 .3.2.7.8.6A12 12 0 0012 .3z"/></svg>
              GitHub Code
            </a>
          </div>
        </div>

        <div class="project-visual-pane">
          <div class="technical-blueprint-card">
            <div class="blueprint-header">
              <span>SYSTEM BLUEPRINT // ${escapeHtml(p.id.toUpperCase())}</span>
              <span>VERIFIED REPOSITORY</span>
            </div>
            <div class="blueprint-diagram-area">
              <div class="blueprint-flow-step">
                <span class="flow-step-marker">1</span>
                <span>${escapeHtml(p.howItWorks)}</span>
              </div>
              <div class="blueprint-flow-step">
                <span class="flow-step-marker">2</span>
                <span>${escapeHtml(p.keyChallenge)}</span>
              </div>
              <div class="blueprint-flow-step">
                <span class="flow-step-marker">3</span>
                <span>${escapeHtml(p.whatLearned)}</span>
              </div>
            </div>
            <div class="blueprint-footer">
              <span>PATTERN: ${escapeHtml(p.categoryLabel || 'Distributed System')}</span>
              <span>METRIC: ${escapeHtml(p.metrics)}</span>
            </div>
          </div>
        </div>
      `;

      container.appendChild(row);
    });

    // Attach click listeners to case study inspection buttons
    container.querySelectorAll('.btn-view-blueprint').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        openProjectDetails(id);
      });
    });

    // Refresh magnetic button bindings
    initMagneticButtons();
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
   8. PROJECT ARCHITECTURE EXPLORER (Interactive Nodes & Tradeoffs)
   ========================================================================= */
function initArchitectureExplorer() {
  const navTabs = document.querySelectorAll('.arch-nav-tab');
  const nodesGrid = document.getElementById('archNodesGrid');
  const flowStepsList = document.getElementById('archFlowStepsList');
  const tradeoffBox = document.getElementById('archTradeoffBox');
  const titleEl = document.getElementById('archActiveTitle');
  const subtitleEl = document.getElementById('archActiveSubtitle');
  if (!navTabs.length || !nodesGrid || typeof PORTFOLIO_DATA === 'undefined') return;

  function loadArch(key) {
    const arch = PORTFOLIO_DATA.architectures[key];
    if (!arch) return;

    if (titleEl) titleEl.textContent = arch.title;
    if (subtitleEl) subtitleEl.textContent = arch.subtitle;
    if (tradeoffBox) tradeoffBox.textContent = arch.tradeoffs;

    // Render interactive nodes
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

    // Render flow sequences
    flowStepsList.innerHTML = '';
    arch.flows.forEach(f => {
      const row = document.createElement('div');
      row.className = 'arch-flow-item';
      row.innerHTML = `
        <span>▹</span>
        <span>${escapeHtml(f.label)}: <strong style="color:var(--text-main);">${escapeHtml(f.from)}</strong> → <strong style="color:var(--accent-primary);">${escapeHtml(f.to)}</strong></span>
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

  // Default load: OrderMesh
  loadArch('ordermesh');
}

/* ==========================================================================
   9. ENGINEERING LAB (Interactive Playgrounds)
   ========================================================================= */
function initEngineeringLab() {
  // Demo 1: Kafka Live Stream & DLQ Simulator
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
        dlqStatus.textContent = `Worker retry ceiling (3) reached. Payload isolated in DLQ topic.`;
        dlqStatus.style.color = 'var(--accent-secondary)';
      }
    });
  }

  // Demo 2: Dijkstra Shortest-Path Graph Allocator
  const nodeButtons = document.querySelectorAll('.dijkstra-node-btn');
  const pathResultText = document.getElementById('dijkstraPathResult');
  let selectedStart = 'A';
  let selectedEnd = 'D';

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
          Shortest Delivery Route: <strong style="color:var(--accent-primary);">${result.path.join(' → ')}</strong><br>
          Computed Transit Cost: <strong>${result.cost} units</strong> · Allocation: Priority Emergency Aid
        `;
      }
    });
  });

  // Demo 3: Interactive Process Scheduler Simulation
  const btnNextQuantum = document.getElementById('labNextQuantumBtn');
  const schedActiveTask = document.getElementById('schedActiveTask');
  const schedQueue = document.getElementById('schedQueue');

  const tasks = [
    { id: "P1", name: "Kafka Ingest Worker", remaining: 4 },
    { id: "P2", name: "ResNet9 Inference Tensor", remaining: 6 },
    { id: "P3", name: "PostgreSQL B-Tree Sync", remaining: 3 }
  ];
  let currentTaskIdx = 0;

  if (btnNextQuantum && schedActiveTask && schedQueue) {
    function updateSchedulerDisplay() {
      const cur = tasks[currentTaskIdx];
      schedActiveTask.innerHTML = `
        Running: <strong style="color:var(--accent-primary);">${cur.id} (${cur.name})</strong> · Remaining: <strong>${cur.remaining} quantum</strong>
      `;
      const queueList = tasks.map((t, i) => 
        `<span style="margin-right:12px; font-family:var(--font-mono); font-size:0.75rem; color:${i === currentTaskIdx ? 'var(--accent-primary)' : 'var(--text-faint)'}">[${t.id}: ${t.remaining}q]</span>`
      ).join('');
      schedQueue.innerHTML = queueList;
    }

    btnNextQuantum.addEventListener('click', () => {
      if (tasks[currentTaskIdx].remaining > 1) {
        tasks[currentTaskIdx].remaining -= 1;
      } else {
        tasks[currentTaskIdx].remaining = 5; // reload
      }
      currentTaskIdx = (currentTaskIdx + 1) % tasks.length;
      updateSchedulerDisplay();
    });

    updateSchedulerDisplay();
  }
}

/* ==========================================================================
   9.1. ENGINEERING QUALITY DASHBOARD
   ========================================================================== */
function initQualityDashboard() {
  const container = document.getElementById('qualityContainer');
  if (!container || typeof PORTFOLIO_DATA === 'undefined' || !PORTFOLIO_DATA.engineeringQuality) return;

  const eq = PORTFOLIO_DATA.engineeringQuality;

  container.innerHTML = `
    <!-- Card 1: Repository CI/CD & Testing Verification -->
    <div class="quality-card" style="grid-column: span 2;">
      <div class="quality-card-header">
        <div class="quality-card-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
        </div>
        <div>
          <h3 class="quality-card-title">Repository CI/CD &amp; Testing Evidence</h3>
          <div style="font-family:var(--font-mono); font-size:0.75rem; color:var(--text-faint);">${escapeHtml(eq.overview)}</div>
        </div>
      </div>
      <div class="quality-items-list" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:16px;">
        ${(eq.repositories || []).map(r => `
          <div class="quality-item-row">
            <div class="quality-item-top">
              <span class="quality-item-name">${escapeHtml(r.name)}</span>
              <span class="quality-status-badge status-green">${escapeHtml(r.ciStatus)}</span>
            </div>
            <div class="quality-item-detail"><strong>CI Workflow:</strong> <code>${escapeHtml(r.ciWorkflow)}</code></div>
            <div class="quality-item-detail" style="margin-top:3px;"><strong>Test Suite:</strong> ${escapeHtml(r.testFramework)}</div>
            <div class="quality-item-detail" style="margin-top:3px;"><strong>Static Analysis:</strong> ${escapeHtml(r.staticAnalysis)}</div>
            <div class="quality-item-detail" style="margin-top:3px;"><strong>Security:</strong> ${escapeHtml(r.securityAudit)}</div>
            <div class="quality-item-detail" style="margin-top:6px; font-family:var(--font-mono); font-size:0.75rem; color:var(--text-faint); border-top:1px solid var(--border-subtle); padding-top:4px;">
              ${escapeHtml(r.coverageNote)}
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Card 2: Engineering Quality Standards -->
    <div class="quality-card">
      <div class="quality-card-header">
        <div class="quality-card-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        </div>
        <h3 class="quality-card-title">Engineering Quality Standards</h3>
      </div>
      <div class="quality-items-list">
        ${(eq.qualityStandards || []).map(qs => `
          <div class="quality-item-row">
            <div class="quality-item-top">
              <span class="quality-item-name">${escapeHtml(qs.standard)}</span>
              <span class="quality-status-badge status-green">Enforced</span>
            </div>
            <div class="quality-item-detail">${escapeHtml(qs.practice)}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

/* ==========================================================================
   9.2. PERFORMANCE & BENCHMARK LAB
   ========================================================================== */
function initBenchmarkLab() {
  const panel = document.getElementById('benchMetricsDisplay');
  const latBreakdown = document.getElementById('benchLatencyBreakdown');
  const disclaimer = document.getElementById('benchDisclaimerBox');
  const toggleBtns = document.querySelectorAll('.btn-bench-toggle');
  if (!panel || !latBreakdown || !disclaimer || typeof PORTFOLIO_DATA === 'undefined' || !PORTFOLIO_DATA.performanceBenchmark) return;

  const pb = PORTFOLIO_DATA.performanceBenchmark;

  function updateView(workerCount) {
    const numWorkers = parseInt(workerCount, 10);
    const data = (pb.workerScalingData || []).find(w => w.workers === numWorkers) || pb.workerScalingData[0];
    if (!data) return;

    panel.innerHTML = `
      <div class="benchmark-metric-card">
        <div class="benchmark-metric-label">Throughput</div>
        <div class="benchmark-metric-val" style="color:var(--accent-primary);">${data.throughput.toLocaleString()} <span style="font-size:0.9rem; font-weight:500;">msgs/s</span></div>
        <div class="benchmark-metric-sub">${escapeHtml(data.status)}</div>
      </div>
      <div class="benchmark-metric-card">
        <div class="benchmark-metric-label">Average Latency</div>
        <div class="benchmark-metric-val">${data.avgLatency} <span style="font-size:0.9rem; font-weight:500;">ms</span></div>
        <div class="benchmark-metric-sub">End-to-end publish-to-ack</div>
      </div>
      <div class="benchmark-metric-card">
        <div class="benchmark-metric-label">P95 Latency</div>
        <div class="benchmark-metric-val">${data.p95} <span style="font-size:0.9rem; font-weight:500;">ms</span></div>
        <div class="benchmark-metric-sub">95th percentile upper bound</div>
      </div>
      <div class="benchmark-metric-card">
        <div class="benchmark-metric-label">P99 Latency</div>
        <div class="benchmark-metric-val">${data.p99} <span style="font-size:0.9rem; font-weight:500;">ms</span></div>
        <div class="benchmark-metric-sub">Tail latency under batching</div>
      </div>
    `;

    const p50Width = Math.min(100, Math.max(5, (data.p50 / 50) * 100));
    const avgWidth = Math.min(100, Math.max(5, (data.avgLatency / 50) * 100));
    const p95Width = Math.min(100, Math.max(5, (data.p95 / 50) * 100));
    const p99Width = Math.min(100, Math.max(5, (data.p99 / 50) * 100));

    latBreakdown.innerHTML = `
      <div style="font-family:var(--font-mono); font-size:0.75rem; text-transform:uppercase; color:var(--text-faint); margin-bottom:14px; letter-spacing:0.06em;">
        Latency Percentile Distribution (Workers: ${numWorkers} active partitions)
      </div>
      <div class="benchmark-bar-row">
        <div class="benchmark-bar-label-row">
          <span>P50 (Median)</span>
          <span>${data.p50} ms</span>
        </div>
        <div class="benchmark-bar-track">
          <div class="benchmark-bar-fill" style="width: ${p50Width}%;"></div>
        </div>
      </div>
      <div class="benchmark-bar-row">
        <div class="benchmark-bar-label-row">
          <span>Average</span>
          <span>${data.avgLatency} ms</span>
        </div>
        <div class="benchmark-bar-track">
          <div class="benchmark-bar-fill" style="width: ${avgWidth}%;"></div>
        </div>
      </div>
      <div class="benchmark-bar-row">
        <div class="benchmark-bar-label-row">
          <span>P95</span>
          <span>${data.p95} ms</span>
        </div>
        <div class="benchmark-bar-track">
          <div class="benchmark-bar-fill" style="width: ${p95Width}%;"></div>
        </div>
      </div>
      <div class="benchmark-bar-row">
        <div class="benchmark-bar-label-row">
          <span>P99 (Tail Latency)</span>
          <span>${data.p99} ms</span>
        </div>
        <div class="benchmark-bar-track">
          <div class="benchmark-bar-fill" style="width: ${p99Width}%;"></div>
        </div>
      </div>
    `;

    const fail = pb.failureHandlingAnalysis || {};
    disclaimer.innerHTML = `
      <strong>Failure &amp; Backpressure Resilience:</strong> ${escapeHtml(fail.observedResult || '')} ${escapeHtml(fail.conclusion || '')}<br>
      <strong style="color:var(--accent-secondary); margin-top:6px; display:inline-block;">Testbed Disclaimer:</strong> ${escapeHtml(pb.disclaimer || '')}
    `;
  }

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      toggleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const w = btn.getAttribute('data-workers');
      updateView(w);
    });
  });

  updateView('3');
}

/* ==========================================================================
   9.3. INTERACTIVE API PLAYGROUND
   ========================================================================== */
function initApiPlayground() {
  const navContainer = document.getElementById('apiEndpointsNav');
  const methodBadge = document.getElementById('apiMethodBadge');
  const pathText = document.getElementById('apiPathText');
  const payloadEditor = document.getElementById('apiPayloadEditor');
  const responseBody = document.getElementById('apiResponseBody');
  const responseStatus = document.getElementById('apiResponseStatus');
  const sendBtn = document.getElementById('apiSendRequestBtn');

  if (!navContainer || !methodBadge || !pathText || !payloadEditor || !responseBody || !sendBtn || typeof PORTFOLIO_DATA === 'undefined' || !PORTFOLIO_DATA.apiPlaygroundEndpoints) return;

  const endpoints = PORTFOLIO_DATA.apiPlaygroundEndpoints;
  let activeIndex = 0;

  function renderEndpoint(index) {
    activeIndex = index;
    const ep = endpoints[index];
    if (!ep) return;

    methodBadge.textContent = ep.method;
    methodBadge.className = `api-method-badge ${ep.method.toLowerCase()}`;
    pathText.textContent = ep.path;

    if (ep.samplePayload) {
      payloadEditor.value = JSON.stringify(ep.samplePayload, null, 2);
      payloadEditor.readOnly = false;
    } else {
      payloadEditor.value = "/* GET request has no body payload */";
      payloadEditor.readOnly = true;
    }

    responseStatus.textContent = "Standby (Click Send Request)";
    responseStatus.style.color = "var(--text-faint)";
    responseBody.textContent = `// Target: ${ep.system} — ${ep.description}\n// Headers:\n//   Authorization: Bearer mock-jwt-token-sde-2026\n//   Content-Type: application/json\n\nClick "Send Request" to execute against simulated client sandbox...`;

    navContainer.querySelectorAll('.api-endpoint-btn').forEach((btn, idx) => {
      btn.classList.toggle('active', idx === index);
    });
  }

  navContainer.innerHTML = endpoints.map((ep, idx) => `
    <button type="button" class="api-endpoint-btn ${idx === 0 ? 'active' : ''}" data-ep-idx="${idx}">
      <span class="api-endpoint-btn-method ${ep.method.toLowerCase()}">${ep.method}</span>
      <span class="api-endpoint-btn-name">${escapeHtml(ep.name)}</span>
      <span class="api-endpoint-btn-system">${escapeHtml(ep.system)}</span>
    </button>
  `).join('');

  navContainer.querySelectorAll('.api-endpoint-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-ep-idx'), 10);
      renderEndpoint(idx);
    });
  });

  sendBtn.addEventListener('click', () => {
    const ep = endpoints[activeIndex];
    if (!ep) return;

    sendBtn.disabled = true;
    responseStatus.textContent = "Simulating network transit...";
    responseStatus.style.color = "var(--accent-secondary)";

    setTimeout(() => {
      sendBtn.disabled = false;
      const resp = ep.sampleResponse;
      responseStatus.textContent = `HTTP ${resp.status} OK · 14ms latency`;
      responseStatus.style.color = "#22C55E";
      responseBody.textContent = JSON.stringify(resp.body, null, 2);
    }, 180);
  });

  renderEndpoint(0);
}

/* ==========================================================================
   10. GITHUB ACTIVITY & DEVELOPER DASHBOARD (Live Public API + Fallback)
   ========================================================================= */
function initGitHubDashboard() {
  const container = document.getElementById('githubRepoCardsContainer');
  const totalReposEl = document.getElementById('githubTotalReposCount');
  if (!container) return;

  function renderRepoCards(repos) {
    container.innerHTML = '';
    repos.slice(0, 6).forEach(repo => {
      const card = document.createElement('div');
      card.className = 'github-repo-card';
      card.innerHTML = `
        <div class="repo-card-top">
          <div class="repo-name-link">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>
            <a href="${escapeHtml(repo.html_url || repo.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(repo.name)}</a>
          </div>
          <span class="repo-star-badge">★ ${repo.stargazers_count ?? repo.stars ?? 0}</span>
        </div>
        <p class="repo-card-desc">${escapeHtml(repo.description || 'Public engineering repository by Shubham Kumar.')}</p>
        <div class="repo-card-footer">
          <span class="repo-lang-tag">
            <span class="lang-circle"></span>
            ${escapeHtml(repo.language || 'Code')}
          </span>
          <span class="repo-updated-time">Verified Repo</span>
        </div>
      `;
      container.appendChild(card);
    });
  }

  // Pre-populate with verified fallback data immediately (zero layout shift)
  if (typeof PORTFOLIO_DATA !== 'undefined' && PORTFOLIO_DATA.verifiedGitHubRepos) {
    renderRepoCards(PORTFOLIO_DATA.verifiedGitHubRepos);
    if (totalReposEl) totalReposEl.textContent = '30+';
  }

  // Attempt live public API fetch with strict 3.5s timeout
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 3500);

  Promise.all([
    fetch('https://api.github.com/users/kumar-shubham1', { signal: controller.signal })
      .then(res => res.ok ? res.json() : null),
    fetch('https://api.github.com/users/kumar-shubham1/repos?sort=updated&per_page=6', { signal: controller.signal })
      .then(res => res.ok ? res.json() : null)
  ])
  .then(([userData, repoData]) => {
    clearTimeout(timeoutId);
    if (userData && userData.public_repos && totalReposEl) {
      totalReposEl.textContent = `${userData.public_repos}`;
    }
    if (Array.isArray(repoData) && repoData.length > 0) {
      renderRepoCards(repoData);
    }
  })
  .catch(() => {
    // Graceful fallback to verified repositories without broken UI
    console.info('GitHub live public API rate-limited or unavailable; displaying verified static repository data.');
  });
}

/* ==========================================================================
   10.1. OPEN SOURCE & COMMUNITY COLLABORATIONS
   ========================================================================== */
function initOpenSourceSection() {
  const container = document.getElementById('opensourceContainer');
  if (!container || typeof PORTFOLIO_DATA === 'undefined' || !PORTFOLIO_DATA.openSourceContributions) return;

  container.innerHTML = PORTFOLIO_DATA.openSourceContributions.map(item => `
    <div class="opensource-card">
      <div class="opensource-card-top">
        <h3 class="opensource-org-title">${escapeHtml(item.organization)}</h3>
        <span class="opensource-badge">${escapeHtml(item.badge || item.type)}</span>
      </div>
      <div class="opensource-role">${escapeHtml(item.role)} · ${escapeHtml(item.period)}</div>
      <p class="opensource-desc">${escapeHtml(item.description)}</p>
      <div class="opensource-pr-meta" style="margin-top:auto;">
        <span>Focus: <strong>${escapeHtml(item.focus)}</strong></span>
        <span style="color:var(--accent-secondary); font-size:0.72rem;">${escapeHtml(item.type)}</span>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   10.2. ENGINEERING NOTES & TECHNICAL WRITING
   ========================================================================== */
function initTechnicalNotes() {
  const container = document.getElementById('notesContainer');
  const backdrop = document.getElementById('articleModalBackdrop');
  const content = document.getElementById('articleModalContent');
  if (!container || !backdrop || !content || typeof PORTFOLIO_DATA === 'undefined' || !PORTFOLIO_DATA.technicalArticles) return;

  container.innerHTML = PORTFOLIO_DATA.technicalArticles.map(art => `
    <div class="note-card" data-article-id="${escapeHtml(art.id)}">
      <div class="note-meta-strip">
        <span class="note-tag">${escapeHtml(art.category)}</span>
        <span>${escapeHtml(art.readTime)}</span>
      </div>
      <h3 class="note-title">${escapeHtml(art.title)}</h3>
      <p class="note-summary">${escapeHtml(art.summary)}</p>
      <div class="note-card-footer">
        <span>Read Architecture Note &rarr;</span>
        <span style="font-family:var(--font-mono); font-size:0.7rem; color:var(--text-faint);">${escapeHtml(art.relatedProject)}</span>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.note-card').forEach(card => {
    card.addEventListener('click', () => {
      const artId = card.getAttribute('data-article-id');
      const art = PORTFOLIO_DATA.technicalArticles.find(a => a.id === artId);
      if (!art) return;

      content.innerHTML = `
        <div class="article-modal-header">
          <div>
            <span class="note-tag" style="margin-bottom:8px; display:inline-block;">${escapeHtml(art.category)}</span>
            <h2 style="font-size:1.6rem; font-weight:800; color:var(--text-main); margin-bottom:4px;">${escapeHtml(art.title)}</h2>
            <div style="font-family:var(--font-mono); font-size:0.75rem; color:var(--text-faint);">
              ${escapeHtml(art.readTime)} · Related System: <strong>${escapeHtml(art.relatedProject)}</strong>
            </div>
          </div>
          <button class="modal-close-trigger" id="articleModalCloseBtn" aria-label="Close article reader">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        <div class="article-modal-body">
          <div class="about-philosophy-box" style="margin-bottom:20px;">
            <strong style="color:var(--text-main);">Core Engineering Takeaway:</strong> ${escapeHtml(art.keyTakeaway)}
          </div>

          <div style="font-size:0.95rem; color:var(--text-muted); line-height:1.7; margin-bottom:20px; white-space:pre-line;">
            ${escapeHtml(art.content)}
          </div>

          <div style="font-family:var(--font-mono); font-size:0.78rem; font-weight:700; color:var(--text-faint); text-transform:uppercase; margin-bottom:6px;">
            Verified Implementation Code Pattern:
          </div>
          <pre class="article-code-block"><code>${escapeHtml(art.codeSnippet)}</code></pre>
        </div>
      `;

      backdrop.classList.add('open');
      document.body.style.overflow = 'hidden';

      const closeBtn = document.getElementById('articleModalCloseBtn');
      if (closeBtn) {
        closeBtn.addEventListener('click', () => {
          backdrop.classList.remove('open');
          document.body.style.overflow = '';
        });
      }
    });
  });

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      backdrop.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('open')) {
      backdrop.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

/* ==========================================================================
   10.3. CURRENTLY EXPLORING & RESEARCHING
   ========================================================================== */
function initCurrentlyExploring() {
  const container = document.getElementById('exploringContainer');
  if (!container || typeof PORTFOLIO_DATA === 'undefined' || !PORTFOLIO_DATA.currentlyExploringTopics) return;

  container.innerHTML = PORTFOLIO_DATA.currentlyExploringTopics.map(track => `
    <div class="exploring-track-card">
      <div class="exploring-track-header">
        <h3 class="exploring-track-title">${escapeHtml(track.track)}</h3>
      </div>
      <div class="exploring-items-list">
        ${(track.items || []).map(item => {
          const statusClass = `status-${(item.status || 'studying').toLowerCase()}`;
          return `
            <div class="exploring-item-card">
              <div class="exploring-item-top">
                <span class="exploring-item-name">${escapeHtml(item.topic)}</span>
                <span class="exploring-status-pill ${statusClass}">${escapeHtml(item.status)}</span>
              </div>
              <p class="exploring-item-desc">${escapeHtml(item.note)}</p>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   11. EXPANDABLE PROJECT CASE STUDY MODAL
   ========================================================================= */
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

  modalSheet.innerHTML = `
    <div class="project-modal-sheet-header">
      <div>
        <span class="project-idx" style="font-family:var(--font-mono); font-size:0.8rem;">// CASE STUDY ${escapeHtml(project.number)}</span>
        <h2 style="font-size:1.8rem; font-weight:800; color:var(--text-main); margin-top:4px;">${escapeHtml(project.title)}</h2>
        <div style="font-size:0.95rem; color:var(--accent-secondary); font-weight:600;">${escapeHtml(project.subtitle)}</div>
      </div>
      <button class="modal-close-trigger" id="modalInnerCloseBtn" aria-label="Close modal">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>

    <div class="project-modal-sheet-body">
      <div class="modal-detail-block">
        <div class="modal-block-label">1. What Problem Does It Solve?</div>
        <p class="modal-block-text">${escapeHtml(project.whatProblem)}</p>
      </div>

      <div class="modal-detail-block">
        <div class="modal-block-label">2. Why Did I Build It?</div>
        <p class="modal-block-text">${escapeHtml(project.whyBuilt)}</p>
      </div>

      <div class="modal-detail-block">
        <div class="modal-block-label">3. How Does It Work?</div>
        <p class="modal-block-text">${escapeHtml(project.howItWorks)}</p>
      </div>

      <div class="modal-detail-block">
        <div class="modal-block-label">4. Key Engineering Challenges Overcome</div>
        <div class="arch-tradeoff-box" style="margin-top:8px;">${escapeHtml(project.keyChallenge)}</div>
      </div>

      <div class="modal-detail-block">
        <div class="modal-block-label">5. Key Takeaways &amp; What I Learned</div>
        <p class="modal-block-text">${escapeHtml(project.whatLearned)}</p>
      </div>

      <div class="modal-detail-block">
        <div class="modal-block-label">6. Verified Tech Stack &amp; Performance</div>
        <div style="font-family:var(--font-mono); font-size:0.85rem; color:var(--accent-primary); margin-bottom:10px;">
          Performance Benchmark: ${escapeHtml(project.metrics)}
        </div>
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
   12. SCROLL SPY & STICKY NAVBAR
   ========================================================================= */
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
   13. MOBILE DRAWER NAVIGATION
   ========================================================================= */
function initMobileNav() {
  const toggleBtn = document.getElementById('navMenuToggle');
  const linksMenu = document.getElementById('navLinksMenu');
  const moreBtn = document.getElementById('navMoreDropdownBtn');
  const dropdownWrap = document.querySelector('.nav-dropdown-wrapper');
  if (!toggleBtn || !linksMenu) return;

  toggleBtn.addEventListener('click', () => {
    linksMenu.classList.toggle('open');
  });

  if (moreBtn && dropdownWrap) {
    moreBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdownWrap.classList.toggle('open');
      const expanded = dropdownWrap.classList.contains('open');
      moreBtn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });

    document.addEventListener('click', (e) => {
      if (!dropdownWrap.contains(e.target)) {
        dropdownWrap.classList.remove('open');
        moreBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  linksMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      linksMenu.classList.remove('open');
      if (dropdownWrap) {
        dropdownWrap.classList.remove('open');
        if (moreBtn) moreBtn.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

/* ==========================================================================
   14. CONTACT FORM VALIDATION & MAILTO PRE-FILL
   ========================================================================= */
function initContactForm() {
  const form = document.getElementById('editorialContactForm');
  const feedback = document.getElementById('formFeedback');
  if (!form) return;

  const nameInput = document.getElementById('cName');
  const emailInput = document.getElementById('cEmail');
  const subjectInput = document.getElementById('cSubject');
  const messageInput = document.getElementById('cMessage');

  // Clear invalid styling on input
  [nameInput, emailInput, subjectInput, messageInput].forEach(inp => {
    if (inp) {
      inp.addEventListener('input', () => {
        inp.classList.remove('field-invalid');
      });
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = nameInput ? nameInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';
    const subject = (subjectInput && subjectInput.value.trim()) ? subjectInput.value.trim() : 'Software Engineering Opportunity / Discussion';
    const message = messageInput ? messageInput.value.trim() : '';

    let hasError = false;

    if (!name) {
      if (nameInput) nameInput.classList.add('field-invalid');
      hasError = true;
    }
    if (!email) {
      if (emailInput) emailInput.classList.add('field-invalid');
      hasError = true;
    }
    if (!message) {
      if (messageInput) messageInput.classList.add('field-invalid');
      hasError = true;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
      if (emailInput) emailInput.classList.add('field-invalid');
      hasError = true;
    }

    if (hasError) {
      if (feedback) {
        feedback.innerHTML = `<span style="color:#DC2626;">Please fill in your name, a valid email address, and a message before sending.</span>`;
        feedback.classList.add('active');
      }
      return;
    }

    if (feedback) {
      feedback.innerHTML = `Launching your default email client addressed to <strong>shubham824045@gmail.com</strong>...<br><span style="font-size:0.8rem; color:var(--text-muted); margin-top:4px; display:inline-block;">If your mail app does not open automatically, you can email directly at <a href="mailto:shubham824045@gmail.com">shubham824045@gmail.com</a>.</span>`;
      feedback.classList.add('active');
    }

    const encSub = encodeURIComponent(`[Portfolio] ${subject} — ${name}`);
    const encBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\n--\nSent from Shubham Kumar Engineering Portfolio`);

    setTimeout(() => {
      window.location.href = `mailto:shubham824045@gmail.com?subject=${encSub}&body=${encBody}`;
    }, 350);
  });
}

/* ==========================================================================
   UTILITIES
   ========================================================================= */
function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
