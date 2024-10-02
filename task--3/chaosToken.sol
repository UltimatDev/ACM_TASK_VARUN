// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

contract chaosToken{
    string public name = "chaosToken";
    string public sym = "CHT";

    uint public deci = 18;
    uint256 public totSupply;
    
    mapping(address => uint256) public balance;

    event Transfer(address from, address to, uint256 value);
    event Minting(address to, uint256 value);


    constructor(){
        //Space to assign some tot supply if needed
    }

    function minting(address _to, uint256 _val) public returns (bool success) {
        
        totSupply += _val;
        balance[_to] += _val;

        emit Minting(_to, _val);
        emit Transfer(address(0), _to, _val);

        return true;
    }
    function transfer( address _to , uint256 _val) public  returns (bool success){
        balance[msg.sender] -= _val;
        balance[_to] += _val;

        emit Transfer(msg.sender, _to, _val);
        return true;
       




    }

    function checkBalance(address _sender) public view returns (uint256 balance1){
        return balance[_sender];
    }


}

