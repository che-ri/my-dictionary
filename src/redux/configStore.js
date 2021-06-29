import { createStore, combineReducers, applyMiddleware } from "redux";
import { createBrowserHistory } from "history";
import dict from "./modules/dictonary";
import thunk from "redux-thunk";

export const history = createBrowserHistory();

//fireStore: thunk를 array형태로 가져와서 applyMiddleware에 넣어주기
const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);

//redux: 리듀서 연결하기
//useSelector로 컴포넌트와 연결시키는 키워드가 된다.
const rootReducer = combineReducers({ dict });
// const rootReducer = combineReducers({ quiz, rank });

//store
const store = createStore(rootReducer, enhancer);

export default store;
