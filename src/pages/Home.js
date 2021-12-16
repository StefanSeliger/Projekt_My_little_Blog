import React, { Component } from 'react';
import Blog from './Blog.js';
import { Link } from "react-router-dom"

class Home extends React.Component {
    render() {
        return (
            <section className="homeSection">
                <article>
                    <h2>Welcome to my</h2>
                    <h2>simple Blog</h2>
                    <Link className="greenButton" to="/blog" element={<Blog />}>Go to Articles</Link>
                </article>
            </section>
        );
    }
}

export default Home;