import ServiceCard from "../assets/Component/ServiceCard"
function Services(){
    
    const serviceDetails = [
                               {
                                iconName : "ri-flight-takeoff-line" ,
                                title : "Free Shipping",
                                text : "enjoy seamless shooping with our complimentary shipping service",
                                id: 1
                               },

                               {
                                iconName : "ri-shield-cross-line" ,
                                title : "Secure Payment",
                                text : "Experience worry-free transactions with our secure payments options",
                                id : 2
                               },

                               {
                                iconName : "ri-hand-heart-fill" ,
                                title : "Love to help you",
                                text : "Our dedicated team is here to assist you every step of the way",
                                id:3
                               }
                           ]



    return(
        <div className="h-fit w-full flex flex-row justify-between items-center ">
              {serviceDetails.map((servdetail)=>(
                 <ServiceCard key={servdetail.id} iconName={servdetail.iconName} title={servdetail.title} text={servdetail.text} />
              ))}
        </div>
    )
}
export default Services