import { useState, useEffect } from 'react';

export default function BuildingSelector() {
  const [selected, setSelected] = useState('');
  const [buildings, setBuildings] = useState([]);

  // Fetch the live list from your backend API
  useEffect(() => {
    fetch('http://localhost:3000/api/buildings')
      .then(res => res.json())
      .then(data => setBuildings(data))
      .catch(err => console.error("Error fetching buildings:", err));
  }, []);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
      <h2>Select Your Building</h2>
      <select value={selected} onChange={(e) => setSelected(e.target.value)}>
        <option value="">-- Choose a building --</option>
        {/* Map over the data coming from the API */}
        {buildings.map((b) => (
          <option key={b} value={b}>{b}</option>
        ))}
      </select>
      
      {selected && <p>You selected: {selected}</p>}
    </div>
  );
}