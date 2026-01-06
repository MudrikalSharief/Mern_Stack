
export function ReadBlog({post}){
    let date = new Date(post.dateCreated);
    let stringDate = date.toString();
    stringDate = stringDate.slice(4, 15);

    return(
        <div className="post">
            <h1>{post.title}</h1>
            <h3>{post.author}</h3>
            <h4>{stringDate}</h4>
            <p>{post.description}</p>
        </div>
    )
}

export default ReadBlog;