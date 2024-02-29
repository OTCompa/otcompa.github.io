import gnb from './img/Gunbreaker.png';
import war from "./img/Warrior.png";
import brd from "./img/Bard.png";
import drg from "./img/Dragoon.png";
import sge from "./img/Sage.png";
import './App.css';
import DamageMeter from './DamageMeter.js' 


function App() {
  return (
    <div className="App h-full">
      <header className="App-header h-full">
        <DamageMeter />
      </header>
    </div>
  );
}

export default App;
