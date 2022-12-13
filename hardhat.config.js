const fs = require('fs');

require('@nomiclabs/hardhat-waffle');

const privateKey = fs.readFileSync('.secret').toString().trim();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
  },
  solidity: '0.8.17',
};
