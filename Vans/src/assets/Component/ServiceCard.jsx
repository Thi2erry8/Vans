function ServiceCard( {iconName , title , text} ){
    return(
        <div  className="flex flex-col w-65.5 h-65.5 items-start justify-center shadow-xl p-3 rounded-2xl gap-4">
             <span className="rounded-2xl bg-red-500 px-2 py-0.5 text-lg text-white"><i className={iconName} ></i></span> 
              <h2 className="font-bold text-lg">{title}</h2>
              <p className="text-gray-500">{text}</p>
        </div>
    )
}
export default ServiceCard