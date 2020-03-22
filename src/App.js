import React from 'react';
import './App.css';
import {PureCompo} from './components/PureCompo'
import {CompoState} from './components/CompoState'

function App() {
  return (
    <div className="App">
      <PureCompo label="Imrane"/>
      <CompoState label="Mike" age="18"/>
    </div>
  );
}

export default App;
