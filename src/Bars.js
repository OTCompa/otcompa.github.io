import gnb from './img/Gunbreaker.png';
import war from "./img/Warrior.png";
import brd from "./img/Bard.png";
import drg from "./img/Dragoon.png";
import sge from "./img/Sage.png";
import mch from "./img/Machinist.png";
import ast from "./img/Astrologian.png";
import blm from "./img/BlackMage.png";

const barData = [
    {
      job:gnb,
      color:"bg-gradient-to-r from-yellow-300/30 via-yellow-300/30 via-50% to-yellow-300/0 to-50% hover:from-yellow-300/30 hover:via-yellow-300/30 hover:via-90% hover:to-yellow-300/0 hover:to-90%",
      percent:"right-[0%]",
      name: "Frey Luna",
      id:""
    },
    {
      job:blm,
      color:"bg-[#b589e6]/30",
      percent:"right-[5%]",
      name:"Discord",
      id:"discord",
      hover:"ucob"
    },
    {
      job:drg,
      color:"bg-blue-800/30",
      percent:"right-[15%]",
      name:"Github",
      id:"github",
      url:"https://github.com/OTCompa"
    },
    {
      job: mch,
      color:"bg-cyan-300/30",
      percent:"right-[20%]",
      name:"Twitter",
      id:"twitter",
      url:"https://twitter.com/OneTrueCompa"
    },
    {
      job:brd,
      color:"bg-lime-300/30",
      percent:"right-[30%]",
      name:"Twitch",
      id:"twitch",
      url:"https://www.twitch.tv/onetruecompa"
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