import VansLogo from '../images/VansLogo.png'
import {navLinks} from '../constants/index'

function Nav(){
  return(
    <header className=' absolute z-10 w-full'>
           <nav className='flex justify-between items-center
           max-container'>
            <a href="#"> 
              <img className='h-[70px] w-auto' src={VansLogo} alt="" />
            </a>
            <ul className=' flex justify-center items-center gap-16 w-fit'>
                 {navLinks.map((item) =>(
                  <li key={item.label}>
                      <a href={item.href} className='text-lg text-slate-600' >
                          {item.label}
                      </a>
                  </li>
                 ))

                 }
            </ul>
            </nav>
    </header>
  )
}
export default Nav 