import TVRepository from '../../repositories/TVRepository';
const repo = new TVRepository();

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










