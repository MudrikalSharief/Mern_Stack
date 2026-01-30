import { Link } from "react-router-dom";

export function ServiceCard({post}) {
    let date = new Date(post.dateCreated);
    let stringDate = date.toString();
    stringDate = stringDate.slice(4, 15);

    return(
        
        <Link to={`/readblog/${post._id}`} className="post">
            <h1>{post.service_name}</h1>
            <h3>{post.service_price}</h3>
            {/* <p>{post.description}</p> */}
        </Link>
    )
}

export default ServiceCard;        