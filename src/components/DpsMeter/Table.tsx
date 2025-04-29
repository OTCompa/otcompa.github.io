import { TableHeader } from "./TableHeader";
import { Bars } from "./Bars";

function Table() {
  const numCols = "grid-cols-[1fr_3fr_2fr_1fr_1fr_1fr_1fr]";
  return (
    <div className="text-white text-center bg-[#27272a] ">
      <TableHeader numCols={numCols} />
      <Bars numCols={numCols} />
    </div>
  );
}

export default Table;
