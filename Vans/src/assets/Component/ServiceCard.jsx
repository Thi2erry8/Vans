function ServiceCard( {iconName , title , text} ){
    return(
        <div  className="flex flex-col w-65.5 h-65.5 items-start justify-center border border-red-400 p-3 rounded-2xl">
             <span className=""><i className={iconName} ></i></span> 
              <h2 className="">{title}</h2>
              <p className="">{text}</p>
        </div>
    )
}
export default ServiceCard