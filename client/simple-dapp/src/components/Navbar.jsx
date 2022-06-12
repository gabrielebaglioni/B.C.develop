 import { HiMenuAlt4 } from 'react-icons/hi';
 import{ AiOutlineClose } from 'react-icons/ai'
 import logo from '../../img/logo.png'
const Navbar = () => {
   return(
      <nav className='w-ful flex md:justify-centre justify-between items-centre p-4  '>
         <div className='md:flex-[0.5] flex-initial justify-centre items-centre'>
            <img src={logo} alt="logo" className='w-32 cursor-pointer' />
         </div>
      </nav>
   );
  
}
export default Navbar