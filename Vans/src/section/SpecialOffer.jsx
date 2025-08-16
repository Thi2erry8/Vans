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
                              <div className="col-span-2 row-span-3 bg-gray-700 rounded-2xl text-white bg-cover bg-[position:20%_60%]"
                              style={{backgroundImage: `url(${Vans3})`}}></div>
                        </div>
                </div>
                <div className=" flex flex-col items-center justify-center h-1/2 w-1/2">
                      <h2><span>Special</span> Offer</h2>
                     
                      <p>Embark on a shopping journey that redefines your experiece
                         with unbeateble deals. From premier selections to incredible save
                         we offer unparalled value that set us apart
                      </p>

                      <p>Navigate a realm of possibilities designed to fullfil your uniques desires,
                        surpassing the lofties expectations. Your journey with us is nothing short of exceptional
                      </p>
                      <div className="flex flex-row gap-2">
                          <button className="group mb-4 flex justify-center items-center gap-2 px-7 py-4 border text-lg leading-none bg-red-600 rounded-full text-white hover:bg-red-500 ease-out cursor-pointer">
                                     Shop Now
                                    <span className="flex justify-center items-center px-1 bg-white rounded-full">
                                    <i className="ri-arrow-right-line text-red-600  text-xl group-hover:rotate-360 transition-transform duration-500 ease-in-out"></i>
                                    </span> 
                           </button>

                           <button className='border border-gray-500 text-gray-500 mb-4 flex justify-center items-center gap-2 px-7 py-4 text-lg rounded-full'>
                                     <p>Learn more</p>
                           </button>
                      </div>
                </div>
            </div>
        )
} 
export default SpecialOffer