import React from 'react';
import { Link } from 'react-router-dom';


export const NoResults = ({ txt, icon }) => {
    return (
        <div className="no-search flex col pos a j-between a-center">
            {icon}
            <p>{txt}</p>
            <Link to='/' className="back-to-tracks flex a-center">
                <small>back to tracks</small>
            </Link>
        </div>
    );
};
