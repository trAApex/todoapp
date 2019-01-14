import { SEARCH_CHANGE } from './index';

export function doSerachChange(text) {
  return {
    type: SEARCH_CHANGE,
    newSearchValue: text
  }
}