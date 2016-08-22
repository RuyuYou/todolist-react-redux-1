import React,{Component} from 'react';
import {render} from 'react-dom'
import {connect} from 'react-redux'

class TodoList extends Component{
    render(){
        const todoItem = this.props.todos
            .map((todo,index)=>
            <div key={index}>
                {todo.task}
            </div>);
        return (
            <div>{todoItem}</div>
        )
    }
}

function mapStateToProps(state) {
    return {todos:state.todos};
}

export default connect(mapStateToProps,()=>{return {}})(TodoList);