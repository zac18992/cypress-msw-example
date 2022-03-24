import { goToHome } from '../navigation/actions';
import { workerStart, workerStop } from '../../../msw';

let mswRunning = false;

export const setupSuite = ({ useMSW = false } = {}) => {
  if (useMSW) {
    workerStart().then(() => mswRunning = true);
    cy.waitUntil(() => mswRunning);
  } else {
    workerStop();
  }

  goToHome();
};