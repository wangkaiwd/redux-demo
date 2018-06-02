/*
 * @Author: wangkaiwd
 * @Date: 2018-06-02 16:03:02
 * @Last Modified by: wangakiwd
 * @Last Modified time: 2018-06-02 16:14:37
 * @Desc:reducer:事件对应的响应处理，处理完后返回新state
 */

const todos = (state = [], action) => {
  const { id, text } = action;
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id,
          text,
          completed: false,
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )
    default:
      return state
  }
}
export default todos
