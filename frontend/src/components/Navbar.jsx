import { useRef } from "react";
export default function Navbar(){

    const navLinksRef = useRef(null);
    function onToggleMenu(e){
        e.name == "menu-outline" ? e.name = "close" : e.name = "menu-outline";
        navLinksRef.current.classList.toggle('top-[10%]')
    }
    return(
        <header className="bg-[#080f15] text-white">
        <nav className=" mx-auto py-5 flex justify-between items-center w-[92%]">
            <div><h1><a href="/">AlgoVoice</a> </h1></div>
            <div ref={navLinksRef} className="nav-links duration-500 md:static absolute md:min-h-fit min-h-[12vh] left-0 top-[-100%] md:w-auto w-full items-center px-5">
                <ul className="md:flex-row flex-col flex md:items-center md:gap-[4vw] gap-4 text-[#ccc9dc]">
                    <li>
                        <a className="hover:text-grey-500" href="/login">Login</a>
                    </li>
                    <li>
                        <a className="hover:text-grey-500" href="/register">Signup</a>
                    </li>
                </ul>
            </div>
            <div className="flex items-center gap-6 md:hidden">
                <ion-icon onClick={(e)=>onToggleMenu(e.currentTarget)} name="menu-outline" className="text-3xl cursor-pointer "></ion-icon>
            </div>
        </nav>
        </header>
    )
}