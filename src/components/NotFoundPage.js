import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        404!
        <br/>
        Page Not Found
        <br/>
        <Link to="/">Go home</Link>
    </div>
);

export default NotFoundPage;