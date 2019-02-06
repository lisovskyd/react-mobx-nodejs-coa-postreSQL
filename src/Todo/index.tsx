import * as React from 'react';
import * as ReactDOM from 'react-dom';

import TodoList from '../TodoList/';

export default class Todo extends React.Component<{}, {}> {
  constructor(props) {
    super(props)
    
  }
  render() {
    return (
      <div className='todo-wrapper'>
        <input type="text"/>
        <ul className="todo-wrapper__form">
          <TodoList />
        </ul>
      </div>      
    )
  }
}