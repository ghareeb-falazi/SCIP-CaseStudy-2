const Seafood = artifacts.require("./Seafood.sol");

module.exports = function (deployer) {
      deployer.deploy(Seafood);
}