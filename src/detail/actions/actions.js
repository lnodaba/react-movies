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

/*
  TV SHOW DETAILS
*/
export const SELECT_SHOW = 'SELECT_SHOW'
export function selectShow(tvId) {
  return {
    type: SELECT_SHOW,
    tvId
  }
}

export const REQUEST_SHOW_DETAILS = 'REQUEST_SHOW_DETAILS';
export function requestShowDetails(tvId) {
  return { type: REQUEST_SHOW_DETAILS, tvId }
}

export const RECEIVE_SHOW_DETAILS = 'RECEIVE_SHOW_DETAILS';
export function receiveShowDetails(tvId, json) {
  return {
    type: RECEIVE_SHOW_DETAILS,
    tvId,
    details: json,
    receivedAt: Date.now()
  }
}


/* 
    Async Actions (Fetchers for the Shows Details)
*/

function fetchShowDetails(tvId) {
  return dispatch => {
    dispatch(requestShowDetails(tvId));
    
    return repo.getTVShow(tvId)
      .then(results => {
        return results.json();
      })
      .then(json => dispatch(receiveShowDetails(tvId, json)));
  }
}

function shouldFetchShowDetails(state, tvId) {
  const posts = state.tvShows.searchTerm
  if (!posts) {
    return true
  } else if (posts.isFetching) {
    return false
  } else {
    return posts.didInvalidate
  }
}

export function fetchShowDetailsIfNeeded(tvId) {
  return (dispatch, getState) => {
    if (shouldFetchShowDetails(getState(), tvId)) {
      return dispatch(fetchShowDetails(tvId));
    }
  }
}










