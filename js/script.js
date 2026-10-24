const GUILD_ID = "1460035966931570886";
const WIDGET_JSON_URL = "https://discord.com/api/guilds/1460035966931570886/widget.json";
const BOT_CLIENT_ID = "1294035883309142026";

/**
 * Public commands for the Interactive Command Studio with simulated Discord previews.
 */
const WORKBENCH_COMMANDS = {
  music: [
    {
      name: "/music play",
      args: ["query", "source"],
      permission: "Public",
      previewTitle: "Now Playing",
      previewLines: [
        "<strong>Track:</strong> <span class='text-red-500 font-semibold'>Instant Crush</span>",
        "<strong>Artist:</strong> <span class='font-mono-code text-xs bg-black/40 px-1.5 py-0.5 rounded'>Daft Punk</span>",
        "<strong>Channel:</strong> <span class='channel-pill'>#Calling 96kbps</span> • <strong>Status:</strong> Playing immediately",
      ],
    },
    {
      name: "/music queue",
      args: [],
      permission: "Public",
      previewTitle: "Music Queue",
      previewLines: [
        "<strong>Now Playing:</strong> Harder, Better, Faster, Stronger <span class='font-mono-code text-xs text-white/50'>03:45</span>",
        "<strong>01.</strong> Instant Crush <span class='font-mono-code text-xs text-white/50'>05:37</span> • <span class='mention-pill'>@tomiitomii</span>",
        "<strong>02.</strong> Veridis Quo <span class='font-mono-code text-xs text-white/50'>05:44</span> • <span class='mention-pill'>@daymon</span>",
      ],
    },
    {
      name: "/music skip",
      args: [],
      permission: "Public",
      previewTitle: "Track Skipped",
      previewLines: [
        "<strong>Skipped:</strong> Harder, Better, Faster, Stronger",
        "<strong>Now Playing:</strong> <span class='text-red-500 font-semibold'>Instant Crush</span>",
      ],
    },
    {
      name: "/music nowplaying",
      args: [],
      permission: "Public",
      previewTitle: "Now Playing",
      previewLines: [
        "<strong>Track:</strong> Veridis Quo • <strong>Duration:</strong> <span class='font-mono-code text-xs'>05:44</span>",
        "<strong>Status:</strong> Playing • <strong>Volume:</strong> <span class='font-mono-code text-xs'>100%</span> • <strong>Loop:</strong> <span class='font-mono-code text-xs'>queue</span>",
      ],
    },
    {
      name: "/music loop",
      args: ["mode"],
      permission: "Public",
      previewTitle: "Loop Mode Updated",
      previewLines: [
        "<strong>Mode:</strong> <span class='font-mono-code text-xs text-red-500'>queue</span>",
        "<strong>Details:</strong> Whole queue loops continuously when finished.",
      ],
    },
    {
      name: "/music volume",
      args: ["level"],
      permission: "Public",
      previewTitle: "Audio Volume Updated",
      previewLines: [
        "<strong>New Volume:</strong> Volume has been set to <strong>120%</strong>.",
      ],
    },
    {
      name: "/music pause",
      args: [],
      permission: "Public",
      previewTitle: "Playback Paused",
      previewLines: [
        "Audio stream paused. Run <span class='font-mono-code text-xs text-red-500'>/music resume</span> to continue listening.",
      ],
    },
    {
      name: "/vocal-connect",
      args: [],
      permission: "Public",
      previewTitle: "Connected to Voice",
      previewLines: [
        "Joined <span class='channel-pill'>#Calling 96kbps</span> and ready for audio commands.",
      ],
    },
  ],
  moderation: [
    {
      name: "/clear",
      args: ["amount", "target"],
      permission: "Manage Messages",
      previewTitle: "Channel Messages Purged",
      previewLines: [
        "<strong>Deleted:</strong> <span class='font-mono-code text-xs text-red-500'>25 messages</span> in <span class='channel-pill'>#general</span>",
        "<strong>Moderator:</strong> <span class='mention-pill'>@tomiitomii</span>",
      ],
    },
    {
      name: "/ban",
      args: ["target", "reason", "delete_messages"],
      permission: "Ban Members",
      previewTitle: "Member Banned",
      previewLines: [
        "<strong>Target:</strong> SpamAccount#0001",
        "<strong>Reason:</strong> Repeated phishing links in public channels",
      ],
    },
    {
      name: "/unban",
      args: ["user_id", "reason"],
      permission: "Ban Members",
      previewTitle: "Member Unbanned",
      previewLines: [
        "<strong>Restored Access:</strong> Ban revoked after appeal review.",
      ],
    },
    {
      name: "/mute",
      args: ["target", "duration", "reason"],
      permission: "Moderate Members",
      previewTitle: "Member Timed Out",
      previewLines: [
        "<strong>Duration:</strong> <span class='font-mono-code text-xs text-red-500'>60 minutes</span>",
        "<strong>Reason:</strong> Cooling down heated chat discussion",
      ],
    },
    {
      name: "/unmute",
      args: ["target", "reason"],
      permission: "Moderate Members",
      previewTitle: "Timeout Lifted",
      previewLines: [
        "<strong>Status:</strong> Member can now send messages and join voice again.",
      ],
    },
    {
      name: "/warn",
      args: ["target", "reason"],
      permission: "Moderate Members",
      previewTitle: "Formal Warning Issued",
      previewLines: [
        "<strong>Notice:</strong> Official warning delivered to member and logged for staff.",
      ],
    },
  ],
  utility: [
    {
      name: "/help",
      args: [],
      permission: "Public",
      previewTitle: "Pdl.ai Help Center",
      previewLines: [
        "Welcome to the <strong>Pdl.ai</strong> documentation hub.",
        "Your all-in-one assistant for tech support, music, and server security.",
      ],
    },
    {
      name: "/settings",
      args: [],
      permission: "Administrator",
      previewTitle: "Server Configuration Overview",
      previewLines: [
        "<strong>AI Channels:</strong> <span class='channel-pill'>#general</span>, <span class='channel-pill'>#hardware-help</span>",
        "<strong>Anti-Scam Shield:</strong> Active • <strong>Sanction:</strong> Timeout Member",
      ],
    },
    {
      name: "/ping",
      args: [],
      permission: "Public",
      previewTitle: "Pong!",
      previewLines: [
        "<strong>Round-Trip Latency:</strong> <span class='font-mono-code text-xs text-emerald-400'>24 ms</span>",
        "<strong>Discord WebSocket:</strong> <span class='font-mono-code text-xs text-emerald-400'>19 ms</span>",
      ],
    },
    {
      name: "/invite",
      args: [],
      permission: "Public",
      previewTitle: "Invite Pdl.ai",
      previewLines: [
        "Use the direct links to add <strong>Pdl.ai</strong> to your server or join our support community.",
      ],
    },
    {
      name: "/feedback",
      args: ["message"],
      permission: "Public",
      previewTitle: "Feedback Delivered",
      previewLines: [
        "Thank you! Your suggestion has been forwarded to the Pdl.ai team.",
      ],
    },
    {
      name: "/say",
      args: ["message", "title", "channel"],
      permission: "Manage Messages",
      previewTitle: "Server Announcement",
      previewLines: [
        "<strong>Community Night:</strong> Join us tonight at 21:00 in <span class='channel-pill'>#Calling 96kbps</span>!",
      ],
    },
  ],
};

