import Vans1 from '../assets/images/Vans_9.avif';
import Vans2 from '../assets/images/Vans_11.avif';
import Vans3 from '../assets/images/Vans_10.avif';

function SpecialOffer(){
        return(
            <div className="h-screen flex flex-row w-full">
                <div className="h-1/2 w-1/2">
                        <div className="grid grid-cols-2 grid-rows-4 gap-3 h-full w-full">
                              <div className="col-span-1 row-span-2 bg-cover bg-center rounded-2xl text-white"
                              style={{backgroundImage: `url(${Vans1})`}}></div>
                              <div className="col-span-1 row-span-2 bg-gray-700 rounded-2xl text-white bg-cover bg-bottom"
                              style={{backgroundImage: `url(${Vans2})`}}></div>
                              <div className="col-span-2 row-span-3 bg-gray-700 rounded-2xl text-white bg-cover bg-center"
                              style={{backgroundImage: `url(${Vans3})`}}></div>
                        </div>
                </div>
                <div className="h-screen flex flex-row w-full">
                      
                </div>
            </div>
        )
} 
export default SpecialOffer