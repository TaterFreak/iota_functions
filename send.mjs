import Iota from '@iota/core';
import  Converter from '@iota/converter';
import { NODE, SEED, DEPTH, MINIMUM_WEIGHT_MAGNITUDE, TEST_ADDRESS } from './constants.mjs';

const iota = Iota.composeAPI({
provider: NODE
});

const depth = DEPTH;
const minimumWeightMagnitude = MINIMUM_WEIGHT_MAGNITUDE;

if (typeof process.argv[2] !== 'string') {
    console.log('You have not provided an address, defaulting to test address');
}

const address = process.argv[2] || TEST_ADDRESS;

const seed = SEED;

const message = JSON.stringify({"message": "Hello world"});
const messageInTrytes = Converter.asciiToTrytes(message);

const transfers = [
{
    value: 0,
    address: address,
    message: messageInTrytes
}
];

console.log(`Sending ${transfers[0].value} with message ${message} to ${address}`);

iota.prepareTransfers(seed, transfers)
    .then(trytes => {
        return iota.sendTrytes(trytes, depth, minimumWeightMagnitude);
    })
    .then(bundle => {
        console.log(`Transaction hash: ${bundle[0].hash}`)
    })
    .catch(err => {
        console.error(err)
    });
