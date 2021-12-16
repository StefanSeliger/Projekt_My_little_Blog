import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return (
            <header className="headerHome">
                <nav>
                    <h1>My Life</h1>
                    <article className="navLinks">
                        <Link to='/'>Home</Link>
                        <Link to='/blog'>Blog</Link>
                    </article>
                </nav>
            </header>
        );
    }
}

export default Nav;

