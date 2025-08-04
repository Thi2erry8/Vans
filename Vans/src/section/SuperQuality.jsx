import Vans_side from '../assets/images/Vans_7.jpg';

function SuperQuality(){
    return(
        <div className="min-h-screen w-full flex flex-row ">
              <div className="w-1/2 flex flex-col justify-center items-start px-10">
                    <h2 className='text-3xl'>Vans More Than Just <span className='text-red-600 mr-4.5  font-semibold'>Sneakers</span><br/> It's an <span className='text-red-600 mr-4.5 font-semibold'>Experience</span></h2>
                    <p className='text-lg mt-3'>
                        Vans built to last, blending timeless style with flawless quality
                        every pair is a promise of comfort, durability,  and authentic streetwear vibes . 
                        Engineered to withstand daily wear while keeping their iconic look, these sneakers 
                        combine ergonomic comfort, unbeatable durability, and unmatched street style. Whether 
                        you're a streetwear enthusiast or a quality-driven shopper, 
                        every pair embodies Vans rebellious and authentic spirit while delivering 
                        flawless fit and performance year after year
                    </p>
              
              </div>

              <div className="w-1/2 flex items-center justify-center">
                       <img src={Vans_side} className='w-full h-auto rounded-2xl' alt="Vans Shoes" />
              </div>
        </div>
    )
}
export default SuperQuality