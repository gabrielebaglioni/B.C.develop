import { AiFillAlipayCircle } from "react-icons/ai";
import{ SiEthereum } from "react-icons/si";
import{ BsInfoCircle } from "react-icons/bs";
import { Loader } from './'
const Welcome = () => {
   const connectWallet = () =>{

   }
   return(
     <div className="w-full flex justify-center items-center ">
        <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
           <div className="flex flex-1 justify-start flex-col md:mr-10">
              <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">Send Crypto 
                <br /> Across The World
              </h1>
              <p className="text-left text-white mt-5 font-light md:w-9/12 w-11/12 text-base">
               Explore the crypro world. Buy and sell cryptocurrencies easely on krypt
              </p>
              <button type="button" onClick={connectWallet}
                       className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]">
                       <p className=" text-white text-base font-black ">Connect Wallet</p>
              </button>
           </div>
        </div>
     </div>
   );
  
}
export default Welcome