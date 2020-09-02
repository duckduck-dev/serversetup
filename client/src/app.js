import React, { useState, useEffect } from 'react';


export default () => {
    //state
    const [movie, setMovie] = useState( [] );
    //something like lifeCycle method
    useEffect( () => setMovie( [{ name: 'surya'}, { name: 'soundar'}] ) , []);

    //returns an jsx
    const renderContent = movie.map(mov => {
        return <>{mov.name}<br /></>   
    } );

    return <div>{renderContent}</div>

};

