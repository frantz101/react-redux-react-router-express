//import individual reducers here

import {
    combineReducers
}
from 'redux'
import templateReducer from './templateReducer'


const rootReducer = combineReducers({
    //pass in reducer objects
    templateReducer: templateReducer
});

export default rootReducer;
