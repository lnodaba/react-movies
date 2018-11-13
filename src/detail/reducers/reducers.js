import * as actions from '../actions/actions';
import { combineReducers } from 'redux'

function tvShows(
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


function selectedTvShowDetails(
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

const tvApp = combineReducers({
    tvShows,
    selectedTvShowDetails
});

/*
    BOILERPLATE FOR THE BELOW :

    export default function tvApp(state = {}, action) {
        return {
            tvShows: tvShows(state.tvShows, action)
            selectedTvShowDetails : selectedTvShowDetails(state.selectedTvShowDetails, action)
        }
    }

*/

export default tvApp;
