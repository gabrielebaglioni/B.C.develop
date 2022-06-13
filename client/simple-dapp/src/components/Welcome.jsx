import React, { useContext} from 'react';
import { AiFillAlipayCircle } from "react-icons/ai";
import{ SiEthereum } from "react-icons/si";
import{ BsInfoCircle } from "react-icons/bs";
import { TransactionContaxt  } from "../context/TransactionContext";
import { Loader } from './';
const Welcome = () => { 
   const {value} = useContext(TransactionContaxt);
   console.log(value);

   const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";
   const Imput = ({placeholder, type, name,  value, handleChange}) => (
      <input
       type={type} 
       placeholder={placeholder}
       step="0.00001"
       value={value}
       onChange={(e) => handleChange(e, name)}
       className='my-2 w-full rounded-md p-2 outline-none bg-trasparent text-white border-none text-sm white-glassmorphism'
       />
       
   );
   const handleSubmit = () =>{

   }
   const connectWallet = () =>{
    
   } 
    
   return(
     <div className="w-full flex justify-center items-center ">
        <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
           <div className="flex flex-1 justify-start flex-col mf:mr-10">
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
           <div className="flex flex-1 flex-col items-center justify-center w-full mf:mt-0 mt-10 ">
              <div className="p-3 justify-end items-start flex-col rounded-xl h-40 w-full sm:w-72 my-5 eth-card white-glassmorpism ">
                 <div className="flex justify-between flex-col w-full h-full">
                    <div className="flex justify-between items-start">
                       <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                          <SiEthereum fontSize={21} color='fff'/>
                       </div>
                          <BsInfoCircle fontSize={17} color='fff' />
                    </div>
                    <div>
                        <p className="text-white font-light text-sm">
                           Address
                        </p>
                        <p className="text-white font-semibold text-lg mt-1">
                           Ethereum
                        </p>
                    </div>
                 </div>
              </div>
              <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
                 <Imput placeholder="Addres To" name="addresTo" type="text" handleChange={() => {}} />
                 <Imput placeholder="Amount (ETH)" name="amount" type="number" handleChange={() => {}} />
                 <Imput placeholder="Keyword (Gif)" name="keyword " type="text" handleChange={() => {}} />
                 <Imput placeholder="Enter Message" name="message " type="text" handleChange={() => {}} />
                 <hr className="h-[1px] w-full border-gray-400 my-2"/>
                 {false?(
                  <Loader/>
                 ) : (
                  <button
                   type="button"
                   onClick={handleSubmit}
                   className= "text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer "
                  >
                    Send Now
                  </button>
                 )}
              </div>
           </div>
        </div>
     </div>
   );
  
}
export default Welcome