import {createStore, applyMiddleware} from 'redux';
import combReducer from './reducers/reducers';
import reduxThunk from 'redux-thunk';

const middleware = applyMiddleware(reduxThunk)(createStore);
export const store = middleware(combReducer);

export const mapStateToProps = (state) => {
  return {
    matches: state.matches,
    loader: state.loader,
    error: state.error
  };
};
