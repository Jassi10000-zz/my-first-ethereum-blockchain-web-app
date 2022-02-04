const hre = require("hardhat");

async function main() {

  // We get the reference to the contract which is to be deployed
  const Greeter = await hre.ethers.getContractFactory("Greeter");

  // passed in the deploy method is the constructor text(greeting) which will be passed to the constructor in Greeter.sol
  const greeter = await Greeter.deploy("Hello, Hardhat!");

  // waiting for the contract to be deployed
  await greeter.deployed();

  // greeter.address is the address to which we will be deploying the contract
  console.log("Greeter deployed to:", greeter.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
