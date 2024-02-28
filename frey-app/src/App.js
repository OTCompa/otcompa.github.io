import logo from './logo.svg';
import './App.css';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DamageMeter />
      </header>
    </div>
  );
}


function DamageMeter() {
  return(
    <div class="rounded-xl flexshadow-lg bg-gray-700 bg-opacity-50">
    <div class="pb-5">
      <div class="box-border items-start">
        <p class="text-left pl-4 py-1">
          42:69
        </p>
      </div>
      <div class="container">
        <BarGraph />
      </div>
    </div>
  </div>
  );
}

function BarGraph() {
  return(
    <ul class="">
      <Bars name="Frey Luna" color="bg-yellow-300" />
      <Bars name="YOU" color="bg-red-500" />
    </ul>
    );
}

function Bars({name, color}) {
  return(
    <li class={"bg-opacity-40 pr-96 text-left " + color}>
      <div class="pl-3 ">
        {name}
      </div>
    </li>
  )
}

export default App;
