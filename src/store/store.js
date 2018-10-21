import { compose, applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";

import reducer from "./reducers";

const middleware = applyMiddleware(createLogger());
let store = compose(createStore)(reducer, middleware);

export default store;