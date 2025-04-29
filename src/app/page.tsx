import DpsMeter from "@/components/DpsMeter/DpsMeter";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen mx-2 md:mx-auto pb-20">
      <main className="flex flex-col w-full row-start-2">
        <DpsMeter />
      </main>
      {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        Disable animations
      </footer> */}
    </div>
  );
}
