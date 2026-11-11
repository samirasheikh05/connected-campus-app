const Database = require('better-sqlite3');
const db = new Database('reports.db');

db.exec(`
  CREATE TABLE IF NOT EXISTS reports (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    building TEXT NOT NULL,
    category TEXT NOT NULL,
    timestamp TEXT NOT NULL,
    status TEXT DEFAULT 'synced',
    source TEXT DEFAULT 'user'
  )
`);

module.exports = db;