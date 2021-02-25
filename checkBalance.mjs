import Iota from '@iota/core';
import { NODE, TEST_ADDRESS } from './constants.mjs';

const iota = Iota.composeAPI({
provider: NODE
});

if (typeof process.argv[2] !== 'string') {
    console.log('You have not provided an address, defaulting to test address');
}

const address = process.argv[2] || TEST_ADDRESS;

iota.getBalances([address])
  .then(({ balances }) => {
  console.log(balances)
  })
  .catch(err => {
  console.error(err)
  });
