
//defint initialValue

const initialState = {
    count : 0,
}

//defint reducer function

function reducer(state, action) {
    switch(action.type) {
        case 'Incr' :
            return {count : state.count + 1};
        case "Decr":
            return {count : state.count -1 };
        case "reset":
            return {count:0};
    }
}

export {
    initialState,
    reducer
}