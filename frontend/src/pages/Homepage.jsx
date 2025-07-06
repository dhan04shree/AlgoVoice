import HeroSection from "../components/HeroSection";

export default function Homepage(){
    return(
        <>
        <HeroSection/>
        <div className="text-white pt-20 text-center px-9 sm:px-9 md:px-72">
            <h1 className="text-3xl  md:text-5xl pt-20 sm:pt-20 md:pt-28 font-bold mb-6 ">Capture Every <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Breakthrough</span></h1>
            <p className="text-xl md:text-xl sm:text-xl text-[#ccc9dc] mb-6 ">Transform scattered thoughts into structured insights with our intelligent recording system</p>
        </div>
        </>
    )
}