const BENTO_SONGS = [
  {
    title: "Harder, Better, Faster, Stronger",
    artist: "Daft Punk • Discovery",
    loop: "Loop: Queue",
  },
  {
    title: "Instant Crush",
    artist: "Daft Punk • Random Access Memories",
    loop: "Loop: Track",
  },
  {
    title: "Genesis",
    artist: "Justice • Cross",
    loop: "Loop: Queue",
  },
];

let activeCategory = "music";
let activeCommandIndex = 0;
let currentSongIndex = 0;
let heroAudioPaused = false;

/**
 * Sets OAuth2 and Widget URLs dynamically without literal ampersands.
 */
function configureDynamicLinks() {
  const oauthUrl = new URL("https://discord.com/oauth2/authorize");
  oauthUrl.searchParams.set("client_id", BOT_CLIENT_ID);
  oauthUrl.searchParams.set("scope", "bot applications.commands");
  oauthUrl.searchParams.set("permissions", "8");

  document.querySelectorAll(".bot-invite-link").forEach((link) => {
    link.setAttribute("href", oauthUrl.toString());
  });

  const widgetFrame = document.getElementById("discord-widget-frame");
  if (widgetFrame) {
    const widgetUrl = new URL("https://discord.com/widget");
    widgetUrl.searchParams.set("id", GUILD_ID);
    widgetUrl.searchParams.set("theme", "dark");
    widgetFrame.setAttribute("src", widgetUrl.toString());
  }
}

/**
 * Removes parentheses from external API labels to keep UI clean.
 */
function sanitizeLabel(text) {
  if (!text) {
    return "";
  }
  return String(text).replace(/\(/g, " ").replace(/\)/g, "").replace(/\s+/g, " ").trim();
}

/**
 * Fluid Header Sliding Indicator and Scroll Morphing.
 */
function initFluidHeader() {
  const header = document.getElementById("main-header");
  const navTrack = document.getElementById("nav-track");
  const indicator = document.getElementById("nav-indicator");
  const navItems = document.querySelectorAll("#nav-track .nav-item");

  function moveIndicatorTo(element) {
    if (!element) {
      return;
    }
    if (!indicator) {
      return;
    }
    const left = element.offsetLeft;
    const width = element.offsetWidth;
    indicator.style.width = `${width}px`;
    indicator.style.transform = `translateX(${left - 4}px)`;
    indicator.style.opacity = "1";
  }

  const initialActive = document.querySelector("#nav-track .nav-item.active");
  if (initialActive) {
    setTimeout(() => moveIndicatorTo(initialActive), 100);
  }

  navItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      moveIndicatorTo(item);
    });
    item.addEventListener("click", () => {
      navItems.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");
      moveIndicatorTo(item);
    });
  });

  if (navTrack) {
    navTrack.addEventListener("mouseleave", () => {
      const currentActive = document.querySelector("#nav-track .nav-item.active");
      if (currentActive) {
        moveIndicatorTo(currentActive);
      }
    });
  }

  window.addEventListener("scroll", () => {
    if (header) {
      if (window.scrollY > 30) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }

    const sections = ["hero", "features", "commands", "testimonials", "community"];
    let currentSection = "hero";
    for (let i = 0; i < sections.length; i = i + 1) {
      const secId = sections[i];
      const el = document.getElementById(secId);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 220) {
          currentSection = secId;
        }
      }
    }

    navItems.forEach((item) => {
      const href = item.getAttribute("href");
      if (href === `#${currentSection}`) {
        if (!item.classList.contains("active")) {
          navItems.forEach((n) => n.classList.remove("active"));
          item.classList.add("active");
          moveIndicatorTo(item);
        }
      }
    });
  });

  window.addEventListener("resize", () => {
    const currentActive = document.querySelector("#nav-track .nav-item.active");
    if (currentActive) {
      moveIndicatorTo(currentActive);
    }
  });
}

/**
 * Renders the interactive Command Studio chips and live preview stage.
 */
