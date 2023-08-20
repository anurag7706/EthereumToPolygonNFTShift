require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers")
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    mumbai: {
      url: 'https://rpc-mumbai.maticvigil.com',
      accounts: [process.env.PRIVATE_KEY],
    },
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/mPfrxR2R712Yyt9dAgRvO8RmYtMuUPRi',
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: "CYDU6IJBI9GQ74PXZ16NK5MIWVY8XHRX9C"
  }

};
