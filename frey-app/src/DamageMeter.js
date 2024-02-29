import gnb from './img/Gunbreaker.png';
import war from "./img/Warrior.png";
import brd from "./img/Bard.png";
import drg from "./img/Dragoon.png";
import sge from "./img/Sage.png";
import './DamageMeter.css';

function DamageMeter() {
    return(
      <div class="rounded-xl flexshadow-lg bg-zinc-700 bg-opacity-50">
      <div class="pb-5">
        <div class="">
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
        <table class="bg-zinc-800">
          <BarHeader />
          <Bar name="Frey Luna" color="bg-yellow-300/30" percent="right-[0%]" job={gnb}/>
          <Bar name="FFLogs" color="bg-blue-800/30" percent="right-[10%]" job={drg}/>
          <Bar name="Github" color="bg-lime-300/30" percent="right-[30%]" job={brd}/>
          <Bar name="Twitter" color='bg-blue-300/30' percent="right-[50%]" job={sge}/>
          <Bar name="YOU" color="bg-red-500/30" percent="right-[80%]" job={war}/>
        </table>
      );
  }
  
  /*
  function BarGraph() {
    return(
        <table class="bg-zinc-800">
          <BarHeader />
          <Bar name="Frey Luna" color="from-yellow-300/30" percent="from-90%" job={gnb}/>
          <Bar name="FFLogs" color="from-blue-800/30" percent="from-70%" job={drg}/>
          <Bar name="Github" color="from-lime-300/30" percent="from-50%" job={brd}/>
          <Bar name="Twitter" color='from-blue-300/30' percent="from-30%" job={sge}/>
          <Bar name="YOU" color="from-red-500/30" percent="via-30%" job={war}/>
        </table>
      );
  }
  */

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
        <th class="absolute"></th>
      </tr>
    );
  }

  function Bar({name, color, percent, job}) {
    return(
      <tr class="relative text-left w-96">
        <td class="">
          <img src={job} class="object-scale-down h-10 z-10"/>
        </td>
        <td class="pl-3">
          {name}
        </td>
        <td class="space-x-5">
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
        <td class="text-center">
          0
        </td>
        <td classname="test" class={"inset-0 absolute bg-opacity-50 z-0 freyf " + percent}>
          <div class={color + " absolute freyff"}></div>
        </td>
      </tr>
    )
  }
  /*
  function Bar({name, color, percent, job}) {
    return(
      <tr class={"text-left bg-gradient-to-r " + color + " via-transparent " + percent}>
        <td class="">
          <img src={job} class="object-scale-down h-10"/>
        </td>
        <td class="pl-3 ">
          {name}
        </td>
        <td class="space-x-5">
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
        <td class="text-center">
          0
        </td>
      </tr>
    )
  }
 */
  export default DamageMeter;