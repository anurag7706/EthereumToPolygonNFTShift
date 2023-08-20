const nftAddress = "0x1931E19962D4F53b9Ba0839cC2FDF70E1e23Db08"; // contract address

async function main() {

    const [signer] = await ethers.getSigners();
    const NFTContract = await ethers.getContractFactory("WildCompanion");
    const nftcontract = await NFTContract.attach(nftAddress);

    console.log("You now have: " + await nftcontract.balanceOf(signer.address) + " nfts");
}

main().catch((error) => {
console.error(error);
process.exitCode = 1;
});