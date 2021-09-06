/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("@nomiclabs/hardhat-waffle");
module.exports = {
  solidity: {
    compilers: [
      {version: "0.8.2"},
      {version: "0.4.17"},
    ]
  }
};