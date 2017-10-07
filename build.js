var solc = require('solc');
var fs = require('fs');

var input = {
    'business.sol': fs.readFileSync('contracts/business.sol'),
    'businessRegistrar.sol': fs.readFileSync('contracts/businessRegistrar.sol'),
    'trustChain.sol': fs.readFileSync('trustChain.sol')
}
var output = solc.compile({ sources: input }, 1)
for (var contractName in output.contracts)
    console.log(contractName + ': ' + output.contracts[contractName].bytecode)