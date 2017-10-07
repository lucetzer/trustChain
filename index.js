
Web3 = require('web3');
solc = require('solc');




web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
// web3.eth.accounts;



trustChainString = fs.readFileSync('./contracts/trustChain.sol').toString();
trustChainCompiled = solc.compile(trustChainString);

abiDefinition = JSON.parse(compiledCode.contracts[':TrustChain'].interface);
TrustChainContract = web3.eth.contract(abiDefinition);

byteCode = trustChainCompiled.contracts[':TrustChain'].bytecode;
deployedTrustChainContract = TrustChainContract.new({data: byteCode, from: web3.eth.accounts[0], gas: 4700000});
// contractInstance = TrustChain.at(deployedContract.address);
deployedTrustChainContract.createBusinessAccount('12345', {from: web3.eth.accounts[0]});

