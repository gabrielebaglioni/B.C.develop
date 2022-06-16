import React, { useEffect, useState } from "react";
import { ethers } from 'ethers';

import {  contractABI, contractAddres } from '../utils/constans'
import { useLayoutEffect } from "react";
import { useSyncExternalStore } from "react";

export const TransactionContaxt = React.createContext();
const { ethereum } = window ;


const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract( contractAddres, contractABI, signer );
  console.log({
   provider,
   signer,
   transactionContract
  });
}
export const TransactionProvider = ({children}) => {
   const [currentAccount, setCurrentAccount] = useState("");
   const checkIfWalletIsConnected = async () => {
      if (!ethereum) return alert('Please install Metamask');
      const account = await ethereum.request({ method : 'eth_accounts' });

      if(account.length){
        setCurrentAccount(account[0]);
        //getAllTransaction()
      }
      console.log(account)

      }
      const connectWallet = async () =>{
         try {
            if (!ethereum) return alert('Please install Metamask');
            const account = await ethereum.request({ method : 'eth_requestAccounts' });
            setCurretAccount(account[0]);
         } catch (error) {
            console.log(error);
            throw new error ('No Ethereum object')
         }
      }
      useEffect(() => {
         checkIfWalletIsConnected();
      }, []);
      
   return(
      <TransactionContaxt.Provider value={{ connectWallet }}>
         {children}
      </TransactionContaxt.Provider>
   )
}
