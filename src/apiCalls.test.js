import * as api from './apiCalls';

describe('API_CALLS', () => {
  it('should', () => {
    window.fetch = jest
      .fn().mockImplementation(() =>
        Promise.resolve({
          json: () =>
            Promise.resolve({
              'hello': 'youFool'
            })
        })
      );
    const mockUrl = 'http://mock.com';
    expect(api.fetchParse(mockUrl)).resolves.toEqual({'hello': 'youFool'});

  });
});