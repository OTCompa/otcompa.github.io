import clsx from "clsx";
import { Cell } from "./Cell";
import { useDpsMeterContext } from "./DpsMeterContext";

export function TableHeader() {
  const { isMobile, colSetup } = useDpsMeterContext();
  return (
    <div className={clsx("grid text-sm font-extralight", colSetup)}>
      <Cell type="header">Job</Cell>
      <Cell type="header">Name</Cell>
      <Cell type="header">DPS</Cell>
      {isMobile ? (
        <></>
      ) : (
        <>
          <Cell type="header">C.HIT</Cell>
          <Cell type="header">D.HIT</Cell>
          <Cell type="header">C.D.HIT</Cell>
          <Cell type="header">Deaths</Cell>
        </>
      )}
    </div>
  );
}
