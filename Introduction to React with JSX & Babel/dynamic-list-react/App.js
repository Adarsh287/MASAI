import React from 'react';

function App() {
  const items = ["React", "JavaScript", "CSS"];

  return (
    <div style={{ padding: '20px' }}>
      <h1>My Tech Stack</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
