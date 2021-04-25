require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid glide fruit sugar fire ridge remember unit gesture glove flush genius'; 
let testAccounts = [
"0x7a749288715562b5d791244c173087cbbdcd26de1abd24352bb4f3982d05dd95",
"0xd842cdaa39e99ad13cc1f07fa405b10966bbec7405f2de5b0e12e22bfa35e306",
"0xe8963ca490a0954f21c975c64fbb64826113512cd5f4eedfbed8d93bf217c112",
"0x47359e6ec6f2568d8c11d86e6be13f91f7b8d78cab9135eff05512d38c0f550d",
"0xbccc5a7f0b93f834a3279f9fef0ad11a3cbdfc82c00b5ad952e619828ea2860f",
"0x3af4aa5a9d03f3fbbaa2e524f5568d25166aecb634304fd61b077e6ddbbb9b6c",
"0xbaaf1f20dc6a285f1bcecf01ed1fa5bf1d4cccd8b579706772d76d07f61fbb16",
"0x57fd029be0ff4a2525f9a4ac9ba9b1d318bbd641688dd8b2154125e7d37e2487",
"0xa957f638a7274e6c636297ac19d9c14fcde75ac5b3f2d21d14ca28950b6e9a0a",
"0x31d6064c27794801b91147126bb292f0861f52c49fdd0f9df478db6f0e957060"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
