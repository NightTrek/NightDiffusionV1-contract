import { expect } from "chai";
import { ethers } from "hardhat";

describe("NightDiffusion", function () {
  it("Test contract", async function () {
    const ContractFactory = await ethers.getContractFactory("NightDiffusion");

    const instance = await ContractFactory.deploy();
    await instance.deployed();

    expect(await instance.name()).to.equal("NightDiffusion");
  });
});
