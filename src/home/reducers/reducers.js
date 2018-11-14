import * as actions from '../actions/actions';

export function tvShows(
    state = {
        isFetching: false,
        didInvalidate: false, //for future stuff if we want some invariant to reload the data from the server
        searchTerm: "",
        items: []
    }, action) {

    switch (action.type) {
        case actions.SEARCH_SHOWS:
            return Object.assign({}, state, {
                searchTerm: action.searchTerm,
                items : []
            });
        case actions.REQUEST_SHOWS:
            return Object.assign({}, state, {
                isFetching: true
            });
        case actions.RECEIVE_SHOWS:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.items
            });
        default:
            return state
    }
}