// Importing Hardhat and Ethers
const { ethers } = require("hardhat");

async function interactWithContract() {
  // Get the deployer's address (although not used here, it's useful for interaction)
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // Contract address of the deployed contract
  const colorCatcherAddress = "0xdDA5C57A83692cd823E6f2Fd1a74DB75d1Dc637D";

  // Get the contract factory
  const ColorCatcher = await ethers.getContractFactory("ColorCatcher");

  // Attach to the deployed contract using the address
  const colorCatcher = await ColorCatcher.attach(colorCatcherAddress);

  // Example 1: Reading the current color from the contract (if your contract has a `currentColor` function)
  try {
    const color = await colorCatcher.currentColor();
    console.log("Current color:", color);
  } catch (error) {
    console.error("Error reading current color:", error);
  }

  // Example 2: Changing the color by calling a `changeColor` function (make sure this function exists in your contract)
  try {
    const tx = await colorCatcher.changeColor("blue"); // Replace "blue" with any valid color value
    await tx.wait(); // Wait for the transaction to be mined
    console.log("Color changed to blue");
  } catch (error) {
    console.error("Error changing color:", error);
  }
}

// Call the function to interact with the contract
interactWithContract()
  .then(() => process.exit(0)) // Successful execution, exit
  .catch((error) => {
    console.error(error);
    process.exit(1); // Error, exit
  });
