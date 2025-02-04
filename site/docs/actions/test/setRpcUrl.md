---
head:
  - - meta
    - property: og:title
      content: setRpcUrl
  - - meta
    - name: description
      content: Sets the backend RPC URL.
  - - meta
    - property: og:description
      content: Sets the backend RPC URL.

---

# setRpcUrl

Sets the backend RPC URL.

## Usage

::: code-group

```ts [example.ts]
import { testClient } from './client'

await testClient.setRpcUrl('https://eth-mainnet.alchemyapi.io/v2') // [!code focus]
```

```ts [client.ts]
import { createTestClient, http } from 'viem'
import { foundry } from 'viem/chains'

export const testClient = createTestClient({
  chain: foundry,
  mode: 'anvil',
  transport: http(), 
})
```

:::
