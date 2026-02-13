import React from 'react';
import Grid from './components/Grid';

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Recursive Grid</h1>
        <Grid />
      </div>
    </div>
  );
}

export default App;
