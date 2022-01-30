const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("HaloFanatics Unit Tests", function () {
let haloFanatics;
const INIT_VALUE = 1;

  before(async function () {
    //const [owner, addr1, addr2] = await ethers.getSigners();
    const HaloFanatics = await ethers.getContractFactory("Halo3Profile");
    haloFanatics = await HaloFanatics.deploy();
    await haloFanatics.deployed();
  });

  beforeEach(async function () {
    //await haloFanatics.setNumber(INIT_VALUE);
  });

  it(`Initial value set to ${INIT_VALUE}`, async function () {
    expect(await haloFanatics.getNumber()).to.equal(INIT_VALUE);
  });

  it(`Correctly adds to number`, async function () {
    const addToNumberTx = await haloFanatics.addToNumber(2);
    await addToNumberTx.wait();

    expect(await haloFanatics.getNumber()).to.equal(2 + INIT_VALUE);
  });

  it(`Correctly subtracts from number`, async function () {
    const subtractFromNumberTx = await haloFanatics.subtractFromNumber(1);
    await subtractFromNumberTx.wait();

    expect(await haloFanatics.getNumber()).to.equal(INIT_VALUE - 1);
  });

  it(`Reverts opp resulting in negative subtraction`, async function () {
    // Attempt to result an invalid subtraction
    await expect(haloFanatics.subtractFromNumber(2)).to.be.revertedWith("Result cannot be negative")
  });
});