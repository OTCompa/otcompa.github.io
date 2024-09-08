import './Dropdown.css';
import {useEffect, useState} from "react";

function DropdownMenu() {
    const [open, setOpen] = useState(false);

    function toggleAnimation() {
        var css = document.querySelectorAll(".dpsbar");
        var temp = false;
        css.forEach(element => {
            if (temp || element.style.animationPlayState === "paused") {
                element.style.animationPlayState = "running";
                window.anim = true;
                temp = true;
            } else {
                element.style.animationPlayState = "paused";
                window.anim = false;
            }
        });
      }

    return(

      <div className="flex md:flex-grow px-1 justify-end">
        <button 
        className="relative hover:bg-zinc-800 rounded-full px-3.5  m-2"
        onClick={()=>{setOpen(!open)}}
        >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            viewBox="0 0 20 20"
            fill="currentColor"
            >
                <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
                />
            </svg>
        <div
    className={"absolute end-0 z-20 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg dark:border-zinc-800 dark:bg-zinc-900" + (open ? ' visible':' invisible')}
    role="menu"
    id="settings"
    >
    <div className={'p2'}>
        <a
        href="#"
        className="block px-4 py-4  text-lg hover:bg-gray-50 hover:text-gray-700 text-white dark:hover:bg-gray-800 dark:hover:text-gray-300"
        role="menuitem"
        onClick={()=>{toggleAnimation()}}
        >
        Pause animations
        </a>
    </div>
    </div>
      </button>
    </div>
    
    );
}

export default DropdownMenu;