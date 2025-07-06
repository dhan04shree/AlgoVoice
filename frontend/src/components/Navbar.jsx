import { useRef } from "react";
export default function Navbar(){

    const navLinksRef = useRef(null);
    function onToggleMenu(e){
        e.name == "menu-outline" ? e.name = "close" : e.name = "menu-outline";
        navLinksRef.current.classList.toggle('top-[10%]')
    }
    return(
        <header className="bg-[#0C0C0C] text-white border-b-0.5 border-gray-500/50">
        <nav className=" mx-auto py-5 flex justify-between items-center w-[92%]">

            <div>
                <h1>
                    <a href="/"><span className="font-bold text-xl bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">AlgoVoice</span></a>
                </h1>
            </div>

            <div ref={navLinksRef} className="nav-links duration-500 md:static absolute md:min-h-fit min-h-[11vh] left-[75%] top-[-100%] md:w-auto  items-center px-5 bg-gray-600 sm:bg-gray-600 md:bg-[#0C0C0C]">
                <ul className="text-white mt-4 md:mt-0 sm:mt-4 md:flex-row flex-col flex md:items-center md:gap-[4vw] gap-4">
                    <li>
                        <a className="hover:text-[#a243ce]" href="/login">Login</a>
                    </li>
                    <li>
                        <a className="hover:text-[#a243ce]" href="/register">Signup</a>
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