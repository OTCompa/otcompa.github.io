import gnb from './img/Gunbreaker.png';
import war from "./img/Warrior.png";
import brd from "./img/Bard.png";
import drg from "./img/Dragoon.png";
import sge from "./img/Sage.png";
import {useEffect, useState} from "react";
import './DamageMeter.css';

function DamageMeter() {
    return(
      <div className="rounded-xl flexshadow-lg bg-zinc-700 bg-opacity-50">
      <div className="pb-5">
        <TopHeader />
        <div className="container">
          <BarGraph />
        </div>
      </div>
    </div>
    );
  }
  
function TopHeader() {
  return(
    <div className="flex flex-row">
      <Timer />
      <div className="px-2 py-2">
        <div className="text-left">
          Bahamut
        </div>
        <div className="text-left">
          Total DPS 696,696
        </div>
      </div>
      <div className="flex md:flex-grow items-center px-1 justify-end">
        <div className="rotate-90 text-5xl">
          ...
        </div>
      </div>
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
  return(
      <table className="bg-zinc-800">
        <thead>
          <BarHeader />
        </thead>
        <tbody>
          <Bar name="Frey Luna" color="bg-yellow-300/30" percent="right-[0%]" job={gnb} id=""/>
          <Bar name="FFLogs" color="bg-blue-800/30" percent="right-[10%]" job={drg} id="fflogs"/>
          <Bar name="Github" color="bg-lime-300/30" percent="right-[30%]" job={brd} id="github"/>
          <Bar name="Twitter" color='bg-blue-300/30' percent="right-[50%]" job={sge} id="twitter"/>
          <Bar name="YOU" color="bg-red-500/30" percent="right-[80%]" job={war} id="you"/>
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

  const headings = headers.map((hero, index)=>
    <th key={index}>{hero}</th>)

  return(
    <tr>
      {headings}
      <th className="absolute"></th>
    </tr>
  );
}

function Bar({name, color, percent, job, id}) {

  function setMargin(id, num) {
    var css = document.querySelector("#"+id);
    css.style.setProperty('--margin', num + '%');
  }

  function randomizeBar(id) {
    var random = Math.random() * 10 - 5;
    setMargin(id, random)
  }

  if (id.length !== 0) {
    setInterval(function() { randomizeBar(id);}, 3000);
  }

  return(
    <tr className="relative text-left w-96">
      <td className="">
        <img src={job} className="object-scale-down h-10 z-10"/>
      </td>
      <td className="px-16">
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
        <div className={color + " absolute freyff"} id={id}></div>
      </td>
    </tr>
  )
}

export default DamageMeter;

