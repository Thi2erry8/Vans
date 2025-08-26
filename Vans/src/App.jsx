import './App.css'
import VideoSlide from './section/VideoSlide';
import Hero from './section/Hero';
import PopularProduct from "./section/PopularProduct";
import SuperQuality from "./section/SuperQuality";
import Services from "./section/Services";
import SpecialOffers from './section/SpecialOffer';
import Nav from './assets/Component/Nav';
import Footer from './section/Footer';
import Subscribe from './section/Subscribe'
import CustomerReviews from './section/CustomerReviews'

function App() {
  return (
    <main className='relative'>
           <Nav/> 
           <VideoSlide/>
           <Hero/>
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
 