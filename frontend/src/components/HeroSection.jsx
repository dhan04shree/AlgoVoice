export default function HeroSection(){
    return(
    <div className="h-screen flex items-center justify-center text-white">
        <div className="max-w-4xl text-center px-4">
        <h1 className="text-6xl font-bold mb-6 leading-tight">
        Every Solution Matters. Capture It With <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">AlgoVoice</span>
        </h1>
        <p className="text-lg text-[#ccc9dc] mb-6 px-32">
            Record your logic, ideas, and breakthroughs in one place. Revisit your past work to sharpen your thinking and never lose progress.
        </p>
        <form action="/newentry" className="flex justify-center mt-4">
        <button className="herobtn group text-black px-6 py-3 rounded-lg transition duration-300 flex items-center gap-2">Get Started <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-1"><i className="fa-solid fa-arrow-right-long"></i></span>
</button>

        </form>
        </div>
    </div>        
    )
}