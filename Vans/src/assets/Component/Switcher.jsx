export default function Switcher({heroCount ,heroData, playStatus,setHeroCount,setplayStatus}) {
  return (
    <div className="">
          <div className="">
                {heroData.text1}
                {heroData.text2}
          </div>
          <div className="">
                <ul className="">
                     <li onClick={()=>setHeroCount(0)} className={heroCount===0?"":""}></li>
                     <li onClick={()=>setHeroCount(1)} className={heroCount===1?"":""}></li>
                     <li onClick={()=>setHeroCount(2)} className={heroCount===2?"":""}></li>
                </ul>
          </div>
          <div className="">
                <p></p>
          </div>
    </div>
  )
}
