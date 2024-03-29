import { ReactReduxContext } from 'react-redux';
import { combineReducers } from 'redux';
import CounterReducer from './Counterapp/reducer'
import FetchApiReducer from './FetchAPIApp/reducer'

const rootReducer = combineReducers({
    counter: CounterReducer,
    fetchApi: FetchApiReducer
});
export default rootReducer