function renderWorkbench() {
  const chipsContainer = document.getElementById("wb-chips-container");
  const syntaxBar = document.getElementById("wb-syntax-bar");
  const permPill = document.getElementById("wb-permission-pill");
  const copyBtn = document.getElementById("wb-copy-btn");
  const previewStage = document.getElementById("wb-preview-stage");

  const list = WORKBENCH_COMMANDS[activeCategory] || WORKBENCH_COMMANDS.music;
  const selected = list[activeCommandIndex] || list[0];

  if (chipsContainer) {
    chipsContainer.innerHTML = list
      .map((cmd, idx) => {
        const isActive = idx === activeCommandIndex ? "active" : "";
        const argsCount = cmd.args.length;
        const argsLabel = argsCount > 0 ? `${argsCount} arg${argsCount > 1 ? "s" : ""}` : "Instant";
        return `
          <button
            type="button"
            data-cmd-index="${idx}"
            class="cmd-chip ${isActive} flex items-center justify-between gap-2"
          >
            <div class="font-mono-code font-semibold text-sm text-white flex items-center gap-1.5 truncate">
              <span class="text-red-500">/</span>
              <span class="truncate">${cmd.name.slice(1)}</span>
            </div>
            <span class="text-[10px] font-mono-code text-white/40 shrink-0">${argsLabel}</span>
          </button>
        `;
      })
      .join("");
  }

  if (selected) {
    if (syntaxBar) {
      const argsHTML = selected.args
        .map(
          (arg) =>
            `<span class="font-mono-code text-xs px-2 py-0.5 rounded bg-black/50 text-white/65 border border-white/10">${arg}</span>`,
        )
        .join("");

      syntaxBar.innerHTML = `
        <span class="font-mono-code font-bold text-sm text-red-500 bg-red-500/15 border border-red-500/30 px-3 py-1 rounded-lg">
          ${selected.name}
        </span>
        ${argsHTML}
      `;
    }

    if (permPill) {
      permPill.textContent = selected.permission;
    }

    if (copyBtn) {
      copyBtn.textContent = `Copy ${selected.name}`;
      copyBtn.setAttribute("data-copy-value", selected.name);
    }

    if (previewStage) {
      const linesHTML = selected.previewLines
        .map((line) => `<div class="text-xs sm:text-sm text-white/80">${line}</div>`)
        .join("");

      previewStage.innerHTML = `
        <div class="animate-view space-y-4">
          <div class="flex items-center gap-2 text-xs text-white/45">
            <img src="./images/profils/tomiitomii301.webp" alt="Member" class="w-5 h-5 rounded-full object-cover" />
            <span class="text-white/80 font-semibold">tomiitomii</span>
            <span>used</span>
            <span class="font-mono-code text-red-500 font-semibold">${selected.name}</span>
          </div>

          <div class="flex items-start gap-3.5">
            <img src="./images/icones/dancing-pdl.gif" alt="Pdl.ai" class="w-10 h-10 rounded-full object-cover shrink-0" />
            <div class="flex-1 min-w-0 space-y-2">
              <div class="flex items-center gap-2">
                <span class="font-bold text-sm text-white">Pdl.ai</span>
                <span class="app-tag">APP</span>
                <span class="text-[11px] text-white/35">Just now</span>
              </div>

              <div class="discord-preview-container space-y-2">
                <div class="font-extrabold text-white text-sm sm:text-base">${selected.previewTitle}</div>
                <div class="space-y-1.5 border-l-2 border-white/20 pl-3">
                  ${linesHTML}
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }
  }
}

/**
 * Fetches live guild data from Discord Widget API for server 1460035966931570886.
 */
async function syncDiscordWidget() {
  const fallback = {
    name: "Pdl.ai Support",
    instant_invite: "https://discord.com/invite/nrxdjXcb",
    presence_count: 4,
    channels: [
      { name: "Calling 64Kbps", position: 0 },
      { name: "Calling 96kbps", position: 1 },
      { name: "AFK", position: 3 },
    ],
    members: [
      { username: "Pdl.ai", avatar_url: "./images/icones/dancing-pdl.gif" },
      { username: "Ulysse", avatar_url: "./images/profils/tomiitomii301.webp" },
      { username: "Emoji.gg", avatar_url: "./images/profils/nexusprime85.webp" },
      { username: "Mythique", avatar_url: "./images/profils/daymon.png" },
    ],
  };

  let data = fallback;
  try {
    const res = await fetch(WIDGET_JSON_URL, { cache: "no-store" });
    if (res.ok) {
      data = await res.json();
    }
  } catch {
    data = fallback;
  }

  const cleanServerName = sanitizeLabel(data.name || "Pdl.ai Support");
  const count = typeof data.presence_count === "number" ? data.presence_count : 4;

  const nameEl = document.getElementById("widget-server-name");
  if (nameEl) {
    nameEl.textContent = cleanServerName;
  }

  const badgeEl = document.getElementById("widget-online-badge");
  if (badgeEl) {
    badgeEl.textContent = `${count} Online in ${cleanServerName}`;
  }

  const heroStatusEl = document.getElementById("hero-live-status");
  if (heroStatusEl) {
    heroStatusEl.textContent = `Online now in ${cleanServerName} with ${count} active members`;
  }

  if (data.instant_invite) {
    const inviteBtn = document.getElementById("widget-invite-btn");
    const footerLink = document.getElementById("footer-support-link");
    if (inviteBtn) {
      inviteBtn.setAttribute("href", data.instant_invite);
    }
    if (footerLink) {
      footerLink.setAttribute("href", data.instant_invite);
    }
  }

  const channelsEl = document.getElementById("widget-channels");
  if (channelsEl) {
    const channels = Array.isArray(data.channels) ? data.channels.slice() : fallback.channels;
    channels.sort((a, b) => (a.position || 0) - (b.position || 0));
    channelsEl.innerHTML = channels
      .map((ch) => {
        return `
          <div class="flex items-center justify-between px-3 py-2 rounded-xl bg-white/[0.03] border border-white/5 text-xs">
            <div class="flex items-center gap-2 text-white/85 font-medium">
              <svg class="w-3.5 h-3.5 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3a9 9 0 0 0-9 9v7c0 1.1.9 2 2 2h4v-8H5v-1a7 7 0 0 1 14 0v1h-4v8h4c1.1 0 2-.9 2-2v-7a9 9 0 0 0-9-9Z"/>
              </svg>
              <span>${sanitizeLabel(ch.name)}</span>
            </div>
            <span class="text-[10px] font-mono-code text-[#23a55a]">Active</span>
          </div>
        `;
      })
      .join("");
  }

  const membersEl = document.getElementById("widget-members");
  if (membersEl) {
    const members = Array.isArray(data.members) ? data.members : fallback.members;
    membersEl.innerHTML = members
      .slice(0, 8)
      .map((m) => {
        const cleanUser = sanitizeLabel(m.username);
        return `
          <div class="flex items-center gap-2 pr-3 pl-1.5 py-1 rounded-full bg-white/[0.04] border border-white/10">
            <img src="${m.avatar_url}" alt="${cleanUser}" class="w-6 h-6 rounded-full object-cover" />
            <span class="text-xs font-medium text-white/85">${cleanUser}</span>
          </div>
        `;
      })
      .join("");
  }
}

/**
 * Initializes spotlight hover effect and GSAP entrance motion.
 */
function initVisualEffects() {
  const cards = document.querySelectorAll(".spotlight-card");
  cards.forEach((card) => {
    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  });

  if (typeof gsap === "undefined") {
    return;
  }

  if (typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  gsap.from("#hero-copy > *", {
    opacity: 0,
    y: 30,
    duration: 0.85,
    stagger: 0.12,
    ease: "power3.out",
  });

  gsap.from("#hero-visual", {
    opacity: 0,
    scale: 0.94,
    duration: 1,
    delay: 0.2,
    ease: "power3.out",
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    if (loader) {
      loader.style.opacity = "0";
      setTimeout(() => loader.remove(), 400);
    }
  }, 400);

  configureDynamicLinks();
  initFluidHeader();
  renderWorkbench();
  syncDiscordWidget();
  initVisualEffects();

  // Hero equalizer play/pause button
  const heroAudioBtn = document.getElementById("hero-audio-toggle");
  const heroAudioIcon = document.getElementById("hero-audio-icon");
  if (heroAudioBtn) {
    heroAudioBtn.addEventListener("click", () => {
      heroAudioPaused = !heroAudioPaused;
      document.querySelectorAll("#hero-eq .eq-bar").forEach((bar) => {
        if (heroAudioPaused) {
          bar.classList.add("paused");
        } else {
          bar.classList.remove("paused");
        }
      });
      if (heroAudioIcon) {
        if (heroAudioPaused) {
          heroAudioIcon.innerHTML = `<path d="M8 5v14l11-7z" />`;
        } else {
          heroAudioIcon.innerHTML = `<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />`;
        }
      }
    });
  }

  // Bento mini player track skipper
  const nextTrackBtn = document.getElementById("bento-next-track");
  if (nextTrackBtn) {
    nextTrackBtn.addEventListener("click", () => {
      currentSongIndex = (currentSongIndex + 1) % BENTO_SONGS.length;
      const track = BENTO_SONGS[currentSongIndex];
      const titleEl = document.getElementById("bento-song-title");
      const artistEl = document.getElementById("bento-song-artist");
      const loopEl = document.getElementById("bento-loop-badge");
      if (track) {
        if (titleEl) {
          titleEl.textContent = track.title;
        }
        if (artistEl) {
          artistEl.textContent = track.artist;
        }
        if (loopEl) {
          loopEl.textContent = track.loop;
        }
      }
    });
  }

  // Workbench category switching
  document.querySelectorAll("[data-wb-cat]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const cat = btn.getAttribute("data-wb-cat");
      if (cat) {
        activeCategory = cat;
        activeCommandIndex = 0;
        document.querySelectorAll("[data-wb-cat]").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        renderWorkbench();
      }
    });
  });

  // Workbench chip selection
  const chipsContainer = document.getElementById("wb-chips-container");
  if (chipsContainer) {
    chipsContainer.addEventListener("click", (event) => {
      const chip = event.target.closest("[data-cmd-index]");
      if (chip) {
        const idx = Number(chip.getAttribute("data-cmd-index"));
        if (!Number.isNaN(idx)) {
          activeCommandIndex = idx;
          renderWorkbench();
        }
      }
    });
  }

  // Workbench copy command button
  const copyBtn = document.getElementById("wb-copy-btn");
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      const val = copyBtn.getAttribute("data-copy-value") || "/music play";
      if (navigator.clipboard) {
        navigator.clipboard.writeText(val).catch(() => null);
      }
      copyBtn.textContent = "Copied!";
      setTimeout(() => {
        copyBtn.textContent = `Copy ${val}`;
      }, 1400);
    });
  }

  // Mobile navigation
  const mobileBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobileMenu");
  const menuIcon = document.querySelector(".menu-icon");

  if (mobileBtn) {
    if (mobileMenu) {
      mobileBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        if (mobileMenu.classList.contains("hidden")) {
          mobileMenu.classList.remove("hidden");
          if (menuIcon) {
            menuIcon.setAttribute("d", "M6 18L18 6M6 6l12 12");
          }
        } else {
          mobileMenu.classList.add("hidden");
          if (menuIcon) {
            menuIcon.setAttribute("d", "M4 6h16M4 12h16M4 18h16");
          }
        }
      });
    }
  }

  const scrollTopBtn = document.getElementById("scroll-top-btn");
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
