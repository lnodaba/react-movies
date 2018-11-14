import TVRepository from '../../repositories/TVRepository';
const repo = new TVRepository();

/*
  TV SHOWS (action type and an action creator next to it.
  You may want to introduce a new kind of action for invalidating the data) 
*/
export const SEARCH_SHOWS = 'SEARCH_SHOW'
export function searchShow(searchTerm) {
  return {
    type: SEARCH_SHOWS,
    searchTerm
  }
}

export const REQUEST_SHOWS = 'REQUEST_SHOWS'
export function requestShows(searchTerm) {
  return {
    type: REQUEST_SHOWS,
    searchTerm
  }
}

export const RECEIVE_SHOWS = 'RECEIVE_SHOWS'
export function receiveShows(searchTerm, json) {
  return {
    type: RECEIVE_SHOWS,
    searchTerm,
    items: json.results
  }
}

/* 
    Async Actions (Fetchers for the TV Shows)
*/

function fetchShows(searchTerm) {
  return dispatch => {
    dispatch(requestShows(searchTerm));
    
    return repo.search(searchTerm)
      .then(results => {
        return results.json();
      })
      .then(json => dispatch(receiveShows(searchTerm, json)));
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
