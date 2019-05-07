import {combineReducers} from "redux";
import {reducer as formReducer} from 'redux-form';
import todoReducer from "./todos.reducer";
import todoStatusReducer from "./todoStatus.reducer";
import searchTodosReducer from "./search.reducer";
import authReducer from './auth.reducer';
import {reducer as toastrReducer} from 'react-redux-toastr';

const rootReducer = combineReducers({
  todos: todoReducer,
  todoStatus: todoStatusReducer,
  searchKey: searchTodosReducer,
  auth: authReducer,
  form: formReducer,
  toastr: toastrReducer
});

export default rootReducer;
