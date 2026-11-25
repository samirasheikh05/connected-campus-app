const db = require('./db');

// Reset the database so we have a clean slate for the demo
db.prepare('DELETE FROM reports').run();

// Helper to get a timestamp from X minutes ago
const getPastTime = (minutes) => new Date(Date.now() - minutes * 60000).toISOString();

// Add some fake system alerts for a confirmed outage at Woodlands 1
const insertSystemAlert = db.prepare(
  `INSERT INTO reports (building, category, timestamp, status, source)
   VALUES (?, ?, ?, 'synced', 'system')`
);

insertSystemAlert.run('Woodlands 1', 'No Connection', getPastTime(5));
insertSystemAlert.run('Woodlands 1', 'No Connection', getPastTime(8));

// Add an older user report to test the "stale" feature on the frontend
const insertUserReport = db.prepare(
  `INSERT INTO reports (building, category, timestamp, status, source)
   VALUES (?, ?, ?, 'synced', 'user')`
);

insertUserReport.run('Student Union', 'Slow', getPastTime(45));

console.log('Database reset. Added demo reports for Woodlands 1 and Student Union.');