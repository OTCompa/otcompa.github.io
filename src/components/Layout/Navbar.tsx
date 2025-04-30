"use client";
import ScrollSpy from "react-scrollspy-navigation";

const items = [
  { href: "#dps-meter", label: "Home" },
  { href: "#about-me", label: "About me" },
  { href: "#projects", label: "Projects" },
];

function Navbar() {
  return (
    <div className="sticky top-0 shadow-sm bg-neutral-900 z-1000 h-14">
      <ScrollSpy activeClass="shadow-[0_2px_0_oklch(0.882_0.059_254.128)] text-blue-200">
        <nav>
          <ul className="flex items-center justify-center space-x-10">
            {items.map((item) => (
              <li
                key={item.href}
                className="transition-all hover:text-gray-300 text-nowrap"
              >
                <a
                  href={item.href}
                  className="transition-all flex items-center w-full h-[54px]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </ScrollSpy>
    </div>
  );
}

export default Navbar;
