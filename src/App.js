import React, { Component } from 'react'
import AddToDo from './components/addToDo'
import TodoList from './components/todoList'
import './App.less'
class App extends Component {
  constructor() {
    super()
    this.state = {
      listData: [],
    }
  }
  addData = (data) => {
    this.state.listData.push(data);
    this.setState({ listData: this.state.listData });
  }
  render() {
    return (
      <div>
        <div className="container">
          <AddToDo
            {...this.state}
            addData={this.addData}
          />
          <TodoList
            {...this.state}
          />
        </div>
      </div>
    )
  }
}

export default App
