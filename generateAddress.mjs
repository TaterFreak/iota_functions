import Iota from '@iota/core';
import { NODE, SEED } from './constants.mjs';

const iota = Iota.composeAPI({
provider: NODE
});

const securityLevel = 2;

if (typeof process.argv[2] !== 'string') {
    console.log('You have not provided an seed, defaulting to test seed');
}

const seed = process.argv[2] || SEED;

iota.getNewAddress(seed, { index: 0, securityLevel: securityLevel, total: 1 })
    .then(address => {
        console.log('Your address is: ' + address);
    })
    .catch(err => {
        console.log(err)
    });
