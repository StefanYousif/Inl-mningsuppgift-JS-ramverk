import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieApplication from './components/MovieApplication';
import './App.css';

const App = () => {
  return (
    <div className="App">
        {/* Rendera komponenten MovieApplication */}
        <MovieApplication />
    </div>
  );
};

export default App;