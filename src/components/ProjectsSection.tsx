"use client";

import React, { useState, useEffect } from "react";
import { PORTFOLIO_DATA, ProjectItem } from "@/data/portfolioData";
import {
  CheckSquare,
  Square,
  Clock,
  Sparkles,
  Layers,
  ExternalLink,
  RotateCcw,
  Filter,
  CheckCircle2,
  Terminal,
} from "lucide-react";

export function ProjectsSection() {
  const { upcomingProjects } = PORTFOLIO_DATA;

  // Track completed project IDs (with client-side localStorage persistence)
  const [completedIds, setCompletedIds] = useState<string[]>([]);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
  const [isClient, setIsClient] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    setIsClient(true);
    try {
      const saved = localStorage.getItem("fadhilah_portfolio_projects_status");
      if (saved) {
        setCompletedIds(JSON.parse(saved));
      } else {
        // Default initial items if any
        const initialCompleted = upcomingProjects
          .filter((p) => p.defaultCompleted)
          .map((p) => p.id);
        setCompletedIds(initialCompleted);
      }
    } catch {
      // Fallback
    }
  }, [upcomingProjects]);

  // Toggle project completed status
  const toggleProject = (id: string) => {
    setCompletedIds((prev) => {
      const next = prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id];
      try {
        localStorage.setItem(
          "fadhilah_portfolio_projects_status",
          JSON.stringify(next)
        );
      } catch {
        // Storage might be restricted
      }
      return next;
    });
  };

  const resetStatus = () => {
    setCompletedIds([]);
    try {
      localStorage.removeItem("fadhilah_portfolio_projects_status");
    } catch {
      // Ignore
    }
  };

  const total = upcomingProjects.length;
  const completedCount = isClient
    ? upcomingProjects.filter((p) => completedIds.includes(p.id)).length
    : 0;
  const progressPercent = total > 0 ? Math.round((completedCount / total) * 100) : 0;

  // Filtered items
  const filteredProjects = upcomingProjects.filter((p) => {
    const isDone = isClient && completedIds.includes(p.id);
    if (filter === "completed") return isDone;
    if (filter === "active") return !isDone;
    return true;
  });

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs text-[var(--accent)] font-semibold tracking-widest uppercase">
          // 05
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
          Upcoming Projects & Roadmap
        </h2>
        <div className="flex-1 h-px bg-[var(--card-border)] ml-2" />
      </div>

      <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-8 max-w-2xl leading-relaxed">
        Rencana inisiatif rekayasa perangkat lunak, sistem aplikasi, dan utilitas mandiri yang sedang dan akan dikerjakan. Anda dapat mencentang (checklist) proyek yang telah diselesaikan.
      </p>

      {/* Progress & Control Bar */}
      <div className="swiss-card p-4 sm:p-5 rounded-xl mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Progress metric */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between text-xs font-mono mb-2">
              <span className="text-[var(--text-secondary)] flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)]" />
                Status Penyelesaian Proyek:
              </span>
              <span className="font-semibold text-[var(--text-primary)]">
                {completedCount} dari {total} Selesai ({progressPercent}%)
              </span>
            </div>
            {/* Minimal Progress Bar */}
            <div className="w-full h-1.5 bg-[var(--badge-bg)] rounded-full overflow-hidden border border-[var(--card-border)]">
              <div
                className="h-full bg-[var(--accent)] transition-all duration-500 ease-out rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Action & Filter Pills */}
          <div className="flex items-center gap-2 shrink-0 flex-wrap">
            <div className="inline-flex rounded-lg border border-[var(--card-border)] p-0.5 bg-[var(--badge-bg)] text-xs font-mono">
              <button
                onClick={() => setFilter("all")}
                className={`px-2.5 py-1 rounded transition-colors ${
                  filter === "all"
                    ? "bg-[var(--card-bg)] text-[var(--text-primary)] shadow-xs font-medium"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                Semua ({total})
              </button>
              <button
                onClick={() => setFilter("active")}
                className={`px-2.5 py-1 rounded transition-colors ${
                  filter === "active"
                    ? "bg-[var(--card-bg)] text-[var(--text-primary)] shadow-xs font-medium"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                Upcoming ({total - completedCount})
              </button>
              <button
                onClick={() => setFilter("completed")}
                className={`px-2.5 py-1 rounded transition-colors ${
                  filter === "completed"
                    ? "bg-[var(--card-bg)] text-[var(--text-primary)] shadow-xs font-medium"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                Selesai ({completedCount})
              </button>
            </div>

            {completedCount > 0 && (
              <button
                onClick={resetStatus}
                title="Reset semua centang"
                className="p-1.5 rounded-lg border border-[var(--card-border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--badge-bg)] transition-colors text-xs flex items-center gap-1 font-mono"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Reset</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Projects Table (Desktop & Tablet) */}
      <div className="swiss-card rounded-2xl overflow-hidden border border-[var(--card-border)] shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[var(--card-border)] bg-[var(--badge-bg)]/60 text-[11px] font-mono uppercase tracking-wider text-[var(--text-secondary)]">
                <th className="py-3.5 pl-4 sm:pl-6 pr-3 w-12 text-center">Check</th>
                <th className="py-3.5 px-3 sm:px-4">Proyek & Spesifikasi</th>
                <th className="py-3.5 px-3 hidden md:table-cell">Kategori</th>
                <th className="py-3.5 px-3 hidden lg:table-cell">Target</th>
                <th className="py-3.5 px-3">Status</th>
                <th className="py-3.5 pr-4 sm:pr-6 pl-2 text-right">Tautan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--card-border)]">
              {filteredProjects.map((project, idx) => {
                const isCompleted = isClient && completedIds.includes(project.id);

                return (
                  <tr
                    key={project.id}
                    className={`group transition-colors ${
                      isCompleted
                        ? "bg-[var(--badge-bg)]/30 hover:bg-[var(--badge-bg)]/50"
                        : "hover:bg-[var(--badge-bg)]/40"
                    }`}
                  >
                    {/* Checkbox Column */}
                    <td className="py-4 pl-4 sm:pl-6 pr-3 text-center align-top">
                      <button
                        onClick={() => toggleProject(project.id)}
                        className="inline-flex items-center justify-center p-1 rounded hover:bg-[var(--badge-bg)] transition-transform active:scale-90 cursor-pointer focus:outline-hidden"
                        aria-label={`Tandai ${project.title} sebagai ${
                          isCompleted ? "belum selesai" : "selesai"
                        }`}
                        title="Klik untuk mengubah status penyelesaian"
                      >
                        {isCompleted ? (
                          <CheckSquare className="w-5 h-5 text-[var(--accent)]" />
                        ) : (
                          <Square className="w-5 h-5 text-[var(--text-muted)] group-hover:text-[var(--text-secondary)]" />
                        )}
                      </button>
                    </td>

                    {/* Title & Details Column */}
                    <td className="py-4 px-3 sm:px-4 align-top">
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <span
                            className={`font-semibold text-sm sm:text-base tracking-tight transition-colors ${
                              isCompleted
                                ? "line-through text-[var(--text-secondary)]"
                                : "text-[var(--text-primary)] group-hover:text-[var(--accent)]"
                            }`}
                          >
                            {project.title}
                          </span>
                          {project.priority === "High" && !isCompleted && (
                            <span className="px-1.5 py-0.5 rounded text-[10px] font-mono uppercase bg-amber-500/10 text-amber-500 border border-amber-500/20">
                              Priority
                            </span>
                          )}
                        </div>

                        <p
                          className={`text-xs leading-relaxed mb-2.5 max-w-xl ${
                            isCompleted
                              ? "text-[var(--text-muted)]"
                              : "text-[var(--text-secondary)]"
                          }`}
                        >
                          {project.description}
                        </p>

                        {/* Tech Stack Pills */}
                        <div className="flex flex-wrap gap-1.5">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="font-mono text-[10px] px-2 py-0.5 rounded border border-[var(--card-border)] bg-[var(--badge-bg)] text-[var(--text-secondary)]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </td>

                    {/* Category (MD+) */}
                    <td className="py-4 px-3 hidden md:table-cell align-top">
                      <span className="text-xs font-mono text-[var(--text-secondary)] block">
                        {project.category}
                      </span>
                    </td>

                    {/* Timeline (LG+) */}
                    <td className="py-4 px-3 hidden lg:table-cell align-top">
                      <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--text-muted)]">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{project.timeline}</span>
                      </div>
                    </td>

                    {/* Status Badge */}
                    <td className="py-4 px-3 align-top whitespace-nowrap">
                      {isCompleted ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                          <CheckCircle2 className="w-3 h-3" />
                          Selesai
                        </span>
                      ) : project.status === "In Development" ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-[var(--accent-soft)] text-[var(--accent)] border border-[var(--accent)]/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                          In Dev
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono text-[var(--text-secondary)] bg-[var(--badge-bg)] border border-[var(--card-border)]">
                          Planned
                        </span>
                      )}
                    </td>

                    {/* Link */}
                    <td className="py-4 pr-4 sm:pr-6 pl-2 text-right align-top">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-[var(--card-border)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
                          title="Lihat GitHub Repository"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </td>
                  </tr>
                );
              })}

              {filteredProjects.length === 0 && (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-xs font-mono text-[var(--text-muted)]">
                    Tidak ada proyek dalam kategori filter ini.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer info tip inside table container */}
        <div className="py-3 px-4 sm:px-6 bg-[var(--badge-bg)]/40 border-t border-[var(--card-border)] flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono text-[var(--text-muted)]">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>Checklist tersimpan otomatis di browser lokal Anda.</span>
          </div>
          <span>Total {total} Upcoming Projects</span>
        </div>
      </div>
    </section>
  );
}
