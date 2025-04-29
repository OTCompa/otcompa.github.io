import { useAnimationContext } from "@/components/DpsMeter/AnimationContext";
import { useState } from "react";

function HamburgerIcon() {
  return (
    <>
      <span className="block w-5 h-0.5 bg-white mb-1"></span>
      <span className="block w-5 h-0.5 bg-white mb-1"></span>
      <span className="block w-5 h-0.5 bg-white"></span>
    </>
  );
}

function Menu() {
  const { toggleAnimations } = useAnimationContext();
  return (
    <div className="absolute right-0 z-20 w-48 mt-2 text-white bg-[#202020] rounded-md shadow-lg">
      <ul className="flex flex-col">
        <li className="px-4 py-2 hover:bg-[#2B2B2B]">
          <button onClick={toggleAnimations}>Toggle Animations</button>
        </li>
      </ul>
    </div>
  );
}

function HamburgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <div className="relative">
      <div className="flex justify-center h-full">
        <button
          className="px-3.5 text-white transition-colors rounded-full hover:bg-white/15"
          onClick={toggleMenu}
        >
          <HamburgerIcon />
        </button>
      </div>
      {menuOpen && <Menu />}
    </div>
  );
}

export default HamburgerMenu;
