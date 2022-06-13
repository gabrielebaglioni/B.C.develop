import { AiFillAlipayCircle } from "react-icons/ai";
import{ SiEthereum } from "react-icons/si";
import{ BsInfoCircle } from "react-icons/bs";
import { Loader } from './'
const Welcome = () => { 

   const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";
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
              <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10 ">
                <div className={`rounded-tl-2xl ${commonStyles}`}>
                    Reliability
                </div>
                <div className={commonStyles}>
                    Security
                </div>
                <div className={`rounded-tr-2xl ${commonStyles}`}>
                    Ethereum
                </div>
                <div className={`rounded-bl-2xl ${commonStyles}`}>
                    web 3.0
                </div>
                <div className={commonStyles}>
                    Low Fees
                </div>
                <div className={`rounded-br-2xl ${commonStyles}`}>
                    Blockchain
                </div>
              </div>
           </div>
           <div className="flex flex-1 flex-col items-center justify-center w-full md:mt-0 mt-10 ">
              <div className="p-3 justify-end items-start flex-col rounded-xl h-40 w-full sm:w-72 my-5 eth-card white-glassmorpism ">

              </div>
           </div>
        </div>
     </div>
   );
  
}
export default Welcome