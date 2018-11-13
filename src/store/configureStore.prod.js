import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './detail/reducers/reducers';


const configureStore = () => {

    const store = createStore(rootReducer
        ,applyMiddleware(thunk, createLogger()));
  
    if (module.hot) {
      // Enable Webpack hot module replacement for reducers
      module.hot.accept('./detail/reducers/reducers', () => {
        store.replaceReducer(rootReducer)
      })
    }
  
    console.log("Hello from the Prod Store!");

    return store
  }
  
export default configureStore;