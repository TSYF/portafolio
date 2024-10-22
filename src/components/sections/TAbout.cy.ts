import TIntro from './TIntro.vue'
import { describe, it} from 'vitest'

describe('<TIntro />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(TIntro)
  })
})