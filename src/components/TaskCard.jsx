import { COLORS } from "../constants/colors";

const PRIORITY_COLORS = {
  high: COLORS.red,
  medium: COLORS.amber,
  low: COLORS.green,
};

export default function TaskCard({ task }) {
  const pColor = PRIORITY_COLORS[task.priority];

  return (
    <div
      className="task-card"
      style={{
        background: COLORS.surface,
        border: `1px solid ${COLORS.border}`,
        borderRadius: 8,
        padding: "12px 14px",
        marginBottom: 8,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 8,
        }}
      >
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: pColor,
            boxShadow: `0 0 6px ${pColor}88`,
            flexShrink: 0,
          }}
        />
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 13,
            color: COLORS.textPrimary,
            fontWeight: 500,
            lineHeight: 1.3,
          }}
        >
          {task.title}
        </span>
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
            padding: "2px 6px",
          }}
        >
          {task.tag}
        </span>
        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 10,
            color: COLORS.textMuted,
            marginLeft: "auto",
          }}
        >
          {task.est}
        </span>
      </div>
    </div>
  );
}
