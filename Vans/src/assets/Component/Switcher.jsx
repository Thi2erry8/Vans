export default function Switcher({heroCount ,heroData, playStatus,setHeroCount,setplayStatus}) {
  return (
    <div className="absolute z-10 w-full h-full flex flex-col items-center justify-end gap-40">
          <div className="text-7xl text-outline">
                <p className="text-white text-5xl font-extrabold">{heroData.text1}</p>
                <p className="text-white text-5xl font-extrabold">{heroData.text2}</p>
          </div>
          <div className="w-full flex flex-row justify-between items-center pb-7 px-9">
                <div className="">
                     <ul className="flex flex-row gap-2">
                            <li onClick={()=>setHeroCount(0)} className={heroCount===0?"w-3 h-3 border-2 border-red-500 cursor-pointer bg-red-500 rounded-2xl":" rounded-2xl w-3 h-3 border-2 border-red-500 cursor-pointer"}></li>
                            <li onClick={()=>setHeroCount(1)} className={heroCount===1?"w-3 h-3 border-2 border-red-500 cursor-pointer bg-red-500 rounded-2xl":" rounded-2xl w-3 h-3 border-2 border-red-500 cursor-pointer"}></li>
                            <li onClick={()=>setHeroCount(2)} className={heroCount===2?"w-3 h-3 border-2 border-red-500 cursor-pointer bg-red-500 rounded-2xl":" rounded-2xl w-3 h-3 border-2 border-red-500 cursor-pointer"}></li>
                      </ul>
                </div>
                <div className="cursor-pointer text-red-500 text-4xl bg-red-50 rounded-full flex flex-row items-center justify-center">
                      <p className="ml-1.5 " onClick={()=>setplayStatus(!playStatus)}><i className={playStatus?"ri-pause-fill":"ri-play-line"}></i></p>
                </div>
          </div>
    </div>
  )
}
