async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const ColorCatcher = await ethers.getContractFactory("ColorCatcher");
    const colorCatcher = await ColorCatcher.deploy();

    console.log("ColorCatcher contract deployed to:", colorCatcher.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
