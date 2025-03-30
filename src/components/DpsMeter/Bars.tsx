import { BarProps, info } from '@/app/info';
import { Bar } from './BarRow';

export function Bars({numCols} : {numCols: string}) {
    return info.map((data : BarProps) => <Bar key={data.id} data={data} numCols={numCols}/>)
}