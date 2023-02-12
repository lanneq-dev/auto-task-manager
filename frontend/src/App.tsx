import React from 'react';
import './App.css';
import Filter from './Filter/Filter';
import GptText from './GptText/GptText';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        {/* <Filter /> */}
        <GptText />
      </div>
    </div>
  );
}

export default App;
