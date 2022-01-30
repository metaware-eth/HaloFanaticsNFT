## About The Project

This project is an example ERC721 NFT contract for the Ethereum network. The token uses SVG to render its data

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
```sh

### Sample Deployment Links
* https://rinkeby.etherscan.io/address/0x651cc7cec28860e9c4163c0c5e6fa6148f78cd26#code
