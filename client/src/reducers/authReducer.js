import { SIGN_UP, ERR_MSG, SIGN_IN } from '../actions/type';

const InitialState = {
    authenticate : '',
    errorMsg: ''

};

export default (state=InitialState , action) => {
    switch(action.type){
        case SIGN_UP:
            return { ...state, authenticate: action.payload, errorMsg: '' };
        case ERR_MSG:
            return { ...state, authenticate: '', errorMsg: action.payload };
        case SIGN_IN:
            return { ...state, authenticate: action.payload, errorMsg: '' }
        default:
            return state;
    }
};