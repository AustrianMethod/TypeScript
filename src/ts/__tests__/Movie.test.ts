import Movie from '../domain/Movie';

test('new movie should not be empty - 5', () => {
  const movie = new Movie(2011, 'USA', 'Avengers Assemble!', 'fantasy', 137 );

  expect(Object.keys(movie).length).toBe(5);
});