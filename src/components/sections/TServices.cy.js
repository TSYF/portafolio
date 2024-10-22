import TServices from './TServices.vue'

describe('<TServices />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(TServices)
  })
})