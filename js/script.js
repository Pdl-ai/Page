const GUILD_ID = "1460035966931570886";
const WIDGET_JSON_URL = "https://discord.com/api/guilds/1460035966931570886/widget.json";
const BOT_CLIENT_ID = "1294035883309142026";

const CATEGORY_ICONS = {
  music: `<span class="w-7 h-7 rounded-lg bg-purple-500 text-white flex items-center justify-center shrink-0"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg></span>`,
  moderation: `<span class="w-7 h-7 rounded-lg bg-blue-500 text-white flex items-center justify-center shrink-0"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg></span>`,
  utility: `<span class="w-7 h-7 rounded-lg bg-amber-500 text-white flex items-center justify-center shrink-0"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg></span>`,
};

/**
 * Public commands where Pdl.ai explains what each command does in a realistic Discord chat message.
 */
const WORKBENCH_COMMANDS = {
  music: [
    {
      name: "/music play",
      args: ["query", "source"],
      botReply:
        "This command plays a song or a full playlist in your voice channel. Pass a track name or link in <span class='discord-inline-code'>query</span> and optionally pick YouTube or SoundCloud in <span class='discord-inline-code'>source</span>.",
    },
    {
      name: "/music queue",
      args: [],
      botReply:
        "Displays the track currently playing along with the full list of upcoming songs waiting in your server queue.",
    },
    {
      name: "/music skip",
      args: [],
      botReply:
        "Skips the song that is currently playing and immediately starts the next track in the queue.",
    },
    {
      name: "/music nowplaying",
      args: [],
      botReply:
        "Shows details about the active track including its title, artist, duration, current volume, and loop mode.",
    },
    {
      name: "/music loop",
      args: ["mode"],
      botReply:
        "Changes the repeat behavior for your voice session. Set <span class='discord-inline-code'>mode</span> to repeat the current track, loop the entire queue, or turn looping off.",
    },
    {
      name: "/music volume",
      args: ["level"],
      botReply:
        "Adjusts the playback volume of the bot in your voice channel. Choose a <span class='discord-inline-code'>level</span> between 0 and 150 percent.",
    },
    {
      name: "/music pause",
      args: [],
      botReply:
        "Pauses the current track right where it is so you can resume it later with <span class='discord-inline-code'>/music resume</span>.",
    },
    {
      name: "/vocal-connect",
      args: [],
      botReply:
        "Summons me directly into the voice channel you are currently connected to so I am ready for audio playback.",
    },
  ],
  moderation: [
    {
      name: "/clear",
      args: ["amount", "target"],
      botReply:
        "Deletes up to 100 recent messages at once in the current channel. You can set <span class='discord-inline-code'>amount</span> and optionally filter by a specific <span class='discord-inline-code'>target</span> member.",
    },
    {
      name: "/ban",
      args: ["target", "reason", "delete_messages"],
      botReply:
        "Permanently bans a member from the server. You can provide a <span class='discord-inline-code'>reason</span> for the audit log and choose whether to purge their recent messages.",
    },
    {
      name: "/unban",
      args: ["user_id", "reason"],
      botReply:
        "Revokes an active server ban using the user Discord ID in <span class='discord-inline-code'>user_id</span> so they can rejoin the server.",
    },
    {
      name: "/mute",
      args: ["target", "duration", "reason"],
      botReply:
        "Applies a temporary timeout to a member for the specified <span class='discord-inline-code'>duration</span> so they cannot send messages or join voice.",
    },
    {
      name: "/unmute",
      args: ["target", "reason"],
      botReply:
        "Immediately removes an active timeout from a <span class='discord-inline-code'>target</span> member and restores their chat permissions.",
    },
    {
      name: "/warn",
      args: ["target", "reason"],
      botReply:
        "Sends an official warning notice to a <span class='discord-inline-code'>target</span> member and records the <span class='discord-inline-code'>reason</span> for server moderators.",
    },
  ],
  utility: [
    {
      name: "/help",
      args: [],
      botReply:
        "Opens the interactive help menu inside Discord where you can browse all commands, AI conversation tips, music controls, and security features.",
    },
    {
      name: "/settings",
      args: [],
      botReply:
        "Opens the server configuration panel for administrators to choose authorized AI chat channels, Anti-Scam monitored channels, alert logs, and automatic sanctions.",
    },
    {
      name: "/ping",
      args: [],
      botReply:
        "Checks my current response speed by measuring the round-trip message latency and the live Discord WebSocket heartbeat.",
    },
    {
      name: "/invite",
      args: [],
      botReply:
        "Shares direct buttons to invite me to another Discord server or join the official Pdl.ai support server.",
    },
    {
      name: "/feedback",
      args: ["message"],
      botReply:
        "Sends your bug report or feature idea written in <span class='discord-inline-code'>message</span> directly to the development team.",
    },
    {
      name: "/say",
      args: ["message", "title", "channel"],
      botReply:
        "Publishes a clean formatted announcement with your <span class='discord-inline-code'>title</span> and <span class='discord-inline-code'>message</span> in the selected <span class='discord-inline-code'>channel</span>.",
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
 * Renders the Discord Slash Command selector and realistic chat message explanation.
 */
function renderWorkbench() {
  const chipsContainer = document.getElementById("wb-chips-container");
  const syntaxBar = document.getElementById("wb-syntax-bar");
  const copyBtn = document.getElementById("wb-copy-btn");
  const previewStage = document.getElementById("wb-preview-stage");

  const list = WORKBENCH_COMMANDS[activeCategory] || WORKBENCH_COMMANDS.music;
  const selected = list[activeCommandIndex] || list[0];
  const categoryIcon = CATEGORY_ICONS[activeCategory] || CATEGORY_ICONS.music;

  if (chipsContainer) {
    chipsContainer.innerHTML = list
      .map((cmd, idx) => {
        const isActive = idx === activeCommandIndex ? "active" : "";
        return `
          <button
            type="button"
            data-cmd-index="${idx}"
            class="slash-item ${isActive} flex items-center gap-3"
          >
            ${categoryIcon}
            <span class="font-mono-code font-semibold text-sm truncate">${cmd.name}</span>
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
            `<span class="font-mono-code text-xs px-2 py-0.5 rounded bg-[#1e1f22] text-white">${arg}:</span>`,
        )
        .join("");

      syntaxBar.innerHTML = `
        <span class="font-mono-code font-bold text-sm text-white bg-[#5865f2] px-2.5 py-0.5 rounded">
          ${selected.name}
        </span>
        ${argsHTML}
      `;
    }

    if (copyBtn) {
      copyBtn.textContent = `Copy ${selected.name}`;
      copyBtn.setAttribute("data-copy-value", selected.name);
    }

    if (previewStage) {
      previewStage.innerHTML = `
        <div class="animate-view space-y-1.5">
          <!-- Authentic Discord Slash Command Reply Spine -->
          <div class="discord-reply-spine flex items-center gap-2 text-xs text-[#b5bac1]">
            <img src="./images/profils/tomiitomii301.webp" alt="Member" class="w-4 h-4 rounded-full object-cover" />
            <span class="font-semibold text-white">tomiitomii</span>
            <span>used</span>
            <span class="font-mono-code font-semibold text-[#5865f2] bg-[#5865f2]/15 px-1.5 py-0.5 rounded">${selected.name}</span>
          </div>

          <!-- Realistic Bot Chat Message -->
          <div class="flex items-start gap-4 pt-1">
            <img src="./images/icones/dancing-pdl.gif" alt="Pdl.ai" class="w-10 h-10 rounded-full object-cover shrink-0 mt-0.5" />
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-2">
                <span class="font-bold text-[15px] text-white hover:underline cursor-pointer">Pdl.ai</span>
                <span class="app-tag">
                  <svg class="w-2.5 h-2.5" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M7.4 11.17 4 8.62l1-1.17 2.26 1.7 4.14-4.15 1.14 1.14-5.14 5.03Z" />
                  </svg>
                  APP
                </span>
                <span class="text-xs text-[#949ba4]">Today at 14:32</span>
              </div>
              <p class="text-[15px] text-[#dbdee1] leading-relaxed mt-1">
                ${selected.botReply}
              </p>
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
              <svg class="w-4 h-4 text-emerald-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3a9 9 0 0 0-9 9v7c0 1.1.9 2 2 2h4v-8H5v-1a7 7 0 0 1 14 0v1h-4v8h4c1.1 0 2-.9 2-2v-7a9 9 0 0 0-9-9Z"/>
              </svg>
              <span>${sanitizeLabel(ch.name)}</span>
            </div>
            <span class="text-[10px] font-mono-code text-emerald-500">Active</span>
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
 * Initializes GSAP entrance motion.
 */
function initVisualEffects() {
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
