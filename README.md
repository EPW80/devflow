# DevFlow

A developer dashboard portfolio piece built with React and Vite. Simulates a real-world dev workspace with a Kanban board, API monitor, Git log, and docs panel — all in a dark, terminal-inspired UI.

**Live:** https://devflow-jade-eight.vercel.app

---

## Features

- **Kanban Board** — Task cards across Todo / In Progress / Done columns with priority tags and time estimates
- **API Monitor** — Simulated endpoint health with status codes and response times
- **Git Log** — Mock commit history with branch and author info
- **Docs Panel** — Inline documentation viewer
- **Tech Stack sidebar** — Animated skill bars showing proficiency levels
- **Sprint Progress** — Visual progress bars across sprints
- **Live clock** — Real-time header timestamp

## Tech Stack

| Tool      | Purpose                                       |
| --------- | --------------------------------------------- |
| React 18  | UI components                                 |
| Vite 6    | Build tool & dev server                       |
| CSS-in-JS | Inline styles with a centralized color system |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

### Configuration

The API Monitor's "Live Fetch" panel calls a public demo API. To point it elsewhere,
copy `.env.example` to `.env` and set `VITE_API_BASE_URL`. It defaults to
`https://jsonplaceholder.typicode.com` when unset.

## Scripts

| Command                 | Purpose                          |
| ----------------------- | -------------------------------- |
| `npm run dev`           | Start the Vite dev server        |
| `npm run build`         | Production build to `dist/`      |
| `npm run lint`          | Lint with ESLint                 |
| `npm run format`        | Format with Prettier             |
| `npm test`              | Run the Vitest suite             |
| `npm run test:coverage` | Run tests with a coverage report |

## Project Structure

```
src/
├── components/
│   ├── APIPanel.jsx       # API health monitor
│   ├── DocsPanel.jsx      # Documentation viewer
│   ├── GitPanel.jsx       # Git commit log
│   ├── KanbanBoard.jsx    # Task board
│   ├── SkillBar.jsx       # Animated skill bar
│   └── TaskCard.jsx       # Kanban task card
├── constants/
│   ├── apiRoutes.js       # Mock API endpoints
│   ├── colors.js          # Design token palette
│   ├── commits.js         # Mock git history
│   ├── tasks.js           # Kanban task data
│   └── techStack.js       # Skill data
├── styles/
│   └── globals.js         # Global CSS injections
├── App.jsx
└── main.jsx
```

## Deployment

Deployed to Vercel with automatic deploys on push to `main`.
