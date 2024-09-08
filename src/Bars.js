import gnb from './img/Gunbreaker.png';
import war from "./img/Warrior.png";
import brd from "./img/Bard.png";
import drg from "./img/Dragoon.png";
import sge from "./img/Sage.png";
import mch from "./img/Machinist.png";
import ast from "./img/Astrologian.png";

const barData = [
    {
      job:gnb,
      color:"bg-yellow-300/30",
      percent:"right-[0%]",
      name: "Frey Luna",
      id:""
    },
    {
      job:drg,
      color:"bg-blue-800/30",
      percent:"right-[10%]",
      name:"Discord",
      id:"discord",
      hover:"onetruecompa"
    },
    {
      job: mch,
      color:"bg-cyan-300/30",
      percent:"right-[15%]",
      name:"Github",
      id:"github",
      url:"https://github.com/OTCompa"
    },
    {
      job:brd,
      color:"bg-lime-300/30",
      percent:"right-[30%]",
      name:"Twitter",
      id:"twitter",
      url:"https://twitter.com/OneTrueCompa"
    },
    {
      job:sge,
      color:"bg-blue-300/30",
      percent:"right-[50%]",
      name:"Lodestone",
      id:"lodestone",
      url:"https://na.finalfantasyxiv.com/lodestone/character/19660534/"
    },
    {
      job:ast,
      color:"bg-[#fff75a]/40",
      percent:"right-[65%]",
      name:"FFLogs",
      id:"fflogs",
      url:"https://www.fflogs.com/character/id/19769377"
    },
    {
      job:war,
      color:"bg-red-500/30",
      percent:"right-[80%]",
      name:"YOU",
      id:"you"
    }
  ]

  export default barData