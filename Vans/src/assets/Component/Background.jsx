import Video from '../images/Video.webm'
import Vans1 from '../images/Vans_4.avif';
import Vans2 from '../images/Vans_10.avif';
import Vans3 from '../images/Vans_7.jpg';

const Background = ({playStatus,heroCount}) => {

    if(playStatus) {
        return (
            <video className='h-full w-full float-left top-0 left-0 right-0 bottom-0 absolute p-0 object-cover z-[-1]' autoPlay loop muted>
                    <source src={Video} type='video/webm'/>
            </video>
        )
    }
    else if(heroCount===0){
       return (
        <>
        <img className='h-full w-full float-left top-0 left-0 right-0 bottom-0 absolute p-0 object-cover z-[-1]' src={Vans1} alt="" />
        </>
       )   
    }
    else if(heroCount===1){
       return (
        <>
        <img className='h-full w-full float-left top-0 left-0 right-0 bottom-0 absolute p-0 object-cover z-[-1]' src={Vans2} alt="" />
        </>
       )  
    }
    else if(heroCount===2){
       return (
        <>
        <img className='h-full w-full float-left top-0 left-0 right-0 bottom-0 absolute p-0 object-cover z-[-1]' src={Vans3} alt="" />
        </>
       )  
    }
}
export default Background
