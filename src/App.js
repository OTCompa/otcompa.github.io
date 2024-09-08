import './App.css';
import DamageMeter from './DamageMeter.js';
import Draggable from 'react-draggable';

function App() {
  
  return (
    <div className="App h-full">
      <header className="App-header h-full">
        <Draggable
        handle=".handle"
        bounds="parent"
        onStart={() => {window.anim = false}}
        onStop={() => {window.anim = true}}
        >
          <div>
            <DamageMeter />
          </div>
        </Draggable>
      </header>
    </div>
  );
}

export default App;
