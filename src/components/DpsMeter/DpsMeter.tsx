"use client";
import Header from "../Header/Header";
import Table from "./Table";
import { AnimationProvider } from "./AnimationContext";

function DpsMeter() {
  return (
    <div className="aspect-video mx-auto">
      <div className="overflow-hidden bg-[#34363d] rounded-xl h-fit">
        <AnimationProvider>
          <Header />
          <Table />
        </AnimationProvider>
      </div>
    </div>
  );
}

export default DpsMeter;
