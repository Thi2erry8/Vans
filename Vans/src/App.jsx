import './App.css'
import Hero from './section/Hero'
import PopularProduct from "./section/PopularProduct";
import SuperQuality from "./section/";
import Services from "./section/Services";
import SpecialOffers from './section/SpecialOffer';
import SuperQuality from './section/SuperQuality';
import Nav from './Component/Nav';
import Footer from './section/Footer'
import Subscribe from './section/Subscribe'


function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='relative'>
           <Nav/> 
           <section className='xl:padding-1 wide:padding-r padding-b'>
                 <Hero/> 
           </section>
           <section className='padding'>
                 <PopularProduct/>  
           </section>
           
           <section className='padding'>
                 <SuperQuality/> 
           </section>

           <section className='padding-x py-10'>
                  <Services/>
           </section>

           <section className='padding'>
                <SpecialOffers/> 
           </section>

           <section className='bg-pale-blue padding'>
                 <CustomerReviews/>  
           </section>
           <section className='padding'>
                 <Subscribe/>  
           </section>
           <section className='bg-black padding-x paddint-t pb-8'>
                 <Footer/>  
           </section>
    </main>
  )
}

export default App
 