# HaloFanaticsNFT
## About The Project

This project is an example ERC721 NFT contract for the Ethereum network. The token uses SVG to render its data. Tested with Hardhat and Chai Assertions.

### Built With

* [Solidity](https://docs.soliditylang.org/en/v0.8.11/)
* [Hardhat](https://hardhat.org/)
* [Remix](http://remix.ethereum.org/)
* [Node](https://www.npmjs.com/)
* [Chai Assertion](https://www.chaijs.com/)

### Prerequisites

```sh
# NPM
npm install npm@latest -g
npm init --yes

# Hardhat
npm install --save-dev hardhat
npx hardhat
npm install --save-dev @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai
```

### Run

```sh
npx hardhat compile
npx hardhat test
```

### Sample Deployment Links
* [Rinkeby Contract](https://rinkeby.etherscan.io/address/0x60721a0614ed2e5e1dfb98b06c52887e4cb11af8#code)
* [OpenSea Collection](https://testnets.opensea.io/collection/halo-3-profile-test)
