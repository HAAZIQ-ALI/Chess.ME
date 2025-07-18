import Nav from "./nav.jsx"
import Footer from "./Footer.jsx"
import king from "./assets/king.gif"

function About() {
    return (
        <>
            <Nav />
            <main className="bg-gradient-to-br from-[#D1F7C4] to-[#598F6E] min-h-screen w-full">
                <section className="container mx-auto px-4 py-16">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h1 className="text-5xl md:text-6xl font-bold text-[#152744] mb-6">
                                About <span className="text-[#E8FFD7]">Chess.Me</span>
                            </h1>
                            <p className="text-xl text-[#2C3E50] max-w-3xl mx-auto leading-relaxed">
                                Your gateway to mastering the royal game of chess through strategic learning and practice.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                            <div className="space-y-6">
                                <div className="bg-[#5E936C]/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                                    <h2 className="text-3xl font-bold text-[#E8FFD7] mb-4">Our Mission</h2>
                                    <p className="text-[#C4E1E6] text-lg leading-relaxed">
                                        Chess.Me is dedicated to making chess education accessible and engaging for players of all skill levels. 
                                        We believe that chess is more than just a game – it's a tool for developing critical thinking, 
                                        strategic planning, and mental discipline.
                                    </p>
                                </div>

                                <div className="bg-[#5E936C]/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                                    <h2 className="text-3xl font-bold text-[#E8FFD7] mb-4">What We Offer</h2>
                                    <ul className="text-[#C4E1E6] text-lg space-y-3">
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-[#A3DC9A] rounded-full mr-3"></span>
                                            Comprehensive opening theory and analysis
                                        </li>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-[#A3DC9A] rounded-full mr-3"></span>
                                            Interactive learning experiences
                                        </li>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-[#A3DC9A] rounded-full mr-3"></span>
                                            Strategic insights from grandmaster games
                                        </li>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-[#A3DC9A] rounded-full mr-3"></span>
                                            Community-driven learning platform
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-[#A3DC9A] rounded-full blur-3xl opacity-30 scale-110"></div>
                                    <img 
                                        src={king} 
                                        alt="Chess King" 
                                        className="relative w-80 h-80 md:w-96 md:h-96 object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#3E5F44]/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl text-center">
                            <h2 className="text-3xl font-bold text-[#E8FFD7] mb-6">Join Our Chess Community</h2>
                            <p className="text-[#C4E1E6] text-lg mb-8 max-w-3xl mx-auto">
                                Whether you're a beginner taking your first steps or an advanced player looking to refine your skills, 
                                Chess.Me provides the tools and knowledge you need to elevate your game. Join thousands of chess 
                                enthusiasts who have chosen us as their learning companion.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-[#A3DC9A] hover:bg-[#8BC488] text-[#152744] font-bold py-3 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105">
                                    Start Learning
                                </button>
                                <button className="border-2 border-[#A3DC9A] text-[#A3DC9A] hover:bg-[#A3DC9A] hover:text-[#152744] font-bold py-3 px-8 rounded-2xl transition-all duration-300">
                                    Explore Openings
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default About
