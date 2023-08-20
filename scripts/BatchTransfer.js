  const hre = require("hardhat");
  const fxRootContractABI = require("../fxRootContractABI.json");
  const nftContractJSON = require("../artifacts/contracts/WildCompanion.sol/WildCompanion.json");
  
  const nftAddress = "0xA962afb3ac7CBC59A614eECdB1ef22c41aF04A44"; //contract address
  const nftABI = nftContractJSON.abi;
  const fxRootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";
  
  async function main() {
  
      const [signer] = await ethers.getSigners();
      signerAddress = signer.address;
      console.log(signerAddress);
      const nft = await hre.ethers.getContractAt(nftABI, nftAddress);
      const fxRoot = await hre.ethers.getContractAt(fxRootContractABI, fxRootAddress);  // Get FXRoot contract instance
  
      // Approve the nfts for transfer
      const approveTx = await nft.connect(signer).setApprovalForAll(fxRootAddress, true);
      await approveTx.wait();
      console.log("Approval confirmed");
      
      // Deposit the nfts to the FXRoot contracts
      for(let i=0; i<5; i++){
          console.log(`Depositing NFT with nft ID ${i} to the FxPortal Bridge...`);
          const depositTx = await fxRoot.connect(signer).deposit(nftAddress, signerAddress, i, "0x6566");
          //address rootnft, address user, uint256 nftId, bytes memory data
  
          await depositTx.wait();
      }
      console.log("Approved and deposited");
      

    }
    
    main().catch((error) => {
      console.error(error);
      process.exitCode = 1;
    });