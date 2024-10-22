import { describe, it } from 'vitest'
import type { AppRouter } from '../../../../back-end/src'
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client'

describe('Projects', () => {
  const { VITE_BACKEND_LOCATION } = import.meta.env

  const trpc = createTRPCProxyClient<AppRouter>({
    links: [
      httpBatchLink({
        url: VITE_BACKEND_LOCATION!
      })
    ]
  })
  it('fetches projects', async () => {
    const projects = await trpc.readProjects.query()
    expect(projects).to.be.an("array")

  })
  // it('fetches skills', () => {
  //   // expect(Object.values(store.skills).length).greaterThanOrEqual(1)
  // })
})
