 import { HiMenuAlt4 } from 'react-icons/hi';
 import{ AiOutlineClose } from 'react-icons/ai';
 import {useState} from 'react';
 import logo from '../../img/logo.png';
 const NavbarItems = ({title, classProps}) =>{
   return(
      <li className={`mx-4 cursor-pointer ${classProps}`}>
         {title}
      </li>
   )
 }
const Navbar = () => {
 const [toggleMenu, setToggleMenu] =useState(false)
   return(
      <nav className='w-full flex md:justify-centre lg:justify-center md:justify-evenly  justify-between items-center p-4  '>
         <div className='md:flex-[0.5] flex-initial justify-centre items-center'>
            <img src={logo} alt="logo" className='w-32 cursor-pointer' />
         </div>
         <ul className=' text-white md:flex hidden list-none flex-row justify-between items-center flex-initial  '>
           {['Market', 'Exchange', 'Tutorials', 'Wallets'].map((items, index) => (
              <NavbarItems key={items + index} title={items}/>
           ))}
           <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]'>
            login
           </li>
         </ul>
         <div className='flex-relative'>
            {toggleMenu
             ? <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer " onClick={() => setToggleMenu(false )} />
             : <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer " onClick={() => setToggleMenu(true)} />
            }
            {toggleMenu &&(
               <ul>
                  <li className=' text-xl w-full my-2 '>
                     <AiOutlineClose onClick={() => setToggleMenu(false) }/>
                  </li>
                  {['Market', 'Exchange', 'Tutorials', 'Wallets'].map((items, index) => (
                       <NavbarItems key={items + index} title={items} classProps='my-2 text-lg' />
                   ))}
               </ul>
            )}

         </div>
      </nav>
   );
  
}
export default Navbar