// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.0;
contract transactions{
   uint256 transactionsCounter;

   event Tranfer( address from, address reciver, uint amount, string message, uint256 timestamp, string keyword );
   struct TranferStruct{
      address sender;
      address reciver;
      uint amount;
      string message;
      uint256 timestap;
      string keyword;
   }
   TranferStruct[] transactions;
   //get an 'object' of all the dipendecy that i need for store and register all the transactions

   function addToBlockchain() public {

   }
   function getAllTransactions() public view returns (TranferStruct[] memory) {
// retur transactions
   }
   function getTransactionsCount() public view returns (uint256){
// retourns transactions count
   }
}
