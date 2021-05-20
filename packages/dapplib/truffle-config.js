require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter brand spot toy note peace purse include enter bone gaze'; 
let testAccounts = [
"0xea28c514489b054e7adb8922107872ac5b4d45cffd47e678a7b3acddacf9ae00",
"0x1a1e821ed5db9fde154d58ac4da4a3dd1b0ec492cd819304667fa0d0fd9f0919",
"0x4bffe161e02b0eefac4f54e46f4e9db9190d7e36d982a3f90bc52283baa60303",
"0x48d7ab8dee9207879fccb4b776270c559a55e7d3bc6f9267594d68513e6f78cd",
"0x009182581ee5cada2e1773f2f253417b1cc49c2e22e2a5f0dd149a6449b1004d",
"0xd3750998dad29b5eee917e4bd0b14c789254d8dba75b5577378cbb51118a2c86",
"0xca2c2dee91cea79852828484354d6582d0b3f7fd31b0f82d3a8fe8ce651c93a3",
"0x33a7095c36923a97166f2a4b7f445b0c295944a254884121558345762e1f5b4b",
"0x447e790a7e4495dd8f922fb52a9749e1577599a9b7f2e0aebc00f878f7b5e94a",
"0x801b2d31c71b785f229102e6c14e9feb9dd181fd7473637f459e7b6333792975"
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
