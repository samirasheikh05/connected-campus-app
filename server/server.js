const express = require('express');
const cors = require('cors');
const db = require('./db');
const app = express();

app.use(cors());
app.use(express.json());

const BUILDINGS = ['Library', 'Dorm A', 'Dorm B', 'Student Center', 'Engineering Hall'];

app.get('/api/buildings', (req, res) => res.json(BUILDINGS));

app.post('/api/reports', (req, res) => {
  const { building, category, timestamp, source = 'user' } = req.body;
  if (!building || !category || !timestamp)
    return res.status(400).json({ error: 'Missing fields' });

  const stmt = db.prepare(
    `INSERT INTO reports (building, category, timestamp, status, source)
     VALUES (?, ?, ?, 'synced', ?)`
  );
  const info = stmt.run(building, category, timestamp, source);
  const report = db.prepare('SELECT * FROM reports WHERE id = ?').get(info.lastInsertRowid);
  res.status(201).json(report);
});

app.get('/api/reports', (req, res) => {
  const { building } = req.query;
  const rows = building
    ? db.prepare('SELECT * FROM reports WHERE building = ? ORDER BY timestamp DESC').all(building)
    : db.prepare('SELECT * FROM reports ORDER BY timestamp DESC').all();
  res.json(rows);
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));