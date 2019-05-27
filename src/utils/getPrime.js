// There is a set of first 1000 prime numbers
// in utils/primesSet.json file
// This function (getPrime) will return the
// nth prime number from that set.

import primesSet from './primesSet';

const getPrime = n => primesSet[n];

export default getPrime;
