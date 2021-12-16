import BlogData from '../components/BlogData.js';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"
import Blog from './Blog.js';

const BlogDetails = () => {

    let { id } = useParams()
    console.log(useParams().id);

    let blogDataItems = BlogData.filter(elt => {
        return elt.id.toString() === id.toString()
    })
    console.log(blogDataItems)

    return (
        <section className="blogDetails">
            <Link to="/blog" element={<Blog />}>back</Link>

            <article className="blogDetailsArticle">
                <img src={blogDataItems[0].img_url} alt={blogDataItems[0].title} />
                <div className="blogDetailText">
                    <div className="blogDetailsHeadline">
                        <h3>{blogDataItems[0].title}</h3>
                        <p>{blogDataItems[0].published_date}</p>
                    </div>
                    <p>{blogDataItems[0].description}</p>
                    <p>By {blogDataItems[0].author}</p>
                </div>

            </article>
        </section>

    );
}

export default BlogDetails;