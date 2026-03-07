export const API_ROUTES = [
  { method: "GET", path: "/api/users", status: 200, ms: 45 },
  { method: "GET", path: "/api/tasks", status: 200, ms: 32 },
  { method: "POST", path: "/api/tasks", status: 201, ms: 120 },
  { method: "PUT", path: "/api/tasks/:id", status: 200, ms: 88 },
  { method: "DELETE", path: "/api/tasks/:id", status: 204, ms: 56 },
  { method: "GET", path: "/api/commits", status: 200, ms: 67 },
  { method: "POST", path: "/api/auth/login", status: 200, ms: 210 },
  { method: "GET", path: "/api/docs", status: 200, ms: 38 },
];
