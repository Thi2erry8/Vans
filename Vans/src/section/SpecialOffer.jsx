function SpecialOffer(){
        return(
            <div className="h-screen flex flex-row w-full">
                <div className="h-1/2 w-1/2">
                        <div className="grid grid-cols-3 grid-rows-3 gap-3 h-full w-full">
                              <div className="col-span-1 row-span-2 bg-gray-700 rounded-2xl text-white">Affiche1</div>
                              <div className="col-span-1 row-span-2 bg-gray-700 rounded-2xl text-white">Affiche2</div>
                              <div className="col-span-3 row-span-3 bg-gray-700 rounded-2xl text-white">Affiche3</div>
                        </div>
                   </div>
            </div>
        )
} 
export default SpecialOffer