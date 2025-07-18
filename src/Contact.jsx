import Nav from "./nav.jsx"
import Footer from "./Footer.jsx"
import github from "./assets/github.svg"

function Contact() {
    return (
        <>
            <Nav />
            <main className="bg-gradient-to-br from-[#D1F7C4] to-[#598F6E] min-h-screen w-full">
                <section className="container mx-auto px-4 py-16">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h1 className="text-5xl md:text-6xl font-bold text-[#152744] mb-6">
                                Get In <span className="text-[#E8FFD7]">Touch</span>
                            </h1>
                            <p className="text-xl text-[#2C3E50] max-w-2xl mx-auto leading-relaxed">
                                Have questions, suggestions, or want to collaborate? We'd love to hear from you!
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="space-y-8">
                                <div className="bg-[#5E936C]/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                                    <h2 className="text-3xl font-bold text-[#E8FFD7] mb-6">Let's Connect</h2>
                                    <div className="space-y-6">
                                        <div className="flex items-center space-x-4">
                                            <div className="w-12 h-12 bg-[#A3DC9A] rounded-full flex items-center justify-center">
                                                <svg className="w-6 h-6 text-[#152744]" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="text-[#E8FFD7] font-semibold">Email</h3>
                                                <p className="text-[#C4E1E6]">contact@chess.me</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-4">
                                            <div className="w-12 h-12 bg-[#A3DC9A] rounded-full flex items-center justify-center">
                                                <img src={github} alt="GitHub" className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className="text-[#E8FFD7] font-semibold">GitHub</h3>
                                                <a 
                                                    href="https://github.com/HAAZIQ-ALI/Chess.ME" 
                                                    className="text-[#C4E1E6] hover:text-[#A3DC9A] transition-colors"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    HAAZIQ-ALI/Chess.ME
                                                </a>
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-4">
                                            <div className="w-12 h-12 bg-[#A3DC9A] rounded-full flex items-center justify-center">
                                                <svg className="w-6 h-6 text-[#152744]" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="text-[#E8FFD7] font-semibold">Support</h3>
                                                <p className="text-[#C4E1E6]">Available 24/7</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#5E936C]/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                                <h2 className="text-3xl font-bold text-[#E8FFD7] mb-6">Send a Message</h2>
                                <form className="space-y-6">
                                    <div>
                                        <label className="block text-[#E8FFD7] font-semibold mb-2">Name</label>
                                        <input 
                                            type="text" 
                                            className="w-full px-4 py-3 rounded-xl bg-[#3E5F44] text-[#E8FFD7] placeholder-[#A3DC9A] border border-[#A3DC9A]/30 focus:border-[#A3DC9A] focus:outline-none transition-colors"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[#E8FFD7] font-semibold mb-2">Email</label>
                                        <input 
                                            type="email" 
                                            className="w-full px-4 py-3 rounded-xl bg-[#3E5F44] text-[#E8FFD7] placeholder-[#A3DC9A] border border-[#A3DC9A]/30 focus:border-[#A3DC9A] focus:outline-none transition-colors"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[#E8FFD7] font-semibold mb-2">Message</label>
                                        <textarea 
                                            rows="5"
                                            className="w-full px-4 py-3 rounded-xl bg-[#3E5F44] text-[#E8FFD7] placeholder-[#A3DC9A] border border-[#A3DC9A]/30 focus:border-[#A3DC9A] focus:outline-none transition-colors resize-none"
                                            placeholder="Tell us about your chess journey or any questions you have..."
                                        ></textarea>
                                    </div>
                                    <button 
                                        type="submit"
                                        className="w-full bg-[#A3DC9A] hover:bg-[#8BC488] text-[#152744] font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Contact
