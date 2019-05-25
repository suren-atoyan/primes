// There is set of first 1000 prime numbers
// in utils/primesSet.json file
// This function (getPrime) will return nth prime
// number from that set.
// It means we can "get" prime number from 1 to 1000
// interval.

import primesSet from './primesSet';

const getPrime = n => primesSet[n];

export default getPrime;
