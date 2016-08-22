import React, {Component} from "react";
import {render} from 'react-dom'
import TodoList from './todo-list'

class App extends Component{
    render() {
        return (
            <div>
                <TodoList/>
            </div>
        )
    }
}

export default App;
