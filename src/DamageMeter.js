import {useEffect, useState} from "react";
import './DamageMeter.css';
import DropdownMenu from './Dropdown.js';
import barData from './Bars.js';

window.anim = true;

function DamageMeter() {
    return(
      <div className="rounded-xl flexshadow-lg bg-zinc-700 bg-opacity-50">
      <div className="pb-5">
        <TopHeader/>
        <div className="container">
          <BarGraph />
        </div>
      </div>
    </div>
    );
  }
  
function TopHeader() {
  return(
    <div className="flex flex-row handle">
      <Timer />
      <div className="px-2 py-2">
        <div className="text-left">
          Bahamut
        </div>
        <div className="text-left">
          Total DPS 696,696
        </div>
      </div>
      <DropdownMenu/>
    </div>
  );
}

function Timer() {
  const [time, setTime] = useState(0);
  const [running, ] = useState(true);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);
  return(
    <div className="text-left px-4 py-2 text-4xl flex items-center">
        {("0" + (Math.floor((time / 60) % 60))).slice(-2)}
        :
        {("0" + (Math.floor((time) % 60))).slice(-2)}
    </div>
  );
}

function BarGraph() {

  // handles bar width animations
  var dataArray = [];

  function setMargin(id, num) {
    var css = document.querySelector("#"+id);
    css.style.setProperty('--margin', num + '%');
  }

  function barHandler() {
    if (window.anim) {
      dataArray.forEach((element) => {
        // 0 = id, 1 = value, 2 = array
        setMargin(element[0], element[2][element[1]]);
        element[1] += 1;
        if (element[1] === element[2].length) {
          element[1] = 0;
        }
      });
    }
  }

  setInterval(barHandler, 3000);
  

  const barItems = barData.map(bar =>
    <Bar
    name={bar.name}
    color={bar.color}
    percent={bar.percent}
    job={bar.job}
    id={bar.id}
    dataArray={dataArray}
    />
    );

  return(
      <table className="bg-zinc-800">
        <thead>
          <BarHeader />
        </thead>
        <tbody>
          {barItems}
        </tbody>
      </table>
    );
}

function BarHeader() {

  const headers = [
    "Job",
    "Name",
    "DPS",
    "D.HIT",
    "C.HIT",
    "C.D.HIT",
    "MaxHit",
    "Deaths"
  ]

  const headings = headers.map((header, index)=>
    <th key={index}>{header}</th>)

  return(
    <tr>
      {headings}
      <th className="absolute"></th>
    </tr>
  );
}

function Bar({name, color, percent, job, id, dataArray}) {
  
  if (id.length !== 0) {
    const primes = [5, 7, 11, 13, 17, 19, 23, 29];
    var prime = primes[Math.floor(Math.random()*primes.length)];
    var tempArray = [];
    var delayArray = [];
    for (var i = 0; i < prime; i++) {
      delayArray.push(Math.random() * 15 - 7.5);
    }
    tempArray.push(id);
    tempArray.push(0);
    tempArray.push(delayArray);
    dataArray.push(tempArray);
  }

  return(
    <tr className="relative text-left w-96">
      <td className="">
        <img src={job} className="object-scale-down h-10 z-10"/>
      </td>
      <td className="px-16 text-center">
        {name}
      </td>
      <td className="">
        696,969
      </td>
      <td>
        69.42%
      </td>
      <td>
        69.42%
      </td>
      <td>
        69.42%
      </td>
      <td>
        69,420,000
      </td>
      <td className="text-center">
        0
      </td>
      <td className={"inset-0 absolute bg-opacity-50 z-0 freyf " + percent}>
        <div className={color + " absolute dpsbar"} id={id}></div>
      </td>
    </tr>
  )
}

export default DamageMeter;

