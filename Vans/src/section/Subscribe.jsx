function Subscribe(){
      return(
        <div className="w-full flex flex-row justify-evenly">
              <div className="w-1/2">
                     <h2 className="text-5xl font-semibold">Sign Up for <span className="text-red-500">Updates</span> & Newsletter</h2>
              </div>

              <div className="rounded-full w-2/6 flex flex-row justify-end items-center border-1 border-gray-600 px-5" >
                    <input className="border-none" type="text" placeholder="SubscribeVans@.com" /> 
                    <div className="rounded-full bg-red-500 p-2.5 text-red-50 text-xl font-semibold">Sign Up</div>
              </div>
        </div>
      )
}
export default Subscribe