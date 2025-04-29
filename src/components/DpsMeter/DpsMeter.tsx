"use client";
import Header from "../Header/Header";
import Table from "./Table";
import { DpsMeterProvider } from "./DpsMeterContext";

function DpsMeter() {
  return (
    <div className="aspect-video mx-auto">
      <div className="overflow-hidden bg-[#34363d] rounded-xl h-fit">
        <DpsMeterProvider>
          <Header />
          <Table />
        </DpsMeterProvider>
      </div>
    </div>
  );
}

export default DpsMeter;
