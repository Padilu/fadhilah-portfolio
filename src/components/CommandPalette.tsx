"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "@/context/ThemeContext";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  Search,
  Terminal,
  Moon,
  Sun,
  Copy,
  ExternalLink,
  Check,
  X,
  Compass,
  Code2,
  FolderGit2,
  Mail,
  MessageSquare,
  Sparkles,
  CornerDownLeft,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/icons/SocialIcons";

interface ToastState {
  show: boolean;
  message: string;
}

export function CommandPalette() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"palette" | "terminal">("palette");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [toast, setToast] = useState<ToastState>({ show: false, message: "" });
  const [scrollProgress, setScrollProgress] = useState(0);

  // Terminal state
  const [terminalHistory, setTerminalHistory] = useState<Array<{ cmd?: string; output: string | React.ReactNode }>>([
    {
      output: (
        <div className="text-[var(--text-secondary)] space-y-1">
          <p className="text-[var(--accent)] font-semibold font-mono">
            Fadhilah Alkahfi — Interactive Shell v1.2 [Mac/ZSH]
          </p>
          <p className="text-xs">
            Ketik <span className="text-[var(--accent)] font-mono font-bold">help</span> untuk melihat daftar perintah, atau gunakan tab Command Palette di atas.
          </p>
        </div>
      ),
    },
  ]);
  const [terminalInput, setTerminalInput] = useState("");
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const [commandLog, setCommandLog] = useState<string[]>([]);
  const terminalBottomRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const terminalInputRef = useRef<HTMLInputElement>(null);

  // Trigger Toast Notification
  const showToast = (message: string) => {
    setToast({ show: true, message });
    setTimeout(() => {
      setToast({ show: false, message: "" });
    }, 2800);
  };

  // Scroll Progress Listener
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, Math.round((window.scrollY / totalHeight) * 100)));
        setScrollProgress(progress);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Global Keydown Listener for Cmd+K / Ctrl+K & Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        if (activeTab === "palette") {
          searchInputRef.current?.focus();
        } else {
          terminalInputRef.current?.focus();
        }
      }, 50);
    } else {
      setSearchQuery("");
      setSelectedIndex(0);
    }
  }, [isOpen, activeTab]);

  // Scroll terminal to bottom
  useEffect(() => {
    if (activeTab === "terminal") {
      terminalBottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [terminalHistory, activeTab]);

  // Action definitions
  const actions = [
    {
      id: "nav-about",
      category: "Navigation",
      title: "Tentang Saya (About)",
      description: "Profil, latar belakang, dan spesialisasi",
      icon: <Compass className="w-4 h-4 text-[var(--accent)]" />,
      perform: () => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      },
    },
    {
      id: "nav-education",
      category: "Navigation",
      title: "Pendidikan (Education)",
      description: "Universitas Gunadarma S1 Informatika (IPK 3.1)",
      icon: <Compass className="w-4 h-4 text-emerald-500" />,
      perform: () => {
        document.getElementById("education")?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      },
    },
    {
      id: "nav-experience",
      category: "Navigation",
      title: "Pengalaman (Experience)",
      description: "PKKMB FTI Gunadarma, RevoU, SoCo Giving, Gamagudabo",
      icon: <FolderGit2 className="w-4 h-4 text-amber-500" />,
      perform: () => {
        document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      },
    },
    {
      id: "nav-skills",
      category: "Navigation",
      title: "Keahlian & Bahasa (Skills)",
      description: "Web Development, Creative Media, Soft Skills, Bahasa",
      icon: <Code2 className="w-4 h-4 text-sky-500" />,
      perform: () => {
        document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      },
    },
    {
      id: "nav-projects",
      category: "Navigation",
      title: "Upcoming Projects & Roadmap",
      description: "AI Assistant (Ruby), Rumah Sakit, QA Tools, Checklist",
      icon: <Sparkles className="w-4 h-4 text-purple-500" />,
      perform: () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      },
    },
    {
      id: "nav-contact",
      category: "Navigation",
      title: "Kontak & Form Tanya Pengunjung",
      description: "Kirim pertanyaan, WhatsApp, email langsung",
      icon: <MessageSquare className="w-4 h-4 text-rose-500" />,
      perform: () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      },
    },
    {
      id: "act-theme",
      category: "Preferences",
      title: `Ganti Tema ke ${theme === "dark" ? "Light Mode" : "Dark Mode"}`,
      description: `Beralih ke mode ${theme === "dark" ? "terang (Soft Slate)" : "gelap (Charcoal)"}`,
      icon: theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-sky-500" />,
      perform: () => {
        toggleTheme();
        showToast(`Tema diubah ke ${theme === "dark" ? "Light Mode" : "Dark Mode"}`);
      },
    },
    {
      id: "act-copy-email",
      category: "Quick Actions",
      title: "Salin Alamat Email",
      description: PORTFOLIO_DATA.personal.socialLinks.email,
      icon: <Copy className="w-4 h-4 text-[var(--accent)]" />,
      perform: () => {
        navigator.clipboard.writeText(PORTFOLIO_DATA.personal.socialLinks.email);
        showToast("Email berhasil disalin ke clipboard!");
        setIsOpen(false);
      },
    },
    {
      id: "act-whatsapp",
      category: "Quick Actions",
      title: "Chat via WhatsApp",
      description: "+62 877-1547-2744 (Respon Cepat)",
      icon: <WhatsappIcon className="w-4 h-4 text-emerald-500" />,
      perform: () => {
        window.open(PORTFOLIO_DATA.personal.socialLinks.whatsapp, "_blank");
        setIsOpen(false);
      },
    },
    {
      id: "act-github",
      category: "Quick Actions",
      title: "Kunjungi GitHub Profil",
      description: "@Padilu (Repository & Proyek)",
      icon: <GithubIcon className="w-4 h-4 text-[var(--text-primary)]" />,
      perform: () => {
        window.open(PORTFOLIO_DATA.personal.socialLinks.github, "_blank");
        setIsOpen(false);
      },
    },
    {
      id: "act-terminal",
      category: "Developer Tools",
      title: "Buka Terminal Interaktif (CLI Shell)",
      description: "Jalankan perintah help, bio, skills, projects, dsb.",
      icon: <Terminal className="w-4 h-4 text-[var(--accent)]" />,
      perform: () => {
        setActiveTab("terminal");
      },
    },
  ];

  // Filter actions based on search
  const filteredActions = actions.filter((action) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      action.title.toLowerCase().includes(q) ||
      action.description.toLowerCase().includes(q) ||
      action.category.toLowerCase().includes(q)
    );
  });

  // Handle Palette Navigation with Arrow Keys
  const handlePaletteKeyDown = (e: React.KeyboardEvent) => {
    if (filteredActions.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredActions.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredActions.length) % filteredActions.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      const targetAction = filteredActions[selectedIndex];
      if (targetAction) {
        targetAction.perform();
      }
    }
  };

  // Terminal Command Execution
  const executeTerminalCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    const parts = cmd.split(" ");
    const primary = parts[0];

    // Add to history log
    if (cmd) {
      setCommandLog((prev) => [...prev, rawCmd]);
      setHistoryIndex(null);
    }

    let result: React.ReactNode = "";

    switch (primary) {
      case "":
        result = "";
        break;

      case "help":
        result = (
          <div className="space-y-1.5 text-xs font-mono">
            <p className="text-[var(--accent)] font-bold">Perintah yang Tersedia:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 pl-2">
              <div><span className="text-emerald-400 font-bold">bio</span> - Ringkasan profil & status</div>
              <div><span className="text-emerald-400 font-bold">skills</span> - Tampilkan daftar keahlian</div>
              <div><span className="text-emerald-400 font-bold">projects</span> - Roadmap upcoming projects</div>
              <div><span className="text-emerald-400 font-bold">contact</span> - Kanal kontak & media sosial</div>
              <div><span className="text-emerald-400 font-bold">theme</span> - Toggle mode gelap / terang</div>
              <div><span className="text-emerald-400 font-bold">clear</span> - Bersihkan riwayat layar</div>
              <div><span className="text-emerald-400 font-bold">date</span> - Tampilkan waktu sistem</div>
              <div><span className="text-emerald-400 font-bold">whoami</span> - Info pengguna aktif</div>
              <div><span className="text-emerald-400 font-bold">sudo [cmd]</span> - Coba hak akses root</div>
              <div><span className="text-emerald-400 font-bold">exit</span> - Tutup terminal</div>
            </div>
          </div>
        );
        break;

      case "bio":
      case "about":
        result = (
          <div className="space-y-1 text-xs font-mono pl-2 border-l-2 border-[var(--accent)]">
            <p className="font-bold text-[var(--text-primary)]">{PORTFOLIO_DATA.personal.name}</p>
            <p className="text-[var(--text-secondary)]">{PORTFOLIO_DATA.personal.role}</p>
            <p className="text-[var(--text-muted)]">Lokasi: {PORTFOLIO_DATA.personal.location}</p>
            <p className="text-[var(--text-secondary)] mt-1">{PORTFOLIO_DATA.personal.summary}</p>
          </div>
        );
        break;

      case "skills":
        result = (
          <div className="space-y-2 text-xs font-mono pl-2">
            <div>
              <span className="text-sky-400 font-bold">[Programming & Web]:</span>
              <p className="text-[var(--text-secondary)]">React, Next.js, TypeScript, JavaScript, Node.js, SQL, HTML5, CSS3, Git</p>
            </div>
            <div>
              <span className="text-amber-400 font-bold">[Creative & Multimedia]:</span>
              <p className="text-[var(--text-secondary)]">Videography, Photography, Premiere Pro, DaVinci Resolve</p>
            </div>
            <div>
              <span className="text-emerald-400 font-bold">[Languages]:</span>
              <p className="text-[var(--text-secondary)]">Indonesia (Native), English (Working), Japanese (Fundamental)</p>
            </div>
          </div>
        );
        break;

      case "projects":
        result = (
          <div className="space-y-1.5 text-xs font-mono pl-2">
            <p className="text-[var(--accent)] font-bold">Upcoming Projects Roadmap:</p>
            {PORTFOLIO_DATA.upcomingProjects.map((proj, idx) => (
              <div key={proj.id} className="flex items-start gap-2">
                <span className="text-[var(--text-muted)]">[{idx + 1}]</span>
                <div>
                  <span className="font-bold text-[var(--text-primary)]">{proj.title}</span>
                  <span className="text-[10px] text-[var(--accent)] ml-2">({proj.status})</span>
                  <p className="text-[11px] text-[var(--text-secondary)]">{proj.description}</p>
                </div>
              </div>
            ))}
          </div>
        );
        break;

      case "contact":
        result = (
          <div className="space-y-1 text-xs font-mono pl-2">
            <p>📧 Email: <a href={`mailto:${PORTFOLIO_DATA.personal.socialLinks.email}`} className="text-[var(--accent)] underline">{PORTFOLIO_DATA.personal.socialLinks.email}</a></p>
            <p>💬 WhatsApp: <a href={PORTFOLIO_DATA.personal.socialLinks.whatsapp} target="_blank" rel="noreferrer" className="text-emerald-400 underline">+62 877-1547-2744</a></p>
            <p>🐙 GitHub: <a href={PORTFOLIO_DATA.personal.socialLinks.github} target="_blank" rel="noreferrer" className="text-sky-400 underline">github.com/Padilu</a></p>
            <p>💼 LinkedIn: <a href={PORTFOLIO_DATA.personal.socialLinks.linkedin} target="_blank" rel="noreferrer" className="text-sky-400 underline">linkedin.com/in/fadhilah-alkahfi-413942397</a></p>
          </div>
        );
        break;

      case "theme":
        toggleTheme();
        result = <p className="text-amber-400 font-mono text-xs">Theme berhasil diubah ke {theme === "dark" ? "Light" : "Dark"} mode.</p>;
        showToast(`Theme switched to ${theme === "dark" ? "Light" : "Dark"} Mode`);
        break;

      case "date":
      case "time":
        result = <p className="text-xs font-mono text-[var(--text-secondary)]">{new Date().toLocaleString("id-ID", { dateStyle: "full", timeStyle: "medium" })}</p>;
        break;

      case "whoami":
        result = <p className="text-xs font-mono text-emerald-400">guest@fadhilah-portfolio (Visitor / Developer)</p>;
        break;

      case "sudo":
        result = (
          <p className="text-rose-400 font-mono text-xs">
            [ACCESS DENIED] User &apos;guest&apos; is not in the sudoers file. This incident will be reported to Fadhilah Alkahfi.
          </p>
        );
        break;

      case "clear":
        setTerminalHistory([]);
        setTerminalInput("");
        return;

      case "exit":
      case "quit":
        setIsOpen(false);
        setTerminalInput("");
        return;

      default:
        result = (
          <p className="text-rose-400 font-mono text-xs">
            zsh: command not found: {rawCmd}. Ketik <span className="text-[var(--accent)] font-bold">help</span> untuk daftar perintah.
          </p>
        );
    }

    setTerminalHistory((prev) => [...prev, { cmd: rawCmd, output: result }]);
    setTerminalInput("");
  };

  const handleTerminalKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      executeTerminalCommand(terminalInput);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandLog.length === 0) return;
      const nextIdx = historyIndex === null ? commandLog.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIdx);
      setTerminalInput(commandLog[nextIdx] || "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (commandLog.length === 0 || historyIndex === null) return;
      const nextIdx = historyIndex + 1;
      if (nextIdx >= commandLog.length) {
        setHistoryIndex(null);
        setTerminalInput("");
      } else {
        setHistoryIndex(nextIdx);
        setTerminalInput(commandLog[nextIdx] || "");
      }
    }
  };

  return (
    <>
      {/* 1. FLOATING QUICK-ACTION DOCK (BOTTOM-RIGHT) */}
      <aside
        aria-label="Developer quick actions and terminal dock"
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2"
      >
        {/* Reading progress pill indicator */}
        <div
          title={`Halaman telah dibaca ${scrollProgress}%`}
          className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-[var(--card-border)] bg-[var(--card-bg)]/90 backdrop-blur-md text-[11px] font-mono text-[var(--text-muted)] shadow-md"
        >
          <div className="w-2 h-2 rounded-full border border-[var(--accent)] flex items-center justify-center">
            <div
              className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"
              style={{ opacity: Math.max(0.2, scrollProgress / 100) }}
            />
          </div>
          <span>{scrollProgress}%</span>
        </div>

        {/* Command Palette Button */}
        <button
          onClick={() => {
            setActiveTab("palette");
            setIsOpen(true);
          }}
          className="group flex items-center gap-2 px-3.5 py-2 rounded-full border border-[var(--card-border)] bg-[var(--card-bg)]/90 hover:border-[var(--accent)] backdrop-blur-md shadow-lg text-xs font-mono text-[var(--text-primary)] transition-all cursor-pointer active:scale-95"
          title="Buka Command Palette (Cmd+K)"
        >
          <Search className="w-3.5 h-3.5 text-[var(--accent)] group-hover:rotate-12 transition-transform" />
          <span className="font-semibold hidden sm:inline">Commands</span>
          <kbd className="px-1.5 py-0.5 rounded text-[10px] bg-[var(--badge-bg)] border border-[var(--card-border)] text-[var(--text-secondary)] font-mono">
            ⌘K
          </kbd>
        </button>

        {/* Dedicated Terminal Launcher Icon */}
        <button
          onClick={() => {
            setActiveTab("terminal");
            setIsOpen(true);
          }}
          className="p-2.5 rounded-full border border-[var(--card-border)] bg-[var(--card-bg)]/90 hover:border-[var(--accent)] hover:text-[var(--accent)] backdrop-blur-md shadow-lg text-[var(--text-secondary)] transition-all cursor-pointer active:scale-95"
          title="Buka Developer Terminal Shell"
          aria-label="Open Developer Terminal"
        >
          <Terminal className="w-4 h-4" />
        </button>
      </aside>

      {/* 2. TOAST NOTIFICATION CONTAINER */}
      {toast.show && (
        <aside
          aria-label="Notification alerts"
          className="fixed bottom-18 left-1/2 -translate-x-1/2 z-50 animate-bounce"
        >
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-[var(--accent)] bg-[var(--card-bg)] text-[var(--text-primary)] shadow-2xl text-xs font-mono">
            <Check className="w-3.5 h-3.5 text-emerald-500" />
            <span>{toast.message}</span>
          </div>
        </aside>
      )}

      {/* 3. MODAL OVERLAY & COMMAND PALETTE / TERMINAL */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="command-palette-title"
          className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-2xl rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] shadow-2xl overflow-hidden flex flex-col max-h-[80vh] transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Tabs: Command Palette vs Terminal */}
            <div className="flex items-center justify-between border-b border-[var(--card-border)] px-4 py-2.5 bg-[var(--badge-bg)]/40">
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setActiveTab("palette")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                    activeTab === "palette"
                      ? "bg-[var(--card-bg)] text-[var(--accent)] shadow-xs border border-[var(--card-border)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  <Search className="w-3.5 h-3.5" />
                  <span id="command-palette-title">Command Palette</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("terminal")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                    activeTab === "terminal"
                      ? "bg-[var(--card-bg)] text-[var(--accent)] shadow-xs border border-[var(--card-border)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Interactive Shell</span>
                </button>
              </div>

              <div className="flex items-center gap-2">
                <kbd className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] font-mono text-[var(--text-muted)] border border-[var(--card-border)] bg-[var(--badge-bg)]">
                  ESC to close
                </kbd>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-md text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--badge-bg)] transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* TAB CONTENT: COMMAND PALETTE */}
            {activeTab === "palette" && (
              <div className="flex flex-col flex-1 min-h-0">
                {/* Search Input Bar */}
                <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[var(--card-border)] bg-[var(--card-bg)]">
                  <Search className="w-4 h-4 text-[var(--text-muted)] shrink-0" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setSelectedIndex(0);
                    }}
                    onKeyDown={handlePaletteKeyDown}
                    placeholder="Ketik untuk mencari (proyek, keahlian, aksi navigasi)..."
                    className="flex-1 bg-transparent text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none font-mono"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Actions List */}
                <div className="overflow-y-auto p-2 space-y-1 max-h-[380px] divide-y divide-[var(--card-border)]/40">
                  {filteredActions.length > 0 ? (
                    filteredActions.map((action, idx) => {
                      const isSelected = idx === selectedIndex;
                      return (
                        <div
                          key={action.id}
                          onClick={() => action.perform()}
                          onMouseEnter={() => setSelectedIndex(idx)}
                          className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all ${
                            isSelected
                              ? "bg-[var(--accent-soft)] text-[var(--accent)] border border-[var(--accent)]/30"
                              : "hover:bg-[var(--badge-bg)] text-[var(--text-primary)]"
                          }`}
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="w-8 h-8 rounded-lg border border-[var(--card-border)] bg-[var(--card-bg)] flex items-center justify-center shrink-0">
                              {action.icon}
                            </div>
                            <div className="min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="font-semibold text-xs sm:text-sm font-mono truncate">
                                  {action.title}
                                </span>
                                <span className="text-[10px] px-1.5 py-0.2 rounded border border-[var(--card-border)] bg-[var(--badge-bg)] text-[var(--text-muted)] font-mono">
                                  {action.category}
                                </span>
                              </div>
                              <p className="text-[11px] text-[var(--text-secondary)] truncate">
                                {action.description}
                              </p>
                            </div>
                          </div>

                          <div className="shrink-0 flex items-center gap-1 text-[11px] font-mono text-[var(--text-muted)]">
                            {isSelected && (
                              <span className="flex items-center gap-1 text-[var(--accent)] font-semibold">
                                <span>Pilih</span>
                                <CornerDownLeft className="w-3 h-3" />
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="py-12 text-center text-xs font-mono text-[var(--text-muted)]">
                      Tidak ada aksi atau proyek yang cocok dengan kata kunci &quot;{searchQuery}&quot;
                    </div>
                  )}
                </div>

                {/* Footer Tip */}
                <div className="p-3 border-t border-[var(--card-border)] bg-[var(--badge-bg)]/40 flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
                  <div className="flex items-center gap-3">
                    <span>↑↓ Navigasi</span>
                    <span>↵ Pilih</span>
                    <span>ESC Keluar</span>
                  </div>
                  <span>{filteredActions.length} hasil ditemukan</span>
                </div>
              </div>
            )}

            {/* TAB CONTENT: INTERACTIVE TERMINAL */}
            {activeTab === "terminal" && (
              <div className="flex flex-col flex-1 min-h-[380px] max-h-[460px] bg-[#0c1017] text-gray-200 font-mono text-xs">
                {/* Terminal Console Output */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                  {terminalHistory.map((item, idx) => (
                    <div key={idx} className="space-y-1">
                      {item.cmd !== undefined && (
                        <div className="flex items-center gap-2 text-sky-400">
                          <span className="text-emerald-400 font-bold">fadhilah@macbook:~$</span>
                          <span className="text-white">{item.cmd}</span>
                        </div>
                      )}
                      <div className="pl-0">{item.output}</div>
                    </div>
                  ))}
                  <div ref={terminalBottomRef} />
                </div>

                {/* Terminal Prompt Input Bar */}
                <div className="flex items-center gap-2 p-3 bg-[#080b10] border-t border-gray-800">
                  <span className="text-emerald-400 font-bold shrink-0">fadhilah@macbook:~$</span>
                  <input
                    ref={terminalInputRef}
                    type="text"
                    value={terminalInput}
                    onChange={(e) => setTerminalInput(e.target.value)}
                    onKeyDown={handleTerminalKeyDown}
                    placeholder="ketik help, bio, skills, projects, theme..."
                    className="flex-1 bg-transparent text-white placeholder-gray-600 focus:outline-none font-mono text-xs"
                    autoFocus
                  />
                  <button
                    onClick={() => executeTerminalCommand(terminalInput)}
                    className="px-2.5 py-1 rounded bg-sky-600 text-white hover:bg-sky-500 font-mono text-[10px] cursor-pointer"
                  >
                    Run ↵
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
