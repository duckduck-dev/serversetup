import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default ChildComponent => {
    const ComposedComponent = props => {
            const history = useHistory();
            const userStatus = useSelector(stat => stat.auth.authenticate);

            useEffect( () => {
                if(!userStatus){
                    history.push('/');
                }
            } , [userStatus, history]);

            return(
                    <ChildComponent {...props} />
            );
    };
    return ComposedComponent;
}; 