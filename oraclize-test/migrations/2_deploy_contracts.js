// var ConvertLib = artifacts.require('./ConvertLib.sol')
// var MetaCoin = artifacts.require('./MetaCoin.sol')

// module.exports = function (deployer) {
//   deployer.deploy(ConvertLib)
//   deployer.link(ConvertLib, MetaCoin)
//   deployer.deploy(MetaCoin)
// }
var OraclizeTest = artifacts.require('./OraclizeTest.sol')

module.exports = function (deployer, network, accounts) {
  // Deploys the OraclizeTest contract and funds it with 0.5 ETH
  // The contract needs a balance > 0 to communicate with Oraclize
  deployer.deploy(
    OraclizeTest,
    { from: accounts[9], gas:6721975, value: 500000000000000000 }
  )
}