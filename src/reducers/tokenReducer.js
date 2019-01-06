const tokenReducer = function (state = null, action) {
    switch (action.type) {
        case 'TOKEN_ADD':
            return action.payload;
        case 'USER_LOGOUT':
            return action.payload;
        default:
            return state;
    }
}

export default tokenReducer;
