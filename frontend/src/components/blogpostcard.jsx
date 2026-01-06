import { Link } from "react-router-dom";

export function BlogPostCard({post}) {
    let date = new Date(post.dateCreated);
    let stringDate = date.toString();
    stringDate = stringDate.slice(4, 15);

    return(
        
        <Link to={`/readblog/${post._id}`} key={post._id} className="post">
            <h1>{post.title}</h1>
            <h3>{post.author}</h3>
            <h4>{stringDate}</h4>
            {/* <p>{post.description}</p> */}
        </Link>
    )
}

export default BlogPostCard;        