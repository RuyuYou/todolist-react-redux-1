let id=0;
export default function (state={ todos: []},action) {

    switch(action.type){
        case 'ADD':
            state.todos.push({task:action.task,id:id++,isDone:false});
            console.log(state.todos);
            return {
                todos:[...state.todos]
            };
    }

    return state;
}
