import { COLORS } from "../constants/colors";
import { COMMITS } from "../constants/commits";

export default function GitPanel() {
  return (
    <div
      style={{
        background: COLORS.surface,
        border: `1px solid ${COLORS.border}`,
        borderRadius: 8,
        padding: 16,
      }}
    >
      <span
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 12,
          fontWeight: 700,
          color: COLORS.textSecondary,
          textTransform: "uppercase",
          letterSpacing: 1,
          display: "block",
          marginBottom: 12,
        }}
      >
        Recent Commits
      </span>
      {COMMITS.map((c, i) => (
        <div
          key={i}
          className="commit-row"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "8px 10px",
            borderRadius: 4,
          }}
        >
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 12,
              fontWeight: 700,
              color: COLORS.amber,
              width: 68,
              flexShrink: 0,
            }}
          >
            {c.hash}
          </span>
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              color: COLORS.textPrimary,
              flex: 1,
            }}
          >
            {c.msg}
          </span>
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 10,
              color: COLORS.accent,
              background: COLORS.accentGlow,
              border: `1px solid ${COLORS.border}`,
              borderRadius: 4,
              padding: "2px 8px",
              whiteSpace: "nowrap",
            }}
          >
            {c.branch}
          </span>
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 10,
              color: COLORS.textMuted,
              width: 56,
              textAlign: "right",
              flexShrink: 0,
            }}
          >
            {c.time}
          </span>
        </div>
      ))}
    </div>
  );
}
