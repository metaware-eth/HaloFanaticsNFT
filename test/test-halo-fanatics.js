const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("HaloFanatics Unit Tests", function () {
const GAMERTAG = "exampleGamertag";
let haloFanatics;
let owner;
let addr1;
let addr2;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();
    const HaloFanatics = await ethers.getContractFactory("Halo3Profile");
    haloFanatics = await HaloFanatics.deploy();
    await haloFanatics.deployed();
  });

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      expect(await haloFanatics.owner()).to.equal(owner.address);
    });

    it("Should assign the total supply of tokens to the owner", async function () {
      const ownerBalance = await haloFanatics.balanceOf(owner.address);
      expect(await haloFanatics.totalSupply()).to.equal(ownerBalance);
    });
  }); 
  
  describe("Paused", function () {
    it("Should allow owner to set paused", async function () {
      await haloFanatics.connect(owner).setPause(false);
      expect(await haloFanatics.getPause()).to.equal(false);
    });

    it("Should revert if not owner", async function () {
      await expect(haloFanatics.connect(addr1).setPause(false))
        .to
        .be
        .revertedWith("Only owner can modify pause")
    });
  });
  
  describe("Mint", function () {
    it("Should allow owner to mint", async function () {
      await haloFanatics.connect(owner).mint(GAMERTAG);
      expect(await haloFanatics.connect(owner).balanceOf(owner.address)).to.equal(1);
    });

    it("Should revert if not owner", async function () {
      await expect(haloFanatics.connect(addr1).mint(GAMERTAG))
        .to
        .be
        .revertedWith("Minting is Paused")
    });

    it("Should allow non-owner to mint when not paused", async function () {
      await haloFanatics.connect(owner).setPause(false);
      await haloFanatics.connect(addr1).mint(GAMERTAG);

      expect(await haloFanatics.balanceOf(addr1.address)).to.equal(1);
    });
    
    it("Should not exceed max mint supply", async function () {
      for (let i = 0; i < 100; i++) {
        await haloFanatics.connect(owner).mint(GAMERTAG);
      }

      await expect(haloFanatics.connect(owner).mint(GAMERTAG))
      .to
      .be
      .revertedWith("Collection is Sold Out")
    });     
  });      
});