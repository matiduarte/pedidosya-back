import Fuse from 'fuse.js';
import db from '../db/response';

const { data } = db;
const fuse = new Fuse(data, {
  shouldSort: true,
  threshold: 0.3,
  location: 0,
  distance: 0,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: [
    'name',
  ],
});

export default class Shops {
  static search(query) {
    return query ? fuse.search(query) : data;
  }
}
