require('dotenv').config()

const nftAddress = "0x1931E19962D4F53b9Ba0839cC2FDF70E1e23Db08"; //contract address

async function main() {

    const [signer] = await ethers.getSigners();
    signerAddress = signer.address;
    const NFTContract = await ethers.getContractFactory("WildCompanion");
    const nftcontract = await NFTContract.attach(nftAddress);
    
    // Call the mint function on the contract to mint 5 nfts
    const tx = await nftcontract.Batchmint(signerAddress,5);
    await tx.wait()

    // Log a message to the console to indicate that the nfts have been minted
    console.log("Minted 5 nfts to: ",signerAddress);

    const balance = await nftcontract.balanceOf(signerAddress);
    console.log("You now have: " + balance + " nfts");
  }

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });