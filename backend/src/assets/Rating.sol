pragma solidity >=0.5.0 <0.7.0;
pragma experimental ABIEncoderV2;

library Library {
  struct data {
     uint val;
     bool isValue;
   }
}

contract Rating {
    using Library for Library.data;
    uint private courseId;
    mapping (string => Library.data) private courseToId;
    mapping (uint => uint[]) private scores;
    mapping (uint => string[]) private rates;
    address public minter;
    mapping (address => bool) public allowance;

    constructor() public{
        courseId = 1;
        minter = msg.sender;
        allowance[minter] == true;
    }

    function setAllowance(address wallet) public {
        require(msg.sender == minter, "only minter can use this function");
        allowance[wallet] = true;
    }

    function checkAllowance(address wallet) public view returns (bool){
        return allowance[wallet];
    }
    
    // course should be like 'utsg$csc108$2020fall'
    function getRate(string calldata course) public view returns (string[] memory) {
        return rates[courseToId[course].val];
    }

    function getScore(string calldata course) public view returns (uint[] memory) {
        return scores[courseToId[course].val];
    }

    function setRate(string calldata course, string calldata rate) public {
        require(allowance[msg.sender], "You do not have privillege");
        if (courseToId[course].isValue){ 
            rates[courseToId[course].val].push(rate);
        }else{
            //if new course, create a id for it and push rate to rates
            courseToId[course].val = ++courseId;
            courseToId[course].isValue = true;
            rates[courseId].push(rate); // courseId has been updated
        }
    }

    function setScore(string calldata course, uint score) public {
        require(allowance[msg.sender], "You do not have privillege");
        if (courseToId[course].isValue){ //if new course, create a id for it and push score to scores
            scores[courseToId[course].val].push(score);
        }else{
            courseToId[course].val = ++courseId;
            courseToId[course].isValue = true;
            scores[courseId].push(score);
        }
    }
}