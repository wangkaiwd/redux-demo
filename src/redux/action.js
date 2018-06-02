/*
 * @Author: wangkaiwd
 * @Date: 2018-06-02 16:01:19
 * @Last Modified by: wangakiwd
 * @Last Modified time: 2018-06-02 16:01:40
 * @Desc: 编写action:界面上产生的操作
 */

let nextTodoId = 0;
export const addTodo = text => (
  {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text,
  }
)

export const toggleTodo = id => (
  {
    type: 'TOGGLE_TODO',
    id
  }
)

/**
 * 事件的格式：
 *  1. type字段必须要有，表示做什么操作
 *  2. type值全局唯一
 *  3. type大写定义
 *  4. 其它字段自由定义
 */
