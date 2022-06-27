import React, { useEffect, useState } from "react";
import { ethers } from 'ethers';

import {  contractABI, contractAddress } from '../utils/constans'
import { useLayoutEffect } from "react";
import { useSyncExternalStore } from "react";

export const TransactionContaxt = React.createContext();
const { ethereum } = window ;


const getEthereumContract = () => {
   const provider = new ethers.providers.Web3Provider(ethereum);
   const signer = provider.getSigner();
   const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);
    return transactionsContract;
//   console.log({
//    provider,
//    signer,
//    transactionsContract
//   });
}
export const TransactionProvider = ({children}) => {
   const [currentAccount, setCurrentAccount] = useState("");
   const [formData, setFormData] = useState({ addressTo: "", amount: "", keyword: "", message: "" });
   const [isLoading, setIsLoading] = useState(false);
   const [transactionCount, setTransactionCount] = useState(localStorage.getItem("transactionCount"));

   const handleChange = (e, name) => {
      setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
    };

   const checkIfWalletIsConnected = async () => {
 
      try {
         if (!ethereum) return alert('Please install Metamask');
      const account = await ethereum.request({ method : 'eth_accounts' });

      if(account.length){
        setCurrentAccount(account[0]);
        //getAllTransaction()
      }else{
         console.log('NO accounts found')
      }
      console.log(account)
         
      } catch (error) {
         console.log(error);
         throw new error ('No Ethereum object')
      }

      

      }
      const connectWallet = async () =>{
         try {
            if (!ethereum) return alert('Please install Metamask');
            const account = await ethereum.request({ method : 'eth_requestAccounts' });
            setCurrentAccount(account[0]);
            window.location.reload();
         } catch (error) {
            console.log(error);
            throw new error ('No Ethereum object')
         }
      }
      useEffect(() => {
         checkIfWalletIsConnected();
      }, []);


      const sendTransaction = async () => {
         try {
            if (!ethereum) return alert('Please install Metamask');

            const { addressTo, amount, keyword, message } = formData;

          const transactionsContract =  getEthereumContract();
          const parsedAmount = ethers.utils.parseEther(amount);

          await ethereum.request({
            method: "eth_sendTransaction",
            params: [{
               from: currentAccount,
               to: addressTo,
               gas: '0x5208', // 21000 gwei 
               value: parsedAmount._hex,  // we have to convert the decimal number from the form in to a gwei number to be acceptable
            }]
          });
 
          const transactionHash = await transactionsContract.addToBlockchain( addressTo, parsedAmount, message, keyword );   
          
          setIsLoading(true);
          console.log(`Loading - ${transactionHash.hash}`);
          await transactionHash.wait();
          console.log(`Success - ${transactionHash.hash}`);
          setIsLoading(false);

          const transactionsCount = await transactionsContract.getTransactionCount();

          setTransactionCount(transactionsCount.toNumber());
          window.location.reload();

         } catch (error) {
            console.log(error);
            throw new error ('No Ethereum object')
         }
      }
      
   return(
      <TransactionContaxt.Provider value={{ connectWallet, currentAccount, formData,  handleChange, setFormData, sendTransaction }}>
         {children}
      </TransactionContaxt.Provider>
   )
}
