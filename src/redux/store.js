import { createStore, applyMiddleware } from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
import rootReducer from "./reducer/rootReducer"

const middleware = [thunk];

if (process.env.NODE_ENV == "development") {
  middleware(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middleware))