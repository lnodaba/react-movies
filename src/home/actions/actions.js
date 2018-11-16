import TVRepository from '../../repositories/TVRepository';
const { createActions } = require('redux-arc');
const repo = new TVRepository();

export const { creators, types } = createActions('shows', {
  search: null,
  request: null,
  receive: null,
});

/* 
    Async Actions (Fetchers for the TV Shows)
*/
function fetchShows(searchTerm) {
  return dispatch => {
    dispatch(creators.request(searchTerm));
    
    return repo.search(searchTerm)
      .then(results => {
        return results.json();
      })
      .then(json => dispatch(creators.receive({searchTerm, json})));
  }
}

function shouldFetchShows(state, searchTerm) {
  const {items, isFetching } = state.tvShows;
  const minSearchLenght = 3;

  if (isFetching) {
    return false
  } else if (searchTerm.length > minSearchLenght && items.length === 0) {
    return true
  } else {
    return state.tvShows.didInvalidate
  }
}

export function fetchShowsIfNeeded(searchTerm) {
  return (dispatch, getState) => {
    if (shouldFetchShows(getState(), searchTerm)) {
      return dispatch(fetchShows(searchTerm));
    }
  }
}
