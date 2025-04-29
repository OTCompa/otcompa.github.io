import { BarProps, info } from "@/app/info";
import Bar from "./Bar";

export function Bars() {
  return info.map((data: BarProps) => <Bar key={data.id} data={data} />);
}
