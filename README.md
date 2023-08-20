# EthereumToPolygonNFTShift

This undertaking encompasses a basic ERC-721A smart contract designed to generate and oversee non-fungible tokens (NFTs). The contract enables users to produce fresh NFTs, define their metadata (URI), and verify NFT balances. Additionally, it provides the capability to transfer your NFTs to an alternate network through the FxPortal bridge, here Polygon .

## Note 
1. Make sure to add a .env file and add your account's Private Key in the file.
2. You can customize the number of NFTs to be minted and the base URL for the images in the batchMint.js script and the NFT.sol contract, respectively.
 
## Getting Started

1. Clone the repository:

```
git clone <https://github.com/anurag7706/EthereumToPolygonNFTShift.git>
```

2. Install the dependencies :

```
npm i
```

3. Install the ERC721A contract:

```
npm install erc721a
```

4. Compile the contract and deploy
```
npx hardhat run scripts/deploy.js --network goerli

```
To batch mint tokens: npx hardhat run scripts/BatchMint.js --network goerli

To approve and deposit your tokens to polygon: npx hardhat run scripts/BatchTransfer.js --network goerli

## Commands to Run : 
![1](https://github.com/anurag7706/EthereumToPolygonNFTShift/assets/75776424/777819eb-72a6-4871-8229-bea128dcfd94)

![2](https://github.com/anurag7706/EthereumToPolygonNFTShift/assets/75776424/aa61f766-b510-4228-be97-c41f7db5d5e4)

![3](https://github.com/anurag7706/EthereumToPolygonNFTShift/assets/75776424/d91f6d04-4a60-44c0-98c7-b15dea61e0b0)

![4](https://github.com/anurag7706/EthereumToPolygonNFTShift/assets/75776424/397df2ed-b63e-4dee-9d7c-241b0a0499b0)


## Video Walkover : 
https://www.loom.com/share/e7b983bd00d645fb8505e05ed24ddfc1?sid=b9186761-4054-46a6-bbd0-971b84312c60

## Description
A 5-item NFT collection has been created using "Dalle". The items are stored on IPFS using pinata.cloud.  ERC721A smart contract is deployed to the Goerli Ethereum Testnet. There is a promptDescription function on the contract that returns the prompt used to generate the images.



## Technologies Used 
- MetaMask - Wallet and gateway to Ethereum blockchain  
- ethers.js - Library for interacting with Ethereum smart contracts  
- Hardhat - Development environment and task runner for building, testing, and deploying smart contracts on Ethereum and other blockchain platforms
## Authors
- [Anurag Mishra](https://github.com/anurag7706)
