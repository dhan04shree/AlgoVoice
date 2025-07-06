import { useNavigate } from "react-router-dom";

export default function HeroSection(){

    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const handleGetStarted = (e) => {
        e.preventDefault();
        navigate(token ? "/newentry" : "/login");
    }
     const handleShowentry = (e) => {
         e.preventDefault();
        navigate(token ? "/showentry" : "/login");
    }
    return(
    <div className=" flex  justify-center text-white">
        <div className="max-w-7xl text-center px-4">
        <h1 className="text-4xl  pt-20 sm:pt-20 md:pt-28 md:text-7xl font-bold mb-6 ">
        Record your <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">logic</span>, <br></br> ideas, and breakthroughs
        </h1>
        <p className="text-xl md:text-2xl sm:text-xl text-[#ccc9dc] mb-6  md:px-48">
            Revisit your past work to sharpen your thinking and never lose progress. Your personal knowledge companion for breakthrough moments.
        </p>
        <div className="flex md:items-center justify-center">
        <form  className="flex justify-center mt-4">
        <button className="herobtn group text-black/90  px-6 py-3 rounded-lg transition duration-300 flex items-center gap-2" onClick={handleGetStarted}>Get Started <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-1"><i className="fa-solid fa-arrow-right-long"></i></span></button>
        </form>     
        <form className="flex justify-center mt-4 ms-3">
        <button className="group bg-[#0C0C0C] hover:bg-gray-700  text-white/99 border-0.5 border-gray-700/70  px-6 py-3 rounded-lg transition duration-300 flex items-center gap-2" onClick={handleShowentry}>My Records</button>
        </form>                           
        </div>
        </div>
    </div>        
    )
}