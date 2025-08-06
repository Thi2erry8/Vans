function ServiceCard (iconName , title , text){
    return(
        <div className="flex flex-col">
             <span className=""><i className={iconName} ></i></span> 
              <h2 className="">{title}</h2>
              <p className="">{text}</p>
        </div>
    )
}
export default ServiceCard