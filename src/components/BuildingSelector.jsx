import { useState } from 'react';

export default function BuildingSelector() {
  const [selected, setSelected] = useState('');

  const buildings = [
    'Dorm A', 
    'Dorm B', 
    'Library', 
    'Student Center'
  ];

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
      <h2>Select Your Building</h2>
      <select value={selected} onChange={(e) => setSelected(e.target.value)}>
        <option value="">-- Choose a building --</option>
        {buildings.map((b) => (
          <option key={b} value={b}>{b}</option>
        ))}
      </select>
      
      {selected && <p>You selected: {selected}</p>}
    </div>
  );
}