import customer_1 from '../assets/images/Customer_1.jpg'
import customer_2 from '../assets/images/Customer_2.jpg'
function CustomerReviews(){
  const customers = [{  
                       ProfilPic : customer_1,
                       Name:"Jason Paul",
                       Review:"The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
                       rating: " 4.2"
                    },
                     {  
                       ProfilPic : customer_2,
                       Name:"Cecil Grayson",
                       Review:"The product not only met but exceeded my expectations.I'll definitely be a returning customer!",
                       rating: " 4.8"
                    }
                    ];
    return(
             <div className="h-screen w-full flex flex-col  items-center justify-center">
            <div className="w-1/2 flex flex-col items-center justify-center gap-2">
                   <h2 className="text-4xl">What <span className="text-red-500 font-semibold">Our Customers</span> Say ?</h2>
                   <p className="text-center text-gray-500 text-xl">
                      Hear genuine stories from our satisfied customers about 
                      their exceptional experiences with us.
                   </p>
            </div>
            <div className="w-full flex flex-row h-3/4 justify-evenly">
                      {customers.map((customer) =>(
                        <div key={customer.Name} className=" w-2/5 flex flex-col items-center justify-center gap-1.5">
                              <img className='rounded-full h-[150px] w-[150px]' src={customer.ProfilPic} alt={`picture of ${customer.Name}`} />
                              <p className='text-3xl font-bold'>{customer.Name}</p>
                              <p className='text-lg text-gray-500'><i className="ri-star-fill text-red-500"></i>{customer.rating}</p>
                              <p className='text-center text-gray-500 text-xl'>{customer.Review}</p>
                        </div>  
                      ))}
            </div>
     </div>
    )
}
export default CustomerReviews