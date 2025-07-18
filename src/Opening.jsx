import Card01 from "./cards/Card01"
import Card02 from "./cards/Card02"
import Card03 from "./cards/Card03"
import Card04 from "./cards/Card04"

function Opening (){
    return (
        <>
            <div className="w-full h-[2px] bg-white"></div>
            <section className="w-full min-h-screen bg-gradient-to-br from-[#A3DC9A] to-[#3E5F44] flex flex-col items-center px-4 py-8">
                <h1 className="text-[#152744] text-center text-3xl md:text-4xl lg:text-5xl font-bold mt-6 mb-8 md:mb-12">
                    My Top Openings
                </h1>
                
                <div className="w-full max-w-6xl space-y-8 md:space-y-12">
                    <Card01/>
                    <Card02/>
                    <Card03/>
                    <Card04/>
                </div>
            </section>
        </>
    )
}

export default Opening