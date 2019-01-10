import * as actions from '../actions/actions';

export  function selectedTvShowDetails(
    state = {
        tvId: null,
        isFetching: true,
        didInvalidate: false, //for future stuff if we want some invariant to reload the data from the server
        details: null
    }, action) {
    switch (action.type) {
        case actions.SELECT_SHOW:
            return Object.assign({}, state, {
                tvId: action.tvId,
                details : null
            });
        case actions.REQUEST_SHOW_DETAILS:
            return Object.assign({}, state, {
                isFetching: true
            });
        case actions.RECEIVE_SHOW_DETAILS:
            return Object.assign({}, state, {
                isFetching: false,
                details: action.details
            });
        default:
            return state
    }
}

