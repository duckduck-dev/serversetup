import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { useSelector, useDispatch } from 'react-redux';
import { Signup } from '../actions';

export default reduxForm( { form: 'signupForm' } ) ( props => {

    const {handleSubmit} = props;
    const auth = useSelector(state => state.auth);
    const Dispatch = useDispatch();

    const onInputSubmit = ( { email, password } ) => {
        Dispatch( Signup( { email, password } ) );
    };
    
    return(        
        <div>
            <form onSubmit={handleSubmit(onInputSubmit)}>
                <label>Enter Your Email</label>
                <Field type="text" name="email" component="input" autoComplete="none"/>
                <label>Enter Your Password</label>
                <Field type="password" name="password" component="input" autoComplete="none"/>
                <p>{ auth.errorMsg }</p>
                <button className="waves-effect waves btn" >Sign Up</button>
            </form>
        </div>
    );
});