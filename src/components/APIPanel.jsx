import { useState, useCallback } from "react";
import { COLORS } from "../constants/colors";
import { API_ROUTES } from "../constants/apiRoutes";

const METHOD_COLORS = {
  GET: COLORS.green,
  POST: COLORS.accent,
  PUT: COLORS.amber,
  DELETE: COLORS.red,
};

const ENDPOINTS = ["posts", "users", "todos", "comments"];

export default function APIPanel() {
  const [selectedEndpoint, setSelectedEndpoint] = useState("posts");
  const [liveData, setLiveData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    setLiveData(null);
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/${selectedEndpoint}?_limit=5`
      );
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      setLiveData(json.slice(0, 3));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [selectedEndpoint]);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
      {/* Left — Route Table */}
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
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 12,
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
            }}
          >
            API Routes
          </span>
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: COLORS.green,
              animation: "pulse-dot 2s ease-in-out infinite",
            }}
          />
        </div>
        {API_ROUTES.map((route, i) => (
          <div
            key={i}
            className="api-row"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "6px 8px",
              borderRadius: 4,
              animationDelay: `${i * 60}ms`,
            }}
          >
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 11,
                fontWeight: 700,
                color: METHOD_COLORS[route.method],
                width: 52,
              }}
            >
              {route.method}
            </span>
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 11,
                color: COLORS.textPrimary,
                flex: 1,
              }}
            >
              {route.path}
            </span>
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 10,
                color: route.status < 300 ? COLORS.green : COLORS.red,
              }}
            >
              {route.status}
            </span>
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 10,
                color: COLORS.textMuted,
                width: 40,
                textAlign: "right",
              }}
            >
              {route.ms}ms
            </span>
          </div>
        ))}
      </div>

      {/* Right — Live Fetch */}
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
          Live Fetch
        </span>

        <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
          <select
            value={selectedEndpoint}
            onChange={(e) => setSelectedEndpoint(e.target.value)}
            style={{
              flex: 1,
              fontFamily: "'Space Mono', monospace",
              fontSize: 12,
              background: COLORS.surfaceAlt,
              color: COLORS.textPrimary,
              border: `1px solid ${COLORS.border}`,
              borderRadius: 4,
              padding: "6px 8px",
              outline: "none",
            }}
          >
            {ENDPOINTS.map((ep) => (
              <option key={ep} value={ep}>
                /{ep}
              </option>
            ))}
          </select>
          <button
            className="fetch-btn"
            onClick={fetchData}
            disabled={loading}
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 11,
              fontWeight: 700,
              color: COLORS.bg,
              background: COLORS.accent,
              border: "none",
              borderRadius: 4,
              padding: "6px 14px",
              opacity: loading ? 0.6 : 1,
            }}
          >
            {loading ? "..." : "FETCH"}
          </button>
        </div>

        <div
          style={{
            background: COLORS.bg,
            border: `1px solid ${COLORS.border}`,
            borderRadius: 4,
            padding: 12,
            minHeight: 160,
            overflow: "auto",
          }}
        >
          {loading && (
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 12,
                color: COLORS.textMuted,
              }}
            >
              Fetching...
            </span>
          )}
          {error && (
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 12,
                color: COLORS.red,
              }}
            >
              Error: {error}
            </span>
          )}
          {liveData && (
            <pre
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 11,
                color: COLORS.green,
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                margin: 0,
              }}
            >
              {JSON.stringify(liveData, null, 2)}
            </pre>
          )}
          {!loading && !error && !liveData && (
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 12,
                color: COLORS.textMuted,
              }}
            >
              Select an endpoint and click FETCH
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
