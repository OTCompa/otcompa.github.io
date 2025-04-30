import Navbar from "@/components/Layout/Navbar";
import Homepage from "./homepage";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Homepage />
      </main>
      {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        Disable animations
      </footer> */}
    </>
  );
}
