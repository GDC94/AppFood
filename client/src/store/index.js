import { createStore, applyMiddleware, compose} from "redux";
import recipesReducer from "../reducers/index";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(recipesReducer, composeEnhancer(applyMiddleware(thunk)))
// const store = createStore(
//   recipesReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//   applyMiddleware(thunk)   //Este elemento sirve para poder aplicar las acciones asincronicas como el getMovie.
// );

export default store;


