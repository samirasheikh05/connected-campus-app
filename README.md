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
- 
How To Run The Backend:
## Backend Setup & Run
1. Open a terminal and navigate to the server folder: `cd server`
2. Install dependencies: `npm install`
3. Seed the database with demo data: `node seed.js`
4. Start the server: `node server.js`
5. The API will be running on `http://localhost:3000`
