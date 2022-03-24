import { rest } from 'msw';

export const handlers = [
  rest.get('*/fact', (req, res, ctx) => {
    return res(
      ctx.json({ fact: "MOCK!", isMock: true })
    );
  })
];