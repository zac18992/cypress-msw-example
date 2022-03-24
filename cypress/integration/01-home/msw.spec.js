import { mswTest, mswSuite } from '../../support/common/utilities';
import { setupSuite } from '../../support/common/actions';

describe(mswSuite('Home page - 1'), () => {
  before(() => {
    setupSuite({ useMSW: true });
  });

  it(mswTest('renders the mock cat fact'), () => {
    console.log('[tests] Testing that the mock api was called for the cat fact');
    cy.findByText('Fact: MOCK!').should('be.visible');
  });
});