import React, { useEffect, useState } from "react";
import { ethers } from 'ethers';

import {  contractABI, contractAddres } from '../utils/constans'

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
   return(
      <TransactionContaxt.Provider value={{ value: 'text' }}>
         {children}
      </TransactionContaxt.Provider>
   )
}
