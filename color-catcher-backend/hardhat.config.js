require('@nomiclabs/hardhat-ethers');
require('dotenv').config();

module.exports = {
  solidity: "0.8.19", // Set to the Solidity version you want to use
  networks: {
    blaze: {
      url: "https://rpc.blaze.soniclabs.com", // RPC URL for Blaze Testnet
      chainId: 57054, // Blaze Testnet Chain ID
      accounts: [`0x${process.env.PRIVATE_KEY}`], // Your private key from .env
    },
  },
};
