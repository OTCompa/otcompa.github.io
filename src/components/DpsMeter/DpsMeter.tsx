import Header from "../Header/Header";
import Table from "./Table";

function DpsMeter() {
    return (
        <div className="aspect-video mx-auto">
            <div className="overflow-hidden bg-[#34363d] rounded-xl h-fit">
            <Header />
            <Table />
            </div>
        </div>
    )
}

export default DpsMeter