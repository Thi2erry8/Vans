import Video from '../assets/images/Video.webm'
import Vans1 from '../assets/images/Vans_4.avif';
import Vans2 from '../assets/images/Vans_10.avif';
import Vans3 from '../assets/images/Vans_7.avif';

const Background = ({playStatus,heroCount}) => {

    if(playStatus) {
        return (
            <video className='h-full w-full flo' autoPlay loop muted>
                    <source src={Video} type='video/webm'/>
            </video>
        )
    }
    else if(heroCount===0){
       return (
        <>
        <img src={Vans1} alt="" />
        </>
       )   
    }
    else if(heroCount===1){
       return (
        <>
        <img src={Vans2} alt="" />
        </>
       )  
    }
    else if(heroCount===2){
       return (
        <>
        <img src={Vans3} alt="" />
        </>
       )  
    }
}
export default Background
