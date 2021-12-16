import { Link } from "react-router-dom";



const BlogItems = (props) => {
    return (
        <article className="blogItems">
            <img src={props.image} alt={props.title} />
            <h2>{props.title}</h2>
            <Link className="greenButton" to={`/BlogData/${props.id}`}>Read More</Link>
        </article>
    );
}

export default BlogItems;