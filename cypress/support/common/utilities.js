// For indicating when tests are using the live API
export const liveSuite = (name) => `[live]: ${ name }`;
export const liveTest = (name) => `${ name }`;

// For indicating when tests are using MSW
export const mswSuite = (name) => `[msw]: ${ name }`;
export const mswTest = (name) => `${ name }`;