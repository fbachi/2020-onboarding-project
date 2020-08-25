import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import store from '../../store';
import { Creators } from '../../store/ducks/movies';
import Movie from './Movie';
import MoviesList from './MoviesList';

it('should have 2 movies in the list', () => {
  store.dispatch(Creators.toggleLoading(false));

  const wrapper = mount(
    <Provider store={store}>
      <MoviesList
        movies={[
          {
            id: 1,
            voteAverage: 45,
            posterPath:
              'https://image.tmdb.org/t/p/w220_and_h330_face/jsMVRjLwKWN3gaiGd9pJUrxezsp.jpg',
            releaseDate: '12/03/2020',
            title: 'Blade Runner 2049',
            url: 'https://www.themoviedb.org/movie/335984',
          },
          {
            id: 2,
            voteAverage: 45,
            posterPath:
              'https://image.tmdb.org/t/p/w220_and_h330_face/jsMVRjLwKWN3gaiGd9pJUrxezsp.jpg',
            releaseDate: '12/03/2020',
            title: 'Blade Runner 2049',
            url: 'https://www.themoviedb.org/movie/335984',
          },
        ]}
      />
    </Provider>
  );

  expect(wrapper.find(Movie).length).toBe(2);
});

it('should warn that are no movies to show', () => {
  store.dispatch(Creators.toggleLoading(false));

  const wrapper = mount(
    <Provider store={store}>
      <MoviesList movies={[]} />
    </Provider>
  );

  expect(wrapper.find('.no-items').exists()).toBe(true);
});
