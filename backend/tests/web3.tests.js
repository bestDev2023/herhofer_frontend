const web3 = require('web3');

const client = new web3(
  //   "https://bsc.rpc.blxrbdn.com"
  "https://bsc.getblock.io/7c96d9de-ac0f-429c-88aa-367c9c2760b5/mainnet/"
  //   "https://rpc-bsc.bnb48.club"
  // "https://bsc-mainnet.nodereal.io/v1/64a9df0874fb4a93b9d0a3849de012d3"
);

async function test() {
    // res = await client.eth.getBlockNumber();
    // console.log(res);

    res = await client.eth.getBlock(25498132);
    console.log(res);

    // res = await client.eth.getTransaction(
    //   "0x48729dac5657b2bad2f5b6e5be14a333bd1e52de83e43dd347f5dcde5e731f41"
    // );
    // console.log(res);
}
test();