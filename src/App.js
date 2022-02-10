import React from 'react';
import './App.css';
import Forecast from "./components/Forecast/Forecast";
import Icon from "./components/Icon/Icon";
import "weather-icons/css/weather-icons.css"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Weather App</h1>

      </header>

      <main>

        <Forecast />
       <Icon />
      </main>

      <footer>

        App created by VS Brisendine

      </footer>
    </div>
  );
}

export default App;
