const INITIAL_STATE = {
    username: '',
    isLogin: false,
    picture: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {...state, username: action.payload, isLogin: true}
        case 'LOGOUT':
            return INITIAL_STATE
        case 'SETPICTURE':
            console.log('masuksetpicture')
            console.log({...state, picture:action.payload})
            return {...state, picture:action.payload}
        default:
            return state
    }
}