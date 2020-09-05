import React from 'react';
import { useHistory } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../actions';

export default reduxForm( { form : 'signin' } ) ( props => {

    const Dispatch = useDispatch();
    const history = useHistory();
    const state = useSelector(user => user.auth);
    const { handleSubmit } = props;

    const onInputSubmit = formProps => {
        Dispatch( actions.Signin(formProps) );
        console.log(state);
        if(state.authenticate) history.push('/')
    };

    return(
        <div>
            <form onSubmit={ handleSubmit(onInputSubmit) }>
                <label>Enter Your Email</label>
                <Field type="text" name="email"  component="input" required/>
                <label>Enter Your Password</label>
                <Field type="password" name="password"  component="input" required/>
                <p>{state.errorMsg}</p>
                <button className="waves-effect waves btn">Sign in</button>
            </form>
        </div>
    );
});