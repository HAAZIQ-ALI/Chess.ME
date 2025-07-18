import { useState } from "react";
import queen from "../assets/queen.gif"

function Card01() {
    return (
        <>
            <div className="bg-[#B0D9B4] w-full max-w-5xl mx-auto flex flex-col items-center rounded-2xl p-6 md:p-8 lg:p-10 border-2 border-[#3E5F44] hover:bg-[#A3DC9A] shadow-md shadow-[#3E5F4466] transition-all duration-500 ease-in-out">
                <img src={queen} alt="Queen's Gambit" className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mt-4" />
                <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-[#2C3E50] mt-6 text-center">The Queen's Gambit</h1>
                <p className="text-base md:text-lg lg:text-xl text-[#445B4F] mt-4 text-center max-w-[90%] px-4 leading-relaxed">
                    The Queen's Gambit is one of the oldest and most reputable 1.d4 openings for White in chess.<br />
                    It starts with the moves 1.d4 d5 2.c4, where White offers a pawn sacrifice to gain control of the center of the board.
                </p>
            </div>
        </>
    )
} 

export default Card01
