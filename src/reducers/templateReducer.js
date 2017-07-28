export default (state = {
    message: "hello World"
}, action) => {
    console.log(action);
    switch (action.type) {
        case "SAY_HELLO":

            return Object.assign({}, state, {
                message: "Hello"

            })

        default:
            return state;
    }
}
