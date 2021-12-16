import React, { Component } from 'react';
import BlogItems from '../components/BlogItems.js';
import BlogData from '../components/BlogData.js';
import { v4 as uuidv4 } from 'uuid';



class Blog extends React.Component {
    render() {
        return (
                <section className="blogSection">
                    {BlogData.map(elt =>
                        <BlogItems
                            key={uuidv4()}
                            image={elt.img_url}
                            title={elt.title}
                            id={elt.id}
                        />
                    )}
                </section>
        );
    }
}

export default Blog;