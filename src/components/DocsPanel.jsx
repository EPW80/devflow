import { COLORS } from "../constants/colors";

const DOCS = [
  { title: "Getting Started Guide", tag: "Setup", updated: "2 days ago", size: "4.2 KB" },
  { title: "API Reference", tag: "Backend", updated: "1 day ago", size: "12.8 KB" },
  { title: "Component Library", tag: "Frontend", updated: "3 days ago", size: "8.1 KB" },
  { title: "Database Schema", tag: "Backend", updated: "5 days ago", size: "3.4 KB" },
  { title: "Testing Strategy", tag: "QA", updated: "1 week ago", size: "5.6 KB" },
  { title: "Deployment Guide", tag: "DevOps", updated: "4 days ago", size: "6.9 KB" },
];

export default function DocsPanel() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
      {DOCS.map((doc, i) => (
        <div
          key={i}
          className="doc-card"
          style={{
            background: COLORS.surface,
            border: `1px solid ${COLORS.border}`,
            borderRadius: 8,
            padding: "14px 16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13,
                fontWeight: 500,
                color: COLORS.textPrimary,
                marginBottom: 6,
              }}
            >
              {doc.title}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 10,
                  color: COLORS.accent,
                  background: COLORS.accentGlow,
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: 4,
                  padding: "1px 6px",
                }}
              >
                {doc.tag}
              </span>
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 10,
                  color: COLORS.textMuted,
                }}
              >
                {doc.updated}
              </span>
            </div>
          </div>
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 11,
              color: COLORS.textMuted,
            }}
          >
            {doc.size}
          </span>
        </div>
      ))}
    </div>
  );
}
