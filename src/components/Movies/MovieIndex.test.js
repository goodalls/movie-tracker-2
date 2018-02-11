import React from 'react';
import { MovieIndex, mapStateToProps, mapDispatchToProps } from './MovieIndex';
import { shallow } from 'enzyme';

describe('MOVIE_INDEX', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<MovieIndex movies={[]} user={{}} favorites={[]} />);
    expect(wrapper).toMatchSnapshot();
  });

  // describe('updateFavorites', () => {
  //   it('should call api once', () => {
  //     const wrapper = shallow(<MovieIndex movies={[]} user={{}} favorites={[]} />);
  //     const api = jest.fn();
  //     window.fetch = jest
  //       .fn()
  //       .mockImplementation(() =>
  //         Promise.resolve({
  //           json: () =>
  //             Promise.resolve({
  //               hello: 'youFool'
  //             })
  //         })
  //       );
  //     wrapper.instance().updateFavorites();
  //     wrapper.update();
  //     expect(api).toHaveBeenCalledTimes(1);

  //   });
  // });
  

  describe('MDTP and MSTP', () => {
    it('should define movies props for the container MSTP', () => {
      const title = 'The Rocky';
      const poster = '/RockyIsA-BA.jpg';
      const mockStore = { movies: [{ title, poster }] };
      const expected = [{ title, poster }];
      const mapped = mapStateToProps(mockStore);
      expect(mapped.movies).toEqual(expected);
    });

    it('should define user props for the container MSTP', () => {
      const id = 0;
      const name = 'jeffIsGreat';
      const mockStore = { user: [{ id, name }] };
      const expected = [{ id: 0, name: 'jeffIsGreat' }];
      const mapped = mapStateToProps(mockStore);
      expect(mapped.user).toEqual(expected);
    });

    it('should define favorites props for the container MSTP', () => {
      const title = 'The Rocky';
      const poster = '/RockyIsA-BA.jpg';
      const mockStore = { favorites: [{ title, poster }] };
      const expected = [{ title, poster }];
      const mapped = mapStateToProps(mockStore);
      expect(mapped.favorites).toEqual(expected);
    });

    it('should call the dispatch function on MDTP', () => {
      const mockDispatch = jest.fn();
      const mapped = mapDispatchToProps(mockDispatch);
      mapped.populateFavorites();
      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
