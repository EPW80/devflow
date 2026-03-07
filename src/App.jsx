import { useState, useEffect } from "react";
import { COLORS } from "./constants/colors";
import { TECH_STACK } from "./constants/techStack";
import { TASKS } from "./constants/tasks";
import { injectStyles } from "./styles/globals";
import SkillBar from "./components/SkillBar";
import KanbanBoard from "./components/KanbanBoard";
import APIPanel from "./components/APIPanel";
import GitPanel from "./components/GitPanel";
import DocsPanel from "./components/DocsPanel";

const TABS = [
  { key: "board", label: "Kanban Board" },
  { key: "api", label: "API Monitor" },
  { key: "git", label: "Git Log" },
  { key: "docs", label: "Docs" },
];

const STATS = [
  { label: "Tasks", value: "10", sub: "3 in progress", color: COLORS.accent },
  { label: "API Uptime", value: "99.9%", sub: "All systems go", color: COLORS.green },
  { label: "Commits", value: "142", sub: "This sprint", color: COLORS.amber },
  { label: "Tests", value: "94%", sub: "Coverage", color: COLORS.red },
];

const SPRINTS = [
  { label: "Sprint 1", progress: 100, color: COLORS.green },
  { label: "Sprint 2", progress: 72, color: COLORS.accent },
  { label: "Sprint 3", progress: 30, color: COLORS.amber },
];

export default function App() {
  const [activeTab, setActiveTab] = useState("board");
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    injectStyles();
  }, []);

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const totalTasks =
    TASKS.todo.length + TASKS.inProgress.length + TASKS.done.length;

  function renderContent() {
    switch (activeTab) {
      case "board":
        return <KanbanBoard />;
      case "api":
        return <APIPanel />;
      case "git":
        return <GitPanel />;
      case "docs":
        return <DocsPanel />;
      default:
        return null;
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: COLORS.bg,
        fontFamily: "'DM Sans', sans-serif",
        color: COLORS.textPrimary,
      }}
    >
      {/* ── Header ─────────────────────────────────── */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: `${COLORS.bg}ee`,
          backdropFilter: "blur(12px)",
          borderBottom: `1px solid ${COLORS.border}`,
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          height: 56,
        }}
      >
        {/* Logo */}
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: 8,
            background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.green})`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'Space Mono', monospace",
            fontWeight: 700,
            fontSize: 16,
            color: COLORS.bg,
            marginRight: 16,
            flexShrink: 0,
          }}
        >
          D
        </div>

        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 600,
            fontSize: 16,
            color: COLORS.textPrimary,
            marginRight: 32,
          }}
        >
          DevFlow
        </span>

        {/* Nav Tabs */}
        <nav style={{ display: "flex", gap: 24, flex: 1 }}>
          {TABS.map((tab) => (
            <span
              key={tab.key}
              className={`nav-tab${activeTab === tab.key ? " active" : ""}`}
              onClick={() => setActiveTab(tab.key)}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13,
                fontWeight: 500,
                color:
                  activeTab === tab.key
                    ? COLORS.accent
                    : COLORS.textSecondary,
                userSelect: "none",
              }}
            >
              {tab.label}
            </span>
          ))}
        </nav>

        {/* Status bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: COLORS.green,
              animation: "pulse-dot 2s ease-in-out infinite",
            }}
          />
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 11,
              color: COLORS.textMuted,
            }}
          >
            LIVE
          </span>
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 11,
              color: COLORS.textSecondary,
            }}
          >
            {time.toLocaleTimeString()}
          </span>
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.green})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'Space Mono', monospace",
              fontSize: 11,
              fontWeight: 700,
              color: COLORS.bg,
            }}
          >
            E
          </div>
        </div>
      </header>

      {/* ── Stats Row ──────────────────────────────── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 16,
          padding: "20px 24px 0",
        }}
      >
        {STATS.map((stat, i) => (
          <div
            key={i}
            className="stat-card"
            style={{
              background: COLORS.surface,
              border: `1px solid ${COLORS.border}`,
              borderRadius: 8,
              padding: "16px 18px",
              animationDelay: `${i * 80}ms`,
            }}
          >
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 10,
                color: COLORS.textMuted,
                textTransform: "uppercase",
                letterSpacing: 1,
                marginBottom: 6,
              }}
            >
              {stat.label}
            </div>
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 24,
                fontWeight: 700,
                color: stat.color,
                marginBottom: 2,
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 11,
                color: COLORS.textSecondary,
              }}
            >
              {stat.sub}
            </div>
          </div>
        ))}
      </div>

      {/* ── Main Layout (sidebar + content) ────────── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "220px 1fr",
          gap: 20,
          padding: "20px 24px 24px",
        }}
      >
        {/* Sidebar */}
        <aside>
          <div
            style={{
              background: COLORS.surface,
              border: `1px solid ${COLORS.border}`,
              borderRadius: 8,
              padding: 16,
              marginBottom: 16,
            }}
          >
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 11,
                fontWeight: 700,
                color: COLORS.textSecondary,
                textTransform: "uppercase",
                letterSpacing: 1,
                marginBottom: 14,
              }}
            >
              Tech Stack
            </div>
            {TECH_STACK.map((skill, i) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                color={skill.color}
                delay={i * 100}
              />
            ))}
          </div>

          {/* Sprint Progress */}
          <div
            style={{
              background: COLORS.surface,
              border: `1px solid ${COLORS.border}`,
              borderRadius: 8,
              padding: 16,
            }}
          >
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 11,
                fontWeight: 700,
                color: COLORS.textSecondary,
                textTransform: "uppercase",
                letterSpacing: 1,
                marginBottom: 14,
              }}
            >
              Sprint Progress
            </div>
            {SPRINTS.map((sp) => (
              <div key={sp.label} style={{ marginBottom: 12 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 4,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 12,
                      color: COLORS.textSecondary,
                    }}
                  >
                    {sp.label}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: 11,
                      color: COLORS.textMuted,
                    }}
                  >
                    {sp.progress}%
                  </span>
                </div>
                <div
                  style={{
                    height: 4,
                    borderRadius: 2,
                    background: COLORS.border,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${sp.progress}%`,
                      borderRadius: 2,
                      background: sp.color,
                      transition: "width 0.8s ease",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Content Area */}
        <main>{renderContent()}</main>
      </div>
    </div>
  );
}
