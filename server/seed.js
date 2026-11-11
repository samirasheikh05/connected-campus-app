const db = require('./db');

// 1. Clear existing reports so we start fresh every time we run this
db.prepare('DELETE FROM reports').run();

// Helper function to create timestamps for the past
const now = new Date();
const minutesAgo = (m) => new Date(now.getTime() - m * 60000).toISOString();

const stmt = db.prepare(
  `INSERT INTO reports (building, category, timestamp, status, source)
   VALUES (?, ?, ?, 'synced', ?)`
);

// 2. Insert a simulated "Confirmed Outage" for the Library (Recent)
// We use source = 'system' to distinguish this from user reports
stmt.run('Library', 'No Connection', minutesAgo(5), 'system');
stmt.run('Library', 'No Connection', minutesAgo(8), 'system');

// 3. Insert a "Stale" user report for Dorm A (45 minutes ago)
// Because it is older than 30 minutes, your frontend can mark this as stale
stmt.run('Dorm A', 'Slow', minutesAgo(45), 'user');

console.log('✅ Database seeded successfully with demo data!');