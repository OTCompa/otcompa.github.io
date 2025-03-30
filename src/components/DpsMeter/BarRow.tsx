import { BarProps } from '@/app/info';
import clsx from 'clsx';
import Image from 'next/image';
import { Cell } from './Cell';

function CellName({data} : {data: BarProps}) {
    let longest = ""
    if (data.hoverText) {
        longest = data.hoverText.length > data.name.length ? data.hoverText : data.name
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
                <span className="row-start-1 col-start-1">
                    <span className="invisible">{longest}</span>
                </span>
                <span className="row-start-1 col-start-1">
                    <span className="block group-hover/cell:hidden">{data.name}</span>
                    <span className="hidden group-hover/cell:contents">{data.hoverText}</span>
                </span>
            </p>
        </>
    )
}

export function Bar({ data, numCols }: { data: BarProps, numCols: string }) {
    return (
        <div className="relative group">
            <div id={data.id} className={clsx("absolute inset-0 w-full transition-all", data.color)}></div>
            <div className={clsx("relative grid grid-cols-4 text-center", numCols)}>
                <Cell><Image src={data.job} alt="job" width={35} height={35} /></Cell>
                <Cell><CellName data={data}/></Cell>
                <Cell>696,696</Cell>
                <Cell>6%</Cell>
                <Cell>9%</Cell>
                <Cell>69%</Cell>
                <Cell>0</Cell>
            </div>
        </div>
    );
}
