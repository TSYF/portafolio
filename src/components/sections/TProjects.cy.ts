import TProjects from './TProjects.vue'

describe('<TProjects />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(TProjects)
  })
})