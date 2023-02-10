import { getBlockNumber } from '../src/'
import { publicClient } from './clients'

const block = await getBlockNumber(publicClient);
console.log(`The current block is: ${block}`)