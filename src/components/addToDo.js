import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToDo } from '../redux/action'
import { Input, Button, Form, message } from 'antd'
const FormItem = Form.Item;

// @Form.create()
// class addToDo extends Component {
//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.addData(this.input.input.value);
//     this.props.form.resetFields();
//   }
//   render() {
//     const { getFieldDecorator } = this.props.form
//     return (
//       <div>
//         <Form layout="inline" onSubmit={this.handleSubmit}>
//           <FormItem>
//             {getFieldDecorator('addInp', {
//             })(
//               <Input
//                 placeholder="输入......↩"
//                 style={{ width: '200px' }}
//                 ref={(input) => this.input = input}
//               />
//             )}
//           </FormItem>
//           <FormItem>
//             {getFieldDecorator('addBtn', {
//             })(
//               <Button
//                 htmlType="submit"
//                 type="primary"
//                 icon="plus"
//               >
//                 addToDO
//               </Button>
//             )}
//           </FormItem>
//         </Form>
//       </div>
//     )
//   }
// }

// export default addToDo

// 无状态组件接收一个参数：props
const AddToDo = (props) => {
  let input;
  const handleSubmit = (e) => {
    console.log('input', input);
    e.preventDefault();
    // if (!input.input.value.trim()) {
    //   message.warning('内容不能为空!!');
    // }
    // dispatch(addTodo(input.input.value))
    props.form.resetFields();
  }
  const { getFieldDecorator } = props.form
  return (
    <div>
      <Form layout="inline" onSubmit={handleSubmit}>
        <FormItem>
          {getFieldDecorator('addInp', {
          })(
            <Input
              placeholder="输入......↩"
              style={{ width: '200px' }}
              ref={(inp) => input = inp}
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('addBtn', {
          })(
            <Button
              htmlType="submit"
              type="primary"
              icon="plus"
            >
              addToDO
            </Button>
          )}
        </FormItem>
      </Form>
    </div>
  )
}
// 进行了2层包装，而且只有在导出的时候包装才生效
export default connect()(Form.create()(AddToDo))

/**
 * react组件设计
 *  按照有无状态管理：
 *    1. 有状态组件
 *      React.Component形式创建
 *    2. 无状态组件
 *      以函数的方式展示,在开发中尽量使用这种形式
 *      特点：这种组件自己不维护状态，数据靠属性传入
 *  按照组件职能划分为:容器组件，操作组件，展示组件
 *  容器组件：
 *    有状态组件，把数据用属性方式传下去，然后子组件用事件方式把数据返回
 *  操作组件
 *    接收属性 关键字 产生的新数据事件方式返回容器组件
 *  展示组件
 *    只接收属性，数据用来展示
 */


// 实现过程的问题
// 1. 为什么要使用onSubmit事件
//    实现方式：
//       1. 通过onKeydown事件进行监听，如果按键为回车：keyCode:13将内容添加到列表，清空输入框，
//          onKeydown事件在键盘输入的时候回一直触发，比较浪费性能
//       2. 使用onSubmit事件进行监听，当表单内容进行提交的时候（可以通过回车触发），清空输入框，将内容添加到列表
