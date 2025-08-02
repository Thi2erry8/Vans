import Vans1 from '../assets/images/Vans_1.jpg';
import Vans2 from '../assets/images/Vans_2.jpg';
import Vans3 from '../assets/images/Vans_3.jpg';
function PopularProducts(){
    
    const products = [
        {
            imgUrL : Vans1,
            name: "Vans #1",
            price: "$150.00",
            rating: '4.1'
        },
        {
            imgUrL : Vans2,
            name: "Vans #2",
            price: "$1350.00",
            rating: '4.5'
        },
        {
            imgUrL : Vans3,
            name: "Vans #3",
            price: "$115.00",
            rating: '4.8'
        }
    ];
    
    
    return(
            <section id='products' className='max-container max-sm:mt-12'>
                      <div className="flex flex-col justify-start gap-5">
                            <h2 className='text-4xl '>
                                <span className='text-red-600 mr-0.5'>Popular </span> 
                                Products
                            </h2>
                            <p className='lg:max-w-lg mt-2 text-slate-400'>
                                Experience top-notch quality and
                               style with our sought-after selections . 
                               Discover a word of comfort , design , and value
                            </p>
                      </div>
                      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
                            {products.map((product , index)=>(
                                <>
                                <div className='flex flex-1 flex-col w-full max-sm:w-full'  key={index}>
                                      <img className='w-[280px] h-[280px]'
                                      src={product.imgUrL} alt={product.name} />
                                      <div className="mt-4 flex justify-start gap-2.5">
                                            <p className='text-xl text-slate-500'>{product.rating}</p>
                                      </div>  
                                        <h3 className='text-xl font-semibold text-slate-600'>{product.name}</h3>
                                        <p className='text-red-600'>{product.price}</p>
                                </div>
                                </>
                            ))}
                      </div>
            </section>
        )
}
export default PopularProducts