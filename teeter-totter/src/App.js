import React from 'react';
import './App.css';
import { ObjectBox, TeeterTotter, BalancePoint} from "./components"

function App() {
  return (
    <div className="App">
      <ObjectBox />
      <TeeterTotter />
      <BalancePoint />
    </div>
  );
}

export default App;
