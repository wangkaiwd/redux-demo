import { combineReducers } from 'redux'
import todos from './reducer'
// 合并所有处理过程
export default combineReducers({
  todos,
})
