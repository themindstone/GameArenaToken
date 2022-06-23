const { expect } = require("chai");

describe("GAUToken", function () {
  
  let Token;
  let testToken;
  let owner;
  let addr1;
  let addr2;
  let addrs;

  const name = 'GAU Token';
  const symbol = 'GAU';
  const decimals = 3;

  before(async function () {
    Token = await ethers.getContractFactory("GAUToken");
  });

  beforeEach(async function () {
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
    testToken = await Token.deploy();
    await testToken.deployed();
  });

  describe("Initial Mint", function () {
    it("Should assign the total supply of tokens to the owner", async function () {
      const ownerBalance = await testToken.balanceOf(owner.address);
      expect(await testToken.totalSupply()).to.equal(ownerBalance);
    });

    it('has a name', async function () {
      expect(await testToken.name()).to.equal(name);
    });

    it('has a symbol', async function () {
      expect(await testToken.symbol()).to.equal(symbol);
    });

    it('has correct decimals', async function () {
      expect(await testToken.decimals()).to.equal(decimals);
    });
  });

  

});
