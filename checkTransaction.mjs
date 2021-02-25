import Iota from '@iota/core';
import { NODE, TEST_TX_HASH } from './constants.mjs';

const iota = Iota.composeAPI({
provider: NODE
});

if (typeof process.argv[2] !== 'string') {
    console.log('You have not provided an tx hash, defaulting to test tx hash');
}

const tx = process.argv[2] || TEST_TX_HASH

iota.getInclusionStates([tx])
.then(states => console.log(states));
