let injected = false;

export function injectStyles() {
  if (injected) return;
  injected = true;

  const style = document.createElement("style");
  style.textContent = `
    @keyframes pulse-dot {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.4; transform: scale(0.8); }
    }

    @keyframes slide-in {
      from { opacity: 0; transform: translateY(12px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes fade-row {
      from { opacity: 0; transform: translateX(-8px); }
      to { opacity: 1; transform: translateX(0); }
    }

    @keyframes glow-pulse {
      0%, 100% { box-shadow: 0 0 6px rgba(0,212,255,0.3); }
      50% { box-shadow: 0 0 16px rgba(0,212,255,0.6); }
    }

    @keyframes bar-fill {
      from { width: 0%; }
      to { width: var(--bar-width); }
    }

    .task-card {
      transition: transform 0.2s ease, border-color 0.2s ease;
    }
    .task-card:hover {
      transform: translateY(-2px);
      border-color: #1e3048 !important;
    }

    .nav-tab {
      transition: color 0.2s ease, border-color 0.2s ease;
      cursor: pointer;
      border-bottom: 2px solid transparent;
      padding-bottom: 4px;
    }
    .nav-tab:hover {
      color: #00d4ff;
    }
    .nav-tab.active {
      color: #00d4ff;
      border-bottom-color: #00d4ff;
    }

    .api-row {
      animation: fade-row 0.3s ease forwards;
      transition: background 0.15s ease;
    }
    .api-row:hover {
      background: #111c2b;
    }

    .commit-row {
      transition: background 0.15s ease;
    }
    .commit-row:hover {
      background: #111c2b;
    }

    .fetch-btn {
      transition: background 0.2s ease, box-shadow 0.2s ease;
      cursor: pointer;
    }
    .fetch-btn:hover {
      background: #0099bb !important;
      box-shadow: 0 0 12px rgba(0,212,255,0.3);
    }

    .stat-card {
      animation: slide-in 0.4s ease forwards;
      opacity: 0;
    }

    .doc-card {
      transition: border-color 0.2s ease;
    }
    .doc-card:hover {
      border-color: #0099bb !important;
    }
  `;
  document.head.appendChild(style);
}
