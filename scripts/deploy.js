// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.

const hre = require("hardhat");


async function deploy() {
  const FEMBOI = await hre.ethers.getContractFactory("Femboi");
  const femboi = await FEMBOI.deploy();
  await femboi.deployed();
  console.log("🟢 🟢 🟢 🟢 🟢 Femboi contract deployed successfully", femboi.address);
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
deploy()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});
