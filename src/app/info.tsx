import drk from "@/img/DarkKnight.png";
import war from "@/img/Warrior.png";
import brd from "@/img/Bard.png";
import drg from "@/img/Dragoon.png";
import sge from "@/img/Sage.png";
import mch from "@/img/Machinist.png";
import ast from "@/img/Astrologian.png";
import blm from "@/img/BlackMage.png";
import { StaticImageData } from "next/image";

export interface BarProps {
  id: string;
  color: string;
  job: StaticImageData;
  name: string;
  range: [number, number];
  url?: string;
  toggleText?: string;
}

export const info: BarProps[] = [
  {
    job: drk,
    color: "bg-[#bc22b8]/30",
    range: [100, 100],
    name: "Frey Luna",
    id: "name",
  },
  {
    job: blm,
    color: "bg-[#b589e6]/30",
    range: [90, 99],
    name: "Discord",
    id: "discord",
    toggleText: "ucob",
  },
  {
    job: drg,
    color: "bg-blue-800/30",
    range: [80, 89],
    name: "Github",
    id: "github",
    url: "https://github.com/OTCompa",
  },
  {
    job: mch,
    color: "bg-cyan-300/30",
    range: [70, 79],
    name: "Twitter",
    id: "twitter",
    url: "https://twitter.com/OneTrueCompa",
  },
  {
    job: brd,
    color: "bg-lime-300/30",
    range: [60, 69],
    name: "Twitch",
    id: "twitch",
    url: "https://www.twitch.tv/onetruecompa",
  },
  {
    job: sge,
    color: "bg-blue-300/30",
    range: [40, 50],
    name: "Lodestone",
    id: "lodestone",
    url: "https://na.finalfantasyxiv.com/lodestone/character/19660534/",
  },
  {
    job: ast,
    color: "bg-[#fff75a]/40",
    range: [30, 40],
    name: "FFLogs",
    id: "fflogs",
    url: "https://www.fflogs.com/character/id/19769377",
  },
  {
    job: war,
    color: "bg-red-500/30",
    range: [15, 25],
    name: "YOU",
    id: "you",
  },
];
