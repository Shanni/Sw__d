async function main() {
   // Grab the contract factory 
   const Sw__d = await ethers.getContractFactory("Sw__d");

   // Start deployment, returning a promise that resolves to a contract object
   const swNFT = await Sw__d.deploy(); // Instance of the contract 
   console.log("Contract deployed to address:", swNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
