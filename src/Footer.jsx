import {useState} from "react"

function Footer (){
    return(
        <>
            <footer className="w-full bg-[#2A3E2F] text-[#D1F7C4] py-8 px-4 text-center">
                <h2 className="text-base md:text-lg font-bold mb-6 max-w-4xl mx-auto"> 
                    Hey, I'm <a href="https://github.com/HAAZIQ-ALI" target="_blank" rel="noopener noreferrer"><span className="text-[#a9f192] hover:underline">Haaziq</span></a> — 15-year-old developer, I like Programming, Chess and Anime
                </h2>
                <p className="text-sm mt-2 mb-5">written on 17 july 2025.</p>
                <p className="text-sm">© 2025 Haaziq Ali. All rights reserved.</p>
            </footer>
        </>
    )
}

export default Footer
