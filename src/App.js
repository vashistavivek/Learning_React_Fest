import React from 'react';
import './App.css';
import Welcome from './Welcome';
import CounterOne from './CounterOne';
import CounterTwo from './CounterTwo';

function App() {
  return (
    <div className="App">
      <CounterOne />
      <CounterTwo />
    </div>
  );
}

export default App;
