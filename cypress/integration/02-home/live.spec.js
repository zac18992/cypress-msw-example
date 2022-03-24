import { setupSuite } from '../../support/common/actions';
import { liveTest, liveSuite } from '../../support/common/utilities';

describe(liveSuite('Home page - 2'), () => {
  before(() => {
    setupSuite();
  });

  it(liveTest('renders the live cat fact'), () => {
    console.log('[tests] Testing that the live api was called for the cat fact');
    cy.findByText('Fact: We will show you the cat fact later!').should('be.visible');
  });
});