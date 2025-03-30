import clsx from "clsx";
import { Cell } from "./Cell";

export function TableHeader({numCols} : {numCols: string}) {
    return (
        <div className={clsx("grid text-sm font-extralight", numCols)}>
            <Cell type="header">Job</Cell>
            <Cell type="header">Name</Cell>
            <Cell type="header">DPS</Cell>
            <Cell type="header">C.HIT</Cell>
            <Cell type="header">D.HIT</Cell>
            <Cell type="header">C.D.HIT</Cell>
            <Cell type="header">Deaths</Cell>
        </div>
    )
}