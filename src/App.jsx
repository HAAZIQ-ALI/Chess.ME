import { useState } from 'react'
import Nav from "./nav.jsx"
import greenchess from "./assets/greenchess.svg"

function App() {
  return(
    <>
      <Nav/> 
      <main className="bg-gradient-to-br from-[#D1F7C4] to-[#598F6E] min-h-screen w-full">
        <section className="flex flex-col lg:flex-row px-4 lg:px-8 py-8 lg:py-0">
          <div className="bg-[#5E936C] mt-8 lg:mt-20 rounded-3xl p-6 lg:p-8 xl:p-12 order-2 lg:order-1 w-full lg:w-auto lg:mr-8">
            <h1 className="font-bold text-2xl md:text-3xl lg:text-3xl xl:text-4xl text-center text-[#C4E1E6]">
              <span className="text-[#E8FFD7]">Chess</span> has been known as   
            </h1>
            <h1 className="font-bold text-2xl md:text-3xl lg:text-3xl xl:text-4xl text-center text-[#C4E1E6]">
              a tool of military strategy .
            </h1>
            <h1 className="font-bold text-2xl md:text-3xl lg:text-3xl xl:text-4xl text-center pt-4 text-[#C4E1E6]">
              Metaphor for human affairs and  
            </h1>
            <h1 className="font-bold text-2xl md:text-3xl lg:text-3xl xl:text-4xl text-center pt-4 text-[#C4E1E6]">
              a benchmark for <span className="text-[#004030]">Genius</span>
            </h1>
          </div>

          <div className="flex justify-center items-center order-1 lg:order-2 mb-8 lg:mb-0">
            <img 
              src={greenchess} 
              alt="pawn" 
              className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 lg:mt-40" 
            />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
