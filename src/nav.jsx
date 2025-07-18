import { useState } from "react"
import github from "./assets/github.svg"

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            <nav className="bg-[#3E5F44] flex flex-col md:flex-row justify-between items-center h-auto md:h-[15%] w-full px-4 py-4">
                {/* Logo and Mobile Menu Button */}
                <div className="flex justify-between items-center w-full md:w-auto"> 
                    <h1 className="font-bold text-3xl md:text-4xl text-[#E8FFD7]">Chess.Me</h1>
                    
                    {/* Mobile menu button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-[#A3DC9A] hover:text-[#E8FFD7] focus:outline-none"
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex bg-[#3d6344] rounded-4xl">
                    <ul className="font-bold text-2xl lg:text-3xl p-4 gap-2 text-[#A3DC9A] text-center pr-8 flex space-x-4">
                        <li><a href="#" className="hover:text-[#E8FFD7] transition-colors">Home</a></li>
                        <li><a href="#" className="hover:text-[#E8FFD7] transition-colors">Openings</a></li>
                        <li><a href="#" className="hover:text-[#E8FFD7] transition-colors">Contact</a></li>
                    </ul>
                </div>

                {/* GitHub Link */}
                <div className="hidden md:block">
                    <a href="https://github.com/HAAZIQ-ALI/Chess.ME" target="_blank" rel="noopener noreferrer">
                        <img src={github} alt="my github" className="h-8 w-8 lg:h-10 lg:w-10 hover:scale-110 transition-transform" />
                    </a>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden w-full mt-4 bg-[#3d6344] rounded-2xl overflow-hidden">
                        <ul className="py-4 space-y-2">
                            <li>
                                <a href="#" className="block px-6 py-3 text-[#A3DC9A] hover:text-[#E8FFD7] hover:bg-[#5E936C] transition-colors font-bold">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block px-6 py-3 text-[#A3DC9A] hover:text-[#E8FFD7] hover:bg-[#5E936C] transition-colors font-bold">
                                    Openings
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block px-6 py-3 text-[#A3DC9A] hover:text-[#E8FFD7] hover:bg-[#5E936C] transition-colors font-bold">
                                    Contact
                                </a>
                            </li>
                            <li className="px-6 py-3">
                                <a href="https://github.com/HAAZIQ-ALI/Chess.ME" target="_blank" rel="noopener noreferrer" className="flex items-center text-[#A3DC9A] hover:text-[#E8FFD7] transition-colors">
                                    <img src={github} alt="GitHub" className="h-6 w-6 mr-2" />
                                    GitHub
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </>
    )
}

export default Nav
