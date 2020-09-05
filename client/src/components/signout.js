import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../actions';
import { useHistory } from 'react-router-dom';

export default () => {

    const state = useSelector(stat => stat.auth.authenticate);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect( () => {
        dispatch( actions.Signout );
        history.push('/');
    } );

    return(
        <div>
            Sorry to see you go!!!
        </div>
    );
};