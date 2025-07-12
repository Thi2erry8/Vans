function Hero(){
  return (
    <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container border-2  border-red-500">
              <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
                               <p>Ours Best Rated</p>
                          <h1>
                               <span>The New Arrival</span>
                               <br/>
                               <span>Vans Shoes</span>
                          </h1>
                          <p>An Icon Since 1977: The Old school</p>
                    <button className="flex justify-center items-center gap-2 px-7 py-4 border text-lg leading-none bg-red-600 rounded-full text-white">
                             Shop Now
                             <span className="flex justify-center items-center px-1 bg-white rounded-full">
                                <i className="ri-arrow-right-line text-red-600 rounded-full text-xl bg-white"></i>
                             </span>
                            
                    </button>
            </div>
    </section>
  )
}
export default Hero