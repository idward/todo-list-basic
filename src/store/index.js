import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { loadState, saveState } from "../utils/localstorage";
import { throttle } from "throttle-debounce";

const logger = createLogger({
  duration: true
});

const persistState = loadState();
const store = createStore(
  reducers,
  persistState,
  applyMiddleware(logger, thunk)
);

store.subscribe(
  throttle(1000, () => {
    saveState(store.getState());
  })
);

export default store;
