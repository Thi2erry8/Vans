import Vans1 from '../assets/images/Vans_4.avif';
import Vans2 from '../assets/images/Vans_5.avif';
import Vans3 from '../assets/images/Vans_6.avif';
function PopularProducts(){
    
    const products = [
        {
            imgUrL : Vans1,
            name: "Old School Black",
            price: "$150.00",
            rating: '4.1',
            id: 1
        },
        {
            imgUrL : Vans2,
            name: "Old School Sky Blue",
            price: "$130.00",
            rating: '4.5',
            id: 2
        },
        {
            imgUrL : Vans3,
            name: "Old School Navy Green",
            price: "$115.00",
            rating: '4.8',
            id: 3
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
                            {products.map((product)=>(
                                <div className='flex flex-1 flex-col w-full max-sm:w-full'  key={product.id}>
                                      <img className='w-auto h-[280px]'
                                      src={product.imgUrL} alt={product.name} />
                                      <div className="mt-4 flex justify-start gap-2.5">
                                            <p className='text-xl text-slate-500'><i className="text-red-600 mr-1 ri-star-fill"></i>{product.rating}</p>
                                      </div>  
                                        <h3 className='text-xl font-semibold text-slate-600'>{product.name}</h3>
                                        <p className='text-red-600'>{product.price}</p>
                                </div>
                            ))}
                      </div>
            </section>
        )
}
export default PopularProducts