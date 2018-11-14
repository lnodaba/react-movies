import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { selectedTvShowDetails } from '../detail/reducers/reducers';
import { tvShows } from '../home/reducers/reducers';

/*
  Long version :

  export default function tvApp(state = {}, action) {
      return {
          tvShows: tvShows(state.tvShows, action)
          selectedTvShowDetails : selectedTvShowDetails(state.selectedTvShowDetails, action)
      }
  }

*/
const rootReducer = combineReducers({
  tvShows,
  /*
    I'm not using the belos cause it turned out doesn't really worth the effort for this particular example
    I left here to demonstrate reducer combining.
  */
  selectedTvShowDetails 
});




const configureStore = () => {
    const store = createStore(rootReducer
        ,applyMiddleware(thunk, createLogger()));
  
    if (module.hot) {
      // Enable Webpack hot module replacement for reducers
      module.hot.accept('../detail/reducers/reducers', () => {
        store.replaceReducer(rootReducer)
      })
    }
  
    console.log("Hello from the Dev Store!");

    return store
  }
  
export default configureStore;