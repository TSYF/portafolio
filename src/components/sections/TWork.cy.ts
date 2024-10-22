import TWork from './TWork.vue'

describe('<TWork />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(TWork)
  })
})