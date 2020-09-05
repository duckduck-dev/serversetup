import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default () => {

    const status = useSelector(stat => stat.auth.authenticate);

    const renderContent = () => {
        if(status) return <Link to="/signout" style={ { padding: '0 1rem 0 1vw' } }>Sign out</Link>
        return[
            <>
            <Link to="/signup" style={ { padding: '0 1rem 0 1vw' } }>Sign up</Link>
            <Link to="/signin" style={ { padding: '0 1rem 0 1vw' } } >Sign in</Link>
            </>
        ];
    };

    return(
        <div className="nav-wrapper">
            <nav className="light-blue lighten-1">
            <Link to="/" className="brand-logo left">Auth</Link>
            <div className="center">
            {renderContent()}
            <Link to="/about" style={ { padding: '0 1rem 0 1vw' } }>About</Link>
            </div>
            </nav>
    </div>
    );
};