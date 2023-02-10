import { createPublicClient, http } from '../src'
import { mainnet } from '../chains'

export const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(),
})