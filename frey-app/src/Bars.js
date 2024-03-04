import gnb from './img/Gunbreaker.png';
import war from "./img/Warrior.png";
import brd from "./img/Bard.png";
import drg from "./img/Dragoon.png";
import sge from "./img/Sage.png";
import mch from "./img/Machinist.png";

const barData = [
    {
      name: "Frey Luna",
      color:"bg-yellow-300/30",
      percent:"right-[0%]",
      job:gnb,
      id:""
    },
    {
      name:"FFLogs",
      color:"bg-blue-800/30",
      percent:"right-[10%]",
      job:drg,
      id:"fflogs"
    },
    {
        name:"Lodestone",
        color:"bg-cyan-300/30",
        percent:"right-[15%]",
        job: mch,
        id:"lodestone"
    },
    {
      name:"Github",
      color:"bg-lime-300/30",
      percent:"right-[30%]",
      job:brd,
      id:"github"
    },
    {
      name:"Twitter",
      color:"bg-blue-300/30",
      percent:"right-[50%]",
      job:sge,
      id:"twitter"
    },
    {
      name:"YOU",
      color:"bg-red-500/30",
      percent:"right-[80%]",
      job:war,
      id:"you"
    }
  ]

  export default barData