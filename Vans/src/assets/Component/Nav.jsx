import VansLogo from '../images/VansLogo.png'
import {navLinks} from '../constants/index'

function Nav(){
  return(
    <header className='bg-white/45  z-15 w-full px-4 fixed'>
           <nav className='flex justify-between items-center
           max-container'>
            <a href="#"> 
              <img className='h-[70px] w-auto' src={VansLogo} alt="" />
            </a>
            <ul className=' flex justify-center items-center gap-16 w-fit max-lg:hidden'>
                 {navLinks.map((item) =>(
                  <li key={item.label}>
                      <a href={item.href} className='text-lg text-slate-900 hover:text-slate-600 ease-in-out' >
                          {item.label}
                      </a>
                  </li>
                 ))

                 }
            </ul>
            <div className='hidden max-lg:block'>
                  <i className="ri-menu-line text-3xl cursor-pointer "></i>
            </div>
            </nav>
    </header>
  )
}
export default Nav 