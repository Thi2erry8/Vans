import {statistics} from '../assets/constants/index'
import { useState } from 'react';
import Vans1 from '../assets/images/Vans_1.jpg';
import Vans2 from '../assets/images/Vans_2.jpg';
import Vans3 from '../assets/images/Vans_3.jpg';

function Hero(){
       const [bigIMG , setbigIMG] = useState(Vans1) ;
  
        function ChangebigIMG (shoe) {
           setbigIMG(shoe)
       }; 

       const Shoes = [{
                  src: Vans1 ,  
                  index: 1     
               },
               {
                  src: Vans2 ,  
                  index: 2
               },
               {
                  src: Vans3 ,  
                  index: 3
               }] ;
     
       const handleClick = (shoe) => {
             if(bigIMG !== shoe){
                ChangebigIMG(shoe)
             } 
             };  

 
      return (
    <section id="home" className="w-full flex  flex-row justify-center items-center min-h-screen gap-10 max-container px-5">
              <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
                               <p className='text-lg text-red-600'>
                                Ours Best Rated
                                </p>
                          <h1 className='mt-10 text-6xl max-sm:text[72px] max-sm:leading[82]'>
                               <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span>
                               <br/>
                               <span className='text-red-600 mr-4.5'>
                                      Vans 
                               </span>
                                Shoes
                          </h1>
                          <p className='my-8'>An Icon Off The Wall 1966 Since 1977: The Old school</p>
                    <button className="group mb-4 flex justify-center items-center gap-2 px-7 py-4 border text-lg leading-none bg-red-600 rounded-full text-white hover:bg-red-500 ease-out cursor-pointer">
                             Shop Now
                             <span className="flex justify-center items-center px-1 bg-white rounded-full">
                                <i className="ri-arrow-right-line text-red-600  text-xl group-hover:rotate-360 transition-transform duration-500 ease-in-out"></i>
                             </span>
                            
                    </button>

                    <div className="flex justify-start gap-5">
                                  {statistics.map((item,index) =>(
                                      <div key={index} className="">
                                             <p className='text-3xl font-semibold'>{item.value}</p>
                                             <p>{item.label}</p>
                                      </div>
                                   ))} 
                     </div>
            </div>
         
         
            <div className="flex flex-col justify-center items-center">
                 <div className="">
                       <img src={bigIMG} alt="" /* height={610} width={500} */ className=' h-80 w-60 rounded-2xl relative z-10'/>
                 </div>
               
               
                 <div className="mt-4 flex h-[80px] flex-1 flex-row justify-between items-center gap-3">
                        {Shoes.map((shoe) => 
                           <div key={shoe.index} className={` border-2 rounded
                              ${bigIMG === shoe.src ? 'border-red-400' : 'border-transparent'}
                              cursor-pointer max-sm:flex-1
                              `} onClick={() => handleClick(shoe.src)} >
                                 <img src={shoe.src} alt="sneaker picture" className=' h-20' />   
                           </div>
                         )}
                  </div>
            </div>
    </section>
  )
}
export default Hero