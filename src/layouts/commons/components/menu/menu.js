import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';

const Menu = () => {
    return (
        <>
            <div class="col-3 menu">
                <ul>
                    <li><Link to="/">Dashbord</Link></li>
                    <li><Link to="/sign-in">sign-in</Link></li>
                    <li><Link to="/not-found">not-found</Link></li>
                </ul>
            </div>
         </>
      );
    };
export default Menu;