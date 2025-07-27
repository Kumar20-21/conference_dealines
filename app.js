/* RL & Quantitative Finance Deadlines – main script (final fix) */

(() => {
  const { DateTime } = luxon;

  /* ----------------------------- Data ----------------------------- */
  const data = {
    conferences: [
      {
        title: "AAMAS",
        full_name: "International Conference on Autonomous Agents and Multiagent Systems",
        year: 2026,
        id: "aamas26",
        link: "https://cyprusconferences.org/aamas2026/",
        deadline: "2025-10-08 23:59",
        abstract_deadline: "2025-10-01 23:59",
        timezone: "UTC-12",
        date: "May 25-29, 2026",
        city: "Cyprus",
        country: "Cyprus",
        tags: ["RL", "MARL", "Agents", "ML"],
        rank: "A+",
        hindex: 85,
        venue: "International Foundation for Autonomous Agents and Multiagent Systems",
      },
      {
        title: "WWW",
        full_name: "International World Wide Web Conference",
        year: 2026,
        id: "www26",
        link: "https://www.thewebconf.org/",
        deadline: "2025-10-14 23:59",
        timezone: "AoE",
        date: "April-May 2026",
        city: "TBD",
        country: "TBD",
        tags: ["Web", "Social", "Networks"],
        rank: "A+",
        hindex: 145,
        note: "Estimated dates based on historical patterns",
      },
      {
        title: "PAKDD",
        full_name: "Pacific-Asia Conference on Knowledge Discovery and Data Mining",
        year: 2026,
        id: "pakdd26",
        link: "https://pakdd.org/",
        deadline: "2025-12-14 23:59",
        timezone: "PST",
        date: "June 2026",
        city: "TBD",
        country: "TBD",
        tags: ["KDD", "DM", "ML"],
        rank: "A",
        hindex: 55,
        note: "Estimated dates based on historical patterns",
      },
      {
        title: "ICML",
        full_name: "International Conference on Machine Learning",
        year: 2026,
        id: "icml26",
        link: "https://icml.cc/",
        deadline: "2026-01-30 23:59",
        abstract_deadline: "2026-01-23 23:59",
        timezone: "AoE",
        date: "July 2026",
        city: "TBD",
        country: "TBD",
        tags: ["ML", "RL", "DL"],
        rank: "A+",
        hindex: 195,
        note: "Estimated dates based on historical patterns",
      },
      {
        title: "IJCAI",
        full_name: "International Joint Conference on Artificial Intelligence",
        year: 2026,
        id: "ijcai26",
        link: "https://ijcai.org/",
        deadline: "2026-01-23 23:59",
        abstract_deadline: "2026-01-16 23:59",
        timezone: "AoE",
        date: "August 2026",
        city: "TBD",
        country: "TBD",
        tags: ["AI", "RL", "ML"],
        rank: "A+",
        hindex: 165,
        note: "Estimated dates based on historical patterns",
      },
      {
        title: "COLT",
        full_name: "Annual Conference on Computational Learning Theory",
        year: 2026,
        id: "colt26",
        link: "https://learningtheory.org/",
        deadline: "2026-02-06 17:00",
        timezone: "US/Eastern",
        date: "June-July 2026",
        city: "TBD",
        country: "TBD",
        tags: ["LT", "RL", "Theory"],
        rank: "A+",
        hindex: 65,
        note: "Estimated dates based on historical patterns",
      },
      {
        title: "UAI",
        full_name: "Conference on Uncertainty in Artificial Intelligence",
        year: 2026,
        id: "uai26",
        link: "https://www.auai.org/",
        deadline: "2026-02-10 23:59",
        timezone: "AoE",
        date: "July 2026",
        city: "TBD",
        country: "TBD",
        tags: ["Uncertainty", "Probability", "RL"],
        rank: "A+",
        hindex: 75,
        note: "Estimated dates based on historical patterns",
      },
      {
        title: "SIGKDD",
        full_name: "ACM International Conference on Knowledge Discovery and Data Mining",
        year: 2026,
        id: "kdd26",
        link: "https://kdd.org/",
        deadline: "2026-02-10 23:59",
        abstract_deadline: "2026-02-03 23:59",
        timezone: "AoE",
        date: "August 2026",
        city: "TBD",
        country: "TBD",
        tags: ["DM", "ML", "RL"],
        rank: "A+",
        hindex: 125,
        note: "Estimated dates based on historical patterns",
      },
      {
        title: "ICAIF",
        full_name: "ACM International Conference on AI in Finance",
        year: 2026,
        id: "icaif26",
        link: "https://ai-finance.org/",
        deadline: "2026-06-15 23:59",
        timezone: "AoE",
        date: "November 2026",
        city: "TBD",
        country: "TBD",
        tags: ["Finance", "AI", "RL", "Quant"],
        rank: "None",
        hindex: 25,
        note: "Finance-specific AI conference - not CORE ranked but highly relevant",
      },
      {
        title: "NeurIPS",
        full_name: "Advances in Neural Information Processing Systems",
        year: 2026,
        id: "neurips26",
        link: "https://neurips.cc/",
        deadline: "2026-05-15 23:59",
        abstract_deadline: "2026-05-11 23:59",
        timezone: "AoE",
        date: "December 2026",
        city: "TBD",
        country: "TBD",
        tags: ["ML", "DL", "RL"],
        rank: "A+",
        hindex: 210,
        note: "Estimated dates based on historical patterns",
      },
    ],
    journals: [
      {
        title: "Journal of Finance",
        id: "jfinance",
        categories: ["Finance"],
        sjr: 22.836,
        h_index: 370,
        quartile: "Q1",
        issn: "0022-1082",
        publisher: "Wiley (for the American Finance Association)",
        submission_type: "continuous",
        link: "https://onlinelibrary.wiley.com/journal/15406261",
        tags: ["quantitative-finance", "asset-pricing", "finance"],
        notes: "Flagship finance journal; publishes empirical and theoretical work in asset pricing, market microstructure, and algorithmic trading relevant for quantitative finance.",
        rank: "Q1"
      },
      {
        title: "Journal of Machine Learning Research",
        id: "jmlr",
        categories: ["Artificial Intelligence"],
        sjr: 2.019,
        h_index: 280,
        quartile: "Q1",
        issn: "1532-4435",
        publisher: "Microtome Publishing",
        submission_type: "continuous",
        link: "https://www.jmlr.org/",
        tags: ["machine-learning", "RL", "open-access"],
        notes: "Open-access flagship ML journal; seminal papers by Sutton and collaborators on RL algorithms appear here.",
        rank: "Q1"
      },
      {
        title: "IEEE Transactions on Neural Networks and Learning Systems",
        id: "ieeetnnls",
        categories: ["Artificial Intelligence", "Computer Science Applications"],
        sjr: 3.686,
        h_index: 269,
        quartile: "Q1",
        issn: "2162-237X",
        publisher: "IEEE Computational Intelligence Society",
        submission_type: "continuous",
        link: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=5962385",
        tags: ["neural-networks", "deep-learning", "RL", "multi-agent"],
        notes: "High-impact venue for advanced RL, deep-learning, and multi-agent coordination algorithms.",
        rank: "Q1"
      },
      {
        title: "ACM Computing Surveys",
        id: "acmcsur",
        categories: ["Computer Science (misc.)"],
        sjr: 5.797,
        h_index: 232,
        quartile: "Q1",
        issn: "0360-0300",
        publisher: "Association for Computing Machinery",
        submission_type: "continuous",
        link: "https://dl.acm.org/journal/csur",
        page_limit: "35 pages",
        tags: ["surveys", "RL", "multi-agent", "finance-applications"],
        notes: "Authoritative survey journal; max 35 pages for long surveys.",
        rank: "Q1"
      },
      {
        title: "Expert Systems with Applications",
        id: "eswa",
        categories: ["Artificial Intelligence", "Computer Science Applications"],
        sjr: 1.854,
        h_index: 111,
        quartile: "Q1",
        issn: "0957-4174",
        publisher: "Elsevier",
        submission_type: "continuous",
        link: "https://www.journals.elsevier.com/expert-systems-with-applications",
        tags: ["AI-applications", "RL", "financial-systems", "trading"],
        notes: "Leading venue for AI applications including financial decision-making and trading systems.",
        rank: "Q1"
      },
    ],
  };

  /* ------------------------- DOM References ----------------------- */
  const searchInput = document.getElementById("searchInput");
  const typeFilter = document.getElementById("typeFilter");
  const rankFilter = document.getElementById("rankFilter");
  const areaFilter = document.getElementById("areaFilter");
  const timeFilter = document.getElementById("timeFilter");
  const sortSelect = document.getElementById("sortSelect");
  const toggleViewBtn = document.getElementById("toggleViewBtn");
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const cardsContainer = document.getElementById("cardsContainer");
  const statsContainer = document.getElementById("statsContainer");
  const htmlRoot = document.documentElement;

  /* -------------------------- Helpers ----------------------------- */
  const parseDeadline = (dateStr, tz) => {
    if (!dateStr) return null;
    const tzFixed = tz === "AoE" ? "UTC-12" : tz || "UTC";
    return DateTime.fromFormat(dateStr, "yyyy-MM-dd HH:mm", { zone: tzFixed });
  };

  const daysUntil = (dt) => {
    if (!dt || !dt.isValid) return Infinity;
    return Math.floor(dt.diffNow("days").days);
  };

  const urgencyStatus = (dt) => {
    if (!dt || !dt.isValid) return "success";
    const days = daysUntil(dt);
    if (days < 0) return "info";
    if (days <= 7) return "error";
    if (days <= 30) return "warning";
    return "success";
  };

  const rankWeight = (rank) => {
    switch (rank) {
      case "A+": return 1;
      case "A": return 2;
      case "Q1": return 2;
      default: return 3;
    }
  };

  const buildICS = (item) => {
    const dt = parseDeadline(item.deadline, item.timezone);
    if (!dt || !dt.isValid) return null;
    
    const uid = `${item.id}-deadline`;
    const lines = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//RL-QF-Deadlines//EN",
      "BEGIN:VEVENT",
      `UID:${uid}`,
      `DTSTAMP:${DateTime.utc().toFormat("yyyyMMdd'T'HHmmss'Z'")}`,
      `DTSTART:${dt.toUTC().toFormat("yyyyMMdd'T'HHmmss'Z'")}`,
      `SUMMARY:${item.title} Paper Deadline`,
      `DESCRIPTION:${item.full_name || item.title} submission deadline`,
      `URL:${item.link}`,
      "END:VEVENT",
      "END:VCALENDAR",
    ];
    return lines.join("\r\n");
  };

  /* --------------- Generate Area Filter Options ------------------- */
  const allTags = new Set();
  [...data.conferences, ...data.journals].forEach((d) => {
    (d.tags || []).forEach((t) => allTags.add(t));
  });
  [...allTags].sort().forEach((tag) => {
    const opt = document.createElement("option");
    opt.value = tag;
    opt.textContent = tag;
    areaFilter.appendChild(opt);
  });

  /* ------------------------ Render Stats -------------------------- */
  const renderStats = (items) => {
    statsContainer.innerHTML = "";
    
    const card = (label, value) => {
      const div = document.createElement("div");
      div.className = "stats-card";
      div.innerHTML = `<h4>${label}</h4><p>${value}</p>`;
      return div;
    };

    const total = items.length;
    const upcoming30 = items.filter((i) => daysUntil(i._deadlineDT) >= 0 && daysUntil(i._deadlineDT) <= 30).length;
    const upcoming90 = items.filter((i) => daysUntil(i._deadlineDT) >= 0 && daysUntil(i._deadlineDT) <= 90).length;

    statsContainer.appendChild(card("Total Venues", total));
    statsContainer.appendChild(card("Next 30 Days", upcoming30));
    statsContainer.appendChild(card("Next 90 Days", upcoming90));
  };

  /* ------------------------ Render Cards -------------------------- */
  const createCard = (item) => {
    const card = document.createElement("article");
    card.className = "card card-deadline";

    const body = document.createElement("div");
    body.className = "card__body";

    // Title & Rank
    const titleRow = document.createElement("div");
    titleRow.className = "card-title";
    const h3 = document.createElement("h3");
    h3.textContent = item.title;
    titleRow.appendChild(h3);
    
    if (item.rank) {
      const rankSpan = document.createElement("span");
      rankSpan.className = "card-rank";
      rankSpan.textContent = item.rank;
      titleRow.appendChild(rankSpan);
    }

    // Countdown
    const countdown = document.createElement("span");
    countdown.dataset.id = item.id;
    countdown.className = `countdown status--${urgencyStatus(item._deadlineDT)}`;

    // Info line
    const info = document.createElement("small");
    if (item._deadlineDT && item._deadlineDT.isValid) {
      info.textContent = `Deadline: ${item._deadlineDT.toLocaleString(DateTime.DATETIME_MED)}`;
    } else if (item.submission_type === "continuous") {
      info.textContent = "Continuous submissions";
    } else {
      info.textContent = "TBA";
    }

    // Tags
    const tagList = document.createElement("div");
    tagList.className = "tag-list";
    (item.tags || []).forEach((tag) => {
      const tagEl = document.createElement("span");
      tagEl.className = "tag";
      tagEl.textContent = tag;
      tagList.appendChild(tagEl);
    });

    // Details (hidden initially)
    const details = document.createElement("div");
    details.className = "details";
    
    let detailsHTML = `<p><strong>Full Name:</strong> ${item.full_name || item.title}</p>`;
    
    if (item.abstract_deadline) {
      const abstractDT = parseDeadline(item.abstract_deadline, item.timezone);
      detailsHTML += `<p><strong>Abstract Deadline:</strong> ${abstractDT.toLocaleString(DateTime.DATETIME_MED)}</p>`;
    }
    
    if (item.date) detailsHTML += `<p><strong>Event Date:</strong> ${item.date}</p>`;
    if (item.city) detailsHTML += `<p><strong>Location:</strong> ${item.city}${item.country ? ", " + item.country : ""}</p>`;
    
    detailsHTML += `<p><strong>Website:</strong> <a href="${item.link}" target="_blank">${item.link}</a></p>`;
    
    if (item.notes) detailsHTML += `<p><em>${item.notes}</em></p>`;
    
    // Add calendar link for conferences with deadlines
    if (item._ics) {
      detailsHTML += `<p><a class="add-calendar-link" href="${item._ics}" download="${item.id}.ics">📅 Add to calendar</a></p>`;
    }
    
    details.innerHTML = detailsHTML;

    // Assemble card
    body.appendChild(titleRow);
    body.appendChild(countdown);
    body.appendChild(info);
    body.appendChild(tagList);
    body.appendChild(details);
    card.appendChild(body);

    // Click to expand/collapse
    card.addEventListener("click", (e) => {
      // Don't collapse if clicking on links
      if (e.target.tagName === "A") {
        e.stopPropagation();
        return;
      }
      card.classList.toggle("expanded");
    });

    return card;
  };

  /* --------------------- Filtering & Sorting ---------------------- */
  const getAllItems = () => {
    const conferences = data.conferences.map((d) => ({ ...d, type: "conference" }));
    const journals = data.journals.map((d) => ({ ...d, type: "journal" }));
    return [...conferences, ...journals];
  };

  const applyFiltersAndSort = () => {
    let items = getAllItems();

    const searchTerm = searchInput.value.trim().toLowerCase();
    const typeVal = typeFilter.value;
    const rankVal = rankFilter.value;
    const areaVal = areaFilter.value;
    const timeVal = timeFilter.value;
    const sortVal = sortSelect.value;

    // Pre-processing: add computed properties
    items.forEach((item) => {
      item._deadlineDT = parseDeadline(item.deadline, item.timezone);
      
      // Create ICS calendar data for conferences with deadlines
      if (item.deadline) {
        const ics = buildICS(item);
        if (ics) {
          item._ics = `data:text/calendar;charset=utf8,${encodeURIComponent(ics)}`;
        }
      }
    });

    // Apply filters
    items = items.filter((item) => {
      // Search filter
      if (searchTerm) {
        const titleMatch = item.title.toLowerCase().includes(searchTerm);
        const fullNameMatch = (item.full_name || "").toLowerCase().includes(searchTerm);
        if (!titleMatch && !fullNameMatch) return false;
      }
      
      // Type filter
      if (typeVal !== "all" && item.type !== typeVal) return false;
      
      // Rank filter
      if (rankVal !== "all") {
        const itemRank = item.rank || "None";
        if (itemRank !== rankVal) return false;
      }
      
      // Area filter
      if (areaVal !== "all") {
        if (!(item.tags || []).includes(areaVal)) return false;
      }
      
      // Time filter
      if (timeVal !== "all") {
        if (timeVal === "2026" && item.year !== 2026) return false;
        const days = daysUntil(item._deadlineDT);
        if (timeVal === "30" && days > 30) return false;
        if (timeVal === "90" && days > 90) return false;
      }
      
      return true;
    });

    // Sorting
    items.sort((a, b) => {
      if (sortVal === "name") {
        return a.title.localeCompare(b.title);
      } else if (sortVal === "rank") {
        return rankWeight(a.rank) - rankWeight(b.rank);
      } else {
        // Sort by deadline (earliest first)
        const aDays = daysUntil(a._deadlineDT);
        const bDays = daysUntil(b._deadlineDT);
        return aDays - bDays;
      }
    });

    return items;
  };

  /* ------------------------- Render All --------------------------- */
  const render = () => {
    const items = applyFiltersAndSort();
    renderStats(items);
    
    cardsContainer.innerHTML = "";
    items.forEach((item) => {
      cardsContainer.appendChild(createCard(item));
    });
    
    updateCountdowns();
  };

  /* -------------------- Countdown Updates ------------------------- */
  const updateCountdowns = () => {
    const now = DateTime.local();
    document.querySelectorAll(".countdown").forEach((el) => {
      const id = el.dataset.id;
      const item = getAllItems().find((i) => i.id === id);
      if (!item) return;
      
      const dt = parseDeadline(item.deadline, item.timezone);
      if (!dt || !dt.isValid) {
        el.textContent = "Continuous";
        el.className = "countdown status--success";
        return;
      }
      
      const diff = dt.diff(now, ["days", "hours", "minutes"]).toObject();
      if (diff.days < 0) {
        el.textContent = "Closed";
        el.className = "countdown status--info";
        return;
      }
      
      const days = Math.floor(diff.days);
      const hours = Math.floor(diff.hours);
      const mins = Math.floor(diff.minutes);
      el.textContent = `${days}d ${hours}h ${mins}m`;
      
      // Update status based on urgency
      el.className = `countdown status--${urgencyStatus(dt)}`;
    });
  };

  /* ---------------- Event Listeners ---------------- */
  searchInput.addEventListener("input", render);
  typeFilter.addEventListener("change", render);
  rankFilter.addEventListener("change", render);
  areaFilter.addEventListener("change", render);
  timeFilter.addEventListener("change", render);
  sortSelect.addEventListener("change", render);

  toggleViewBtn.addEventListener("click", () => {
    const isGrid = cardsContainer.classList.contains("grid-view");
    cardsContainer.classList.toggle("grid-view", !isGrid);
    cardsContainer.classList.toggle("list-view", isGrid);
    toggleViewBtn.textContent = isGrid ? "Grid View" : "List View";
  });

  themeToggleBtn.addEventListener("click", () => {
    const isDark = htmlRoot.getAttribute("data-color-scheme") === "dark";
    htmlRoot.setAttribute("data-color-scheme", isDark ? "light" : "dark");
    themeToggleBtn.textContent = isDark ? "Dark Mode" : "Light Mode";
  });

  // Initialize
  cardsContainer.classList.add("grid-view");
  render();
  
  // Update countdowns every minute
  setInterval(updateCountdowns, 60000);
})();