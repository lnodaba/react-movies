import { types } from '../actions/actions';
import { createReducers } from 'redux-arc';

const HANDLERS = {
    [types.SEARCH]: (state, action) => Object.assign({}, state, {
        searchTerm: action.payload,
        items: []
    }),
    [types.REQUEST]: (state, action) => Object.assign({}, state, {
        isFetching: true
    }),
    [types.RECEIVE]: (state, action) => Object.assign({}, state, {
        isFetching: false,
        items: action.payload.json.results
    })
};
export const tvShows = createReducers({
    isFetching: false,
    didInvalidate: false, //for future stuff if we want some invariant to reload the data from the server
    searchTerm: "",
    items: []
}, HANDLERS);
