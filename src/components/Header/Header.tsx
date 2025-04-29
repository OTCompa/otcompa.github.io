import HamburgerMenu from "./HamburgerMenu";
import Timer from "./Timer";

function Header() {
  return (
    <div className="flex flex-row px-4 py-1 gap-x-3">
      <div className="flex items-center text-4xl">
        <Timer />
      </div>
      <div className="flex justify-between w-full">
        <div className="p-2">
          <div className="text-left">Bahamut</div>
          <div className="text-left">Total DPS 696,969</div>
        </div>
        <div className="flex justify-center h-full py-2">
          <HamburgerMenu />
        </div>
      </div>
    </div>
  );
}

export default Header;
