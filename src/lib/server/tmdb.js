import { MovieDb } from 'moviedb-promise';

const baseUrl = 'https://api.movies.tastejs.com/';

export const tmdb = new MovieDb('', baseUrl);
