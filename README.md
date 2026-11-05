# Connected — Campus Network Experience App

## Data Model
Report = {
  id: integer,
  building: string,
  category: "No Connection" | "Slow" | "Dropped",
  timestamp: ISO string (sent by CLIENT, stored as-is),
  status: "synced",
  source: "user" | "system"
}

## API Endpoints
- `GET /api/buildings` → returns ["Library", "Dorm A", ...]
- `POST /api/reports` → body: { building, category, timestamp, source }
                      → returns the created report
- `GET /api/reports` → all reports, newest first

## Buildings
Library, Dorm A, Dorm B, Student Center, Engineering Hall

## Important Rules
- Client sends the timestamp. Server stores it untouched. (Offline sync depends on this.)
- `source` = "user" by default; "system" only for seeded demo alerts.
