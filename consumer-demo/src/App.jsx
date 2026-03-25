import React, { useState } from 'react';
import LoaderOverlay from 'loader-overlay';

export default function App() {
  const [loading, setLoading] = useState(false);

  return (
    <div style={{ position: 'relative', width: 400, height: 300, border: '1px solid #ccc', padding: 20 }}>
      <h1>Consumer Demo</h1>
      <button onClick={() => {
        setLoading(true);
        setTimeout(() => setLoading(false), 2000);
      }}>Load Data</button>
      <LoaderOverlay show={loading} message="Loading via NPM package!" />
    </div>
  );
}
