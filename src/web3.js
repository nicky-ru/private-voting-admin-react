import Web3 from "web3";

const web3 = new Web3(Web3.givenProvider || "ws://localhost:7545");

const ethAcc = async () => {
    return await web3.eth.requestAccounts();
}

console.log(ethAcc());

export default web3;