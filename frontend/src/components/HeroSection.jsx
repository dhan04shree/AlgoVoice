import { useNavigate } from "react-router-dom";

export default function HeroSection(){

    const navigate = useNavigate();
    const handleGetStarted = () => {
    const token = localStorage.getItem("token");
    navigate(token ? "/newentry" : "/login");
    }
     const handleShowentry = () => {
    const token = localStorage.getItem("token");
    navigate(token ? "/showentry" : "/login");
    }
    return(
    <div className="h-screen flex md:items-center justify-center text-white">
        <div className="max-w-4xl text-center px-4">
        <h1 className="text-4xl  pt-32 sm:pt-32 md:pt-0 md:text-6xl font-bold mb-6 leading-tight">
        Every Solution Matters. Capture It With <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">AlgoVoice</span>
        </h1>
        <p className="text-lg text-[#ccc9dc] mb-6 md:px-32">
            Record your logic, ideas, and breakthroughs in one place. Revisit your past work to sharpen your thinking and never lose progress.
        </p>
        <div className="flex md:items-center justify-center">
        <form action="/newentry" className="flex justify-center mt-4">
        <button className="herobtn group text-black px-6 py-3 rounded-lg transition duration-300 flex items-center gap-2" onClick={handleGetStarted}>Get Started <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-1"><i className="fa-solid fa-arrow-right-long"></i></span></button>
        </form>     
         <form action="/showentry" className="flex justify-center mt-4 ms-3">
        <button className="group bg-[#0C0C0C] hover:bg-gray-700 text-white/99 border-0.5 border-gray-700/70  px-6 py-3 rounded-lg transition duration-300 flex items-center gap-2" onClick={handleShowentry}>My Records</button>
        </form>                           
        </div>
        </div>
    </div>        
    )
}