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
   // return transactionsContract;
  console.log({
   provider,
   signer,
   transactionsContract
  });
}
export const TransactionProvider = ({children}) => {
   const [currentAccount, setCurrentAccount] = useState("");
   const [formData, setFormData] = useState({ addressTo: "", amount: "", keyword: "", message: "" });


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

            getEthereumContract();
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
