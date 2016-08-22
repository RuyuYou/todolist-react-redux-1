import React,{Component} from 'react';
import {render} from 'react-dom'
import {connect} from 'react-redux'

class TodoList extends Component{
    render(){
        const todoItem = this.props.todos
            .map((todo,index)=>
            <div key={index}>
                <input type="checkbox" onChange={this.props.onToogle.bind(this,todo.id)}/>
                {todo.isDone ? <s>{todo.task}</s> :todo.task}
                <button onClick={this.props.onRemove.bind(this,todo.id)}>x</button>
            </div>);
        return (
            <div>{todoItem}</div>
        )
    }
}

function mapStateToProps(state) {
    return {todos:state.todos};
}

function mapDispatchToProps(dispatch) {
    return {
        onRemove:(id)=> dispatch({type:'REMOVE',id}),
        onToogle:(id) => dispatch({type:'TOOGLE',id})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);