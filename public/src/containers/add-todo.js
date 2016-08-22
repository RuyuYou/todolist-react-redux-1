import React,{Component} from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';

class AddTodo extends Component{
    add(){
        this.props.onAdd(this.refs.task.value);
        this.refs.task.value="";
    }
    render(){
        return (
            <div>
                <input type="text" ref="task"/>
                <button onClick={this.add.bind(this)}>+</button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
   return {
       onAdd:(task)=>{dispatch({type:"ADD",task})}
   }
}

export default connect(()=>{return {}},mapDispatchToProps)(AddTodo);