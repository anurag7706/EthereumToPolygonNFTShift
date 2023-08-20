const hre = require("hardhat");

async function main() {

  const nftContract = await hre.ethers.getContractFactory("WildCompanion");
  const NFT = await nftContract.deploy();
  await NFT.deployed();

  console.log("NFT Contract address:", NFT.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});