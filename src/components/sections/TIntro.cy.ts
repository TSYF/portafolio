import TIntro from './TIntro.vue'

describe('<TIntro />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(TIntro)
  })
})