import Footer from "../components/footer";
import HeroSection from "../components/HeroSection";

export default function Homepage(){
    return(
        <>
        <HeroSection/>
        <div className="text-white pt-20 text-center px-9 sm:px-9 md:px-72">
            <h1 className="text-3xl  md:text-5xl pt-20 sm:pt-20 md:pt-28 font-bold mb-6 ">Capture Every <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Breakthrough</span></h1>
            <p className="text-xl pb-10 md:text-xl sm:text-xl text-[#ccc9dc] mb-6 ">Transform scattered thoughts into structured insights with our intelligent recording system</p>
        </div>
        <div className="flex flex-wrap justify-center text-white" >
            <div className="box1">
            <img src="/lightbulb.png" alt="" />
            <h3>Idea Capture</h3>
            <p>Instantly record fleeting thoughts and breakthrough moments before they disappear</p>
            </div>
            <div className="box1">
            <img src="/book.png" alt="" />
             <h3>Logic Tracking</h3>
            <p>Document your reasoning process and decision-making patterns over time</p>   
            </div>
            <div className="box1">
            <img src="/rise.png"  alt="" />
              <h3>Progress Visualization</h3>
            <p>See how your thinking evolves and identify patterns in your breakthrough moments</p>  
            </div>
            <div className="box1">
            <img src="/brain.png"   alt="" />
              <h3>Smart Connections</h3>
            <p>AI-powered linking between related ideas and concepts across your entries</p>  
            </div>
            <div className="box1">
            <img src="/flashlight.png"  alt="" />
              <h3>Quick Access</h3>
            <p>Lightning-fast search and retrieval of your past insights when you need them most</p>  
            </div>
            <div className="box1">
            <img src="/group.png"  alt="" />
                <h3>Collaborative Thinking</h3>
            <p>Share selected insights with team members and build on collective knowledge</p>
            </div>
        </div>
        <div className="text-white text-center p-6">
            <h2 className="text-3xl md:text-4xl font-bold p-5 pt-20" >Built for real progress, not vanity metrics</h2>
            <p className="px-9 pb-5 md:text-xl sm:text-xl sm:px-9 text-[#ccc9dc] md:px-72 fw-4 text-[1.06rem]" >AlgoVoice helps you focus on actual learning, giving clear feedback and steady growth instead of empty numbers.</p>
        </div>
        <div className="flex flex-wrap justify-center text-white">
             <div className="box1">
            <img src="/target.png" alt="" />
            <h3>Personalized Learning</h3>
            <p>Get tailored feedback based on your voice input and coding style, so your practice matches your needs.</p>
            </div>
            <div className="box1">
            <img src="/stopwatch.png" alt="" />
             <h3>Save Time</h3>
            <p>Skip the endless searching. Get quick explanations and error fixes right when you need them.</p>   
            </div>
            <div className="box1">
            <img src="/link.png"  alt="" />
              <h3>Connect Concepts</h3>
            <p>See how different DSA topics link together, making it easier to understand the bigger picture.</p>  
            </div>
        </div>

        <div className="flex flex-wrap justify-center text-white text-center pt-10">
            <div className="last-sec m-10 border-0.5 mb-20 border-gray-300/40">

                <h1 className="text-4xl md:text-4xl sm:text-2xl font-bold pt-10 pb-5">Never Lose Another <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Breakthrough</span></h1>

                 <p className="text-xl px-5  md:px-40 sm:px-20 md:text-xl sm:text-lg text-[#ccc9dc] mb-6 ">Join thousands of thinkers, researchers, and innovators who trust AlgoVoice to capture and nurture their most valuable ideas.</p>
                <div className="flex justify-center flex-wrap gap-2 py-3">
                <input placeholder="Enter your email address" type="email" className="rounded-lg py-2 md:w-[25rem] sm:w-[20rem] px-5 bg-gray-700  border border-gray-300" />
                <button className="group bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 mt-3 md:mt-0 sm:mt-3 rounded-lg transition flex items-center" >Start free trial</button>
                </div>
                <p className="py-6">⭐ Free 14-day trial • No credit card required</p>
            </div>
        </div>
        <Footer/>
        </>
    )
}