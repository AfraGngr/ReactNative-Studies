const { act } = require("react-test-renderer");

function reducer(state, action){
    switch(action.type){
        case "INCREASE_COUNTER":
            state.counter = state.counter + 1;
            return{...state}
        case "DECREASE_COUNTER":
            state.counter = state.counter -1
            return{...state}
        case "SET_USERNAME":
            console.log(reducer)
            state.userName = action.newUserName
            return{...state}
        // case "ENTER_NAME ":
        //     state.userName = action.name
        default:
        return state
    }
}

export { reducer }