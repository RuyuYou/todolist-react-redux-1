export default function (state=0,action) {
    let newState = 0;
    switch (action.type){
        case 'ADD':
            newState = state + 1;
    }

    return newState;
}
