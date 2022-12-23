import userReducer from ".";
import { combineReducers} from "redux"


const rootReducer = combineReducers({
    user: userReducer
})

export default rootReducer