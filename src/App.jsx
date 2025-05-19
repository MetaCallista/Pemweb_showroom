import React from 'react';
import './App.css'; // kalau ada styling global
import Home from './pages/Home'; // asumsi kamu menyimpan Home.jsx di folder `pages`

const App = () => {
  return (
    <div className="App">
      <Home />
    </div>
  );
};

export default App;
