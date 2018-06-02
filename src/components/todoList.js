import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List, Icon } from 'antd'
import './todoList.less'

const todoList = ({ todos, toggleTodo }) => {
  // console.log('todos', props);
  return (
    <div className="list" style={{ width: '327px' }}>
      <List
        size="small"
        bordered
        dataSource={todos}
        renderItem={item => <List.Item>{item} <Icon type="delete" /></List.Item>}
      />
    </div>
  )
}
const mapStateToProps = state => (
  { todos: state.todos }
)

const mapDispatchToProps = dispatch => (
  { toggleTodo: id => dispatch(toggleTodo(id)) }
)

export default connect(mapStateToProps, mapDispatchToProps)(todoList)
