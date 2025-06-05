export default function HeroSection(){
    return(
    <div className="h-screen flex items-center justify-center text-white bg-gray-900">
        <div className="max-w-2xl text-center px-4">
        <h1 className="text-5xl font-bold mb-6 leading-tight">
        Every Solution Matters. Capture It With AlgoVoice.
        </h1>
        <p className="text-lg text-[#ccc9dc] mb-6">
            Record your logic, ideas, and breakthroughs in one place. Revisit your past work to sharpen your thinking and never lose progress.
        </p>
        <form action="/newentry">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">Get Started
        </button>
        </form>
        </div>
    </div>        
    )
}