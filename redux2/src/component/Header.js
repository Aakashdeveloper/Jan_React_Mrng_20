import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <header>
            <div>
                <Link to="/">Redux with React API</Link>
            </div>
        </header>
    )
}

export default Header;