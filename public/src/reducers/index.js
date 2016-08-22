let id = 0;
export default function (state = {todos: []}, action) {
    const index = state.todos
        .indexOf(state.todos.find(todo => todo.id === action.id));

    switch (action.type) {
        case 'ADD':
            state.todos.push({task: action.task, id: id++, isDone: false});
            return {todos: [...state.todos], name:state.name};

        case 'REMOVE':
            state.todos.splice(index, 1);
            return {todos: [...state.todos],name:state.name};

        case 'TOOGLE':
            state.todos[index].isDone = !state.todos[index].isDone;
            return {todos: [...state.todos],name:state.name};

        case 'SELECTNAME':
            console.log(action.name);
            return {todos: [...state.todos], name:action.name};
    }

    return state;
}
