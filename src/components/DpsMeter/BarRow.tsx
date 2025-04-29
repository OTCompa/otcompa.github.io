"use client";
import { BarProps } from "@/app/info";
import clsx from "clsx";
import Image from "next/image";
import { Cell } from "./Cell";
import { useEffect } from "react";
import { useAnimationContext } from "./AnimationContext";
import CellName from "./CellName";

function randomizeBar(data: BarProps) {
  const midpoint = (data.range[1] + data.range[0]) / 2;
  const width =
    (Math.random() - 0.5) * (data.range[1] - data.range[0]) + midpoint;
  document.getElementById(data.id)?.setAttribute("style", `width:${width}%`);
}

export function Bar({ data, numCols }: { data: BarProps; numCols: string }) {
  const { animations } = useAnimationContext();
  useEffect(() => {
    const randomizer = setInterval(() => {
      if (!animations) return;
      randomizeBar(data);
    }, 1500);

    return () => clearInterval(randomizer);
  }, [data, animations]);

  return (
    <div className="relative group">
      <div
        id={data.id}
        className={clsx("absolute inset-0 transition-all", data.color)}
        style={{
          width: `${(data.range[1] - data.range[0]) / 2 + data.range[0]}%`,
        }}
      ></div>
      <div
        className={clsx(
          "relative grid grid-cols-4 text-center text-lg",
          numCols
        )}
      >
        <Cell>
          <Image src={data.job} alt="job" width={35} height={35} />
        </Cell>
        <Cell>
          <CellName data={data} />
        </Cell>
        <Cell>696,696</Cell>
        <Cell>6%</Cell>
        <Cell>9%</Cell>
        <Cell>69%</Cell>
        <Cell>0</Cell>
      </div>
    </div>
  );
}
