import { COLORS } from "../constants/colors";
import { TASKS } from "../constants/tasks";
import TaskCard from "./TaskCard";

const COLUMNS = [
  { key: "todo", label: "TO DO", accent: COLORS.textMuted },
  { key: "inProgress", label: "IN PROGRESS", accent: COLORS.amber },
  { key: "done", label: "DONE", accent: COLORS.green },
];

export default function KanbanBoard() {
  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}
    >
      {COLUMNS.map((col) => {
        const items = TASKS[col.key];
        return (
          <div key={col.key}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 12,
                paddingBottom: 8,
                borderBottom: `1px solid ${COLORS.border}`,
              }}
            >
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 11,
                  fontWeight: 700,
                  color: col.accent,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                }}
              >
                {col.label}
              </span>
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 10,
                  color: COLORS.textMuted,
                  background: COLORS.surfaceAlt,
                  borderRadius: 4,
                  padding: "1px 6px",
                }}
              >
                {items.length}
              </span>
            </div>
            {items.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        );
      })}
    </div>
  );
}
