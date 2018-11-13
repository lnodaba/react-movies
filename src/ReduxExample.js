import configureStore from './store/configureStore';
import { searchShow, selectShow } from './detail/actions/actions';

/*
    MANUAL EXAMPLE OF REDUX WITHOUT REACT

    Example usage:    
    
    import reduxStoreTest from './ReduxExample';
    reduxStoreTest();

 */


export default function reduxStoreTest(){
    const store = configureStore();

    // Dispatch some actions
    store.dispatch(searchShow('Learn about actions'));
    store.dispatch(selectShow(1));
    store.dispatch(searchShow('Learn about store'));
    store.dispatch(selectShow(2));
}

