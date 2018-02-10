import * as api from './apiCalls';

describe('API_CALLS', () => {
  let mockUrl;
  
  beforeAll( () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            hello: 'youFool'
          })
      })
    );
    mockUrl = 'http://mock.com';

  });

  it('should call fetch with the expected params', () => {
    api.fetchParse(mockUrl);
    expect(window.fetch).toHaveBeenCalledWith(mockUrl);
  });

  it('should resolve a promise', () => {
    expect(api.fetchParse(mockUrl)).resolves.toEqual({ hello: 'youFool' });
  });
});
