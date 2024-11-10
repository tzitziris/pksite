import { setupWorker } from 'msw';
import { handlers } from './handlers';

// Set up the mock service worker with the defined handlers
export const worker = setupWorker(...handlers);
