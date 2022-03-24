const onUnhandledRequest = _ => _;

export const workerStart = async () => {
  if (typeof window === 'undefined') {
    const { server } = require('./server');
    return server.listen({ onUnhandledRequest });
  }

  // eslint-disable-next-line
  const { worker } = require('./browser');
  return worker.start({
    onUnhandledRequest,
    url: '/mockServiceWorker.js'
  });
};

export const workerStop = () => {
  if (typeof window === 'undefined') {
    const { server } = require('./server');
    return server.close();
  }

  const { worker } = require('./browser');
  return worker.stop();
};

export const getMSW = () => {
  if (typeof window === 'undefined') {
    const { server } = require('./server');
    return server;
  }

  const { worker } = require('./browser');
  return worker;
};