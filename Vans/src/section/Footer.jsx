
function Footer(){
       return(
       <div className="flex flex-col">
              <div className="flex flex-row py-15 justify-evenly">
                    <div className="flex flex-col w-1/5 gap-4 ">
                          <h2 className=" font-bold text-3xl text-red-50">VANS</h2>
                          <p className="text-lg text-red-50">Get shoes ready for the new term at your nearest Nike store. 
                             Find Your perfect Size In Store. Get Rewards
                          </p>
                          <div className="flex flex-row gap-3">
                                <div className="bg-amber-50 rounded-full px-3 py-2"><a href="https://www.facebook.com/VansEurope"><i class="text-2xl font-bold cursor-pointer ri-facebook-line"></i></a></div>
                                <div className="bg-amber-50 rounded-full px-3 py-2"><a href="https://www.instagram.com/vans_europe"><i class="text-2xl font-bold cursor-pointer ri-instagram-line"></i></a></div>
                                <div className="bg-amber-50 rounded-full px-3 py-2"><a href="https://x.com/vans_europe"><i class="text-2xl font-bold cursor-pointer ri-twitter-fill"></i></a></div>
                          </div>
                    </div>

                    <div className="flex flex-col  gap-4">
                          <h2 className="text-3xl text-gray-50">Products</h2>
                          <p className="text-xl text-gray-300 cursor-pointer">Old Skool</p>
                          <p className="text-xl text-gray-300 cursor-pointer">Knu Skool</p>
                          <p className="text-xl text-gray-300 cursor-pointer">Premium Old Skool</p>
                          <p className="text-xl text-gray-300 cursor-pointer">Skate Loafer</p>
                    </div>

                    <div className="flex flex-col gap-4">
                          <h2 className="text-3xl text-gray-50">Help</h2>
                          <p className="text-xl text-gray-300 cursor-pointer">About us</p>
                          <p className="text-xl text-gray-300 cursor-pointer">FAQs</p>
                          <p className="text-xl text-gray-300 cursor-pointer">How it works</p>
                          <p className="text-xl text-gray-300 cursor-pointer">Privacy policy</p>
                          <p className="text-xl text-gray-300 cursor-pointer">Payment policy</p>
                    </div>

                    <div className="flex flex-col gap-4">
                         <h2 className="text-3xl text-gray-50">Get in touch</h2>
                          <p className="text-xl text-gray-300 cursor-pointer">customer@Vans.com</p>
                          <p className="text-xl text-gray-300 cursor-pointer">+92554862354</p>    
                    </div>
              </div>

              <div className="flex flex-row w-full justify-between">
                      <p className="text-gray-300 text-xl"> &copy; Copyright. All rights reserved.</p>
                      <p className="text-gray-300 text-xl">Terms & Conditions</p>
              </div>

        </div>

        )
}
export default Footer