import { useState, useEffect } from "react";
import { COLORS } from "../constants/colors";

export default function SkillBar({ name, level, color, delay = 0 }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(level), delay + 200);
    return () => clearTimeout(timer);
  }, [level, delay]);

  return (
    <div style={{ marginBottom: 12 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 4,
        }}
      >
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 13,
            color: COLORS.textSecondary,
            fontWeight: 500,
          }}
        >
          {name}
        </span>
        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 12,
            color: COLORS.textMuted,
            fontWeight: 400,
          }}
        >
          {level}%
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
            width: `${width}%`,
            borderRadius: 2,
            background: `linear-gradient(90deg, ${color}88, ${color})`,
            boxShadow: `0 0 8px ${color}66`,
            transition: "width 0.9s cubic-bezier(.4,0,.2,1)",
          }}
        />
      </div>
    </div>
  );
}
