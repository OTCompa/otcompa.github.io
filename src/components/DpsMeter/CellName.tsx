"use client";
import { BarProps } from "@/app/info";
import clsx from "clsx";
import { useState } from "react";

function CellName({ data }: { data: BarProps }) {
  const [showCell, setShowCell] = useState(false);
  const toggleCell = () => setShowCell((prev) => !prev);

  let longest = "";
  if (data.hoverText) {
    longest =
      data.hoverText.length > data.name.length ? data.hoverText : data.name;
  } else {
    return (
      <>
        {data.url ? (
          <a href={data.url} target="_blank" className="hover:underline">
            {data.name}
          </a>
        ) : (
          data.name
        )}
      </>
    );
  }
  return (
    <>
      <p className="grid grid-cols-1">
        <span className="col-start-1 row-start-1">
          <span className="invisible">{longest}</span>
        </span>
        <span className="col-start-1 row-start-1">
          <span
            onClick={toggleCell}
            className={clsx("hover:underline hover:cursor-pointer", {
              "select-none": !showCell,
            })}
          >
            {showCell ? data.hoverText : data.name}
          </span>
        </span>
      </p>
    </>
  );
}

export default CellName;
