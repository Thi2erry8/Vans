import { useState } from "react"
import Background from "../assets/Component/Background"
import Swicher from "../assets/Component/Switcher";
function VideoSlide(){
      let heroData = [
          {text1:'Stylish sneakers' , text2:'with recycled materials' },
          {text1:'richly layered design' , text2:'pairs airy textiles' },
          {text1:'Authentic style' , text2:'for every day' }
        ]
        const [heroCount, setHeroCount] = useState(2);
        const [playStatus,setplayStatus] = useState(false)
  return(
       
        <section className="w-full h-screen relative overflow-hidden">
                  <Background playStatus={playStatus} heroCount={heroCount}/>
                  <Swicher
                   heroCount ={heroCount}
                   heroData ={heroData[heroCount]}
                   playStatus={playStatus}
                   setHeroCount={setHeroCount}
                   setplayStatus={setplayStatus}
                  /> 
        </section>
      )
}
export default VideoSlide