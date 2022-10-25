import {ethers} from 'ethers'

const contractAddress = "0x6ce8E94B6393B4483329CA101845d2881191d4c8";
const contractAbi = "[{\n" +
    "\t\t\"inputs\": [{\n" +
    "\t\t\t\"internalType\": \"string\",\n" +
    "\t\t\t\"name\": \"\",\n" +
    "\t\t\t\"type\": \"string\"\n" +
    "\t\t}],\n" +
    "\t\t\"name\": \"idsToAddress\",\n" +
    "\t\t\"outputs\": [{\n" +
    "\t\t\t\"internalType\": \"address\",\n" +
    "\t\t\t\"name\": \"\",\n" +
    "\t\t\t\"type\": \"address\"\n" +
    "\t\t}],\n" +
    "\t\t\"stateMutability\": \"view\",\n" +
    "\t\t\"type\": \"function\"\n" +
    "\t},\n" +
    "\t{\n" +
    "\t\t\"inputs\": [{\n" +
    "\t\t\t\t\"internalType\": \"string\",\n" +
    "\t\t\t\t\"name\": \"_Key\",\n" +
    "\t\t\t\t\"type\": \"string\"\n" +
    "\t\t\t},\n" +
    "\t\t\t{\n" +
    "\t\t\t\t\"internalType\": \"address\",\n" +
    "\t\t\t\t\"name\": \"_Value\",\n" +
    "\t\t\t\t\"type\": \"address\"\n" +
    "\t\t\t}\n" +
    "\t\t],\n" +
    "\t\t\"name\": \"writeMap\",\n" +
    "\t\t\"outputs\": [],\n" +
    "\t\t\"stateMutability\": \"nonpayable\",\n" +
    "\t\t\"type\": \"function\"\n" +
    "\t}\n" +
    "]";

async function inertWithContract(ids) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const putContract = new ethers.Contract(contractAddress, contractAbi, provider);
    const address = await putContract.idsToAddress(ids);
    console.log("对应地址是", address)
}

async function bindWithContract(ids,bindAddress) {
    if (typeof window.ethereum != "undefined" && window.ethereum != "undefined") {
        await window.ethereum.request({method: "eth_requestAccounts"})
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const putContract = new ethers.Contract(contractAddress, contractAbi, provider.getSigner());
        await putContract.writeMap(ids, bindAddress);
    }
}

exports.bindWithContract = bindWithContract;
exports.inertWithContract = inertWithContract;