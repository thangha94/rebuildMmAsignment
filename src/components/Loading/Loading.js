import React from 'react';

import './Loading.scss';

const Loading = ({ loading }) => {
    return (
        <>{loading && <ul data-testid="loading" className="loading">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>}</>
    );
};

export default Loading;