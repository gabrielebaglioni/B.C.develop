// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.0;
contract transactions{
   uint256 transactionsCount;

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

   function addToBlockchain( address payable reciver, uint amount, string memory message, string memory keyword ) public {
      transactionsCount += 1;
      transactions.push(TranferStruct(msg.sender, reciver, amount, message, block.timestamp, keyword));

      emit Tranfer(msg.sender, reciver, amount, message, block.timestamp, keyword);
   }
   function getAllTransactions() public view returns (TranferStruct[] memory) {
// retur transactions
      return transactions;
   }
   function getTransactsCount() public view returns (uint256){
// retourns transactionions count
      return transactionsCount;
   }
}
