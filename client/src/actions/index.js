import axios from 'axios';
import { SIGN_UP, ERR_MSG, SIGN_IN } from './type';

export const Signup = ({ email, password }) => async dispatch => {
    try{
        const signup = await axios.post('http://localhost:5000/signup', { email, password } );
        dispatch( { type: SIGN_UP, payload: signup.data } );
        localStorage.setItem('Token', signup.data.token);
    }
    catch(err){
        dispatch( { type: ERR_MSG, payload: err.response.data.error } );
    };     
};

export const Signin = ({email, password}) => async dispatch => {
    console.log(email, password);
    try{
        const signin = await axios.post('http://localhost:5000/signin', {email, password} );
        dispatch( { type: SIGN_IN, payload: signin.data } );
        localStorage.setItem('Token', signin.data.token);
    }
    catch(err){
        dispatch( { type: ERR_MSG, payload: 'Account not found'} );
    };     
};

export const Signout = dispatch => {
    dispatch( { type: SIGN_UP, payload: '' } );
    localStorage.removeItem('Token');
};

