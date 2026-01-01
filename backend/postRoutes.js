const express = require("express")
const database = require("./connect")
const objectId = require("mongodb").ObjectId

let postRoutes = express.Router() // this line creates a new express router object

// 1. Route to get all posts
postRoutes.route("/posts").get(async (request, response) => {
    
    try{

        let db = database.getDb() // get the database object
        let posts = await db.collection("posts").find({}).toArray() // fetch all posts from the "posts" collection
        
        if(posts.length > 0){ // check if there are any posts
            response.json(posts) // send the posts as a JSON response
            //console.log(posts);
        }else{ // if no posts found, throw an 
            // console.log(posts);
            // console.log(posts.length);
            // console.log(db.databaseName);
            return response.status(404).json({
                message: "No posts found in database"
            })
        }

    } catch(error){
        console.error("Error fetching posts:", error)
        return response.status(500).json({
            message: "Internal server error, Please Check if the current Ip is whitelisted in MongoDB Atlas"
        })
    }
    
})

// 2. Route to get one post by id
postRoutes.route("/posts/:id").get(async (request, response) => {
    try{
        let db = database.getDb() // get the database object
        let posts = await db.collection("posts").findOne({_id: new objectId(request.params.id)}) // fetch the post with the specified id from the "posts" collection
        
        if(posts){ // check if the post object exists
            response.json(posts) // send the posts as a JSON response
            console.log(posts);
        }else{ // if no posts found, throw an error
            console.log(posts);
            return response.status(404).json({
                message: "Post not found in database"
            })
        }

    }catch(error){
        console.error("Error fetching post:", error)
        return response.status(500).json({
            message: "Internal server error"
        })
    }
    
})

// 3. Route to create one post 
postRoutes.route("/posts/create").post(async (request, response) => {
    let db = database.getDb() // get the database object
    let mongoObject = {
        title: request.body.title,
        description: request.body.description,
        content: request.body.content,
        author: request.body.author,
        dateCreated: request.body.dateCreated
    }

    let posts = await db.collection("posts").insertOne(mongoObject) // insert the new post into the "posts" collection
    response.json(posts) // send the inserted post as a JSON response
})

// 4. Route to Update one post 
postRoutes.route("/posts/update/:id").put(async (request, response) => { // changed to put method
    let db = database.getDb() // get the database object
    let mongoObject = {
        $set: { // use $set operator to update only specified fields
            title: request.body.title,
            description: request.body.description,
            content: request.body.content,
            author: request.body.author,
            dateCreated: request.body.dateCreated
        }
    }

    let posts = await db.collection("posts").updateOne({_id: new objectId(request.params.id)} ,mongoObject) // update the post with the specified id in the "posts" collection
    response.json(posts) // send the inserted post as a JSON response
})

// 5. Route to delete one post by id
postRoutes.route("/posts/delete/:id").delete(async (request, response) => { // changed to delete method
    let db = database.getDb() // get the database object

    let posts = await db.collection("posts").deleteOne({_id: new objectId(request.params.id)}) // delete the post with the specified id from the "posts" collection

    response.json(posts) // send the deleted post as a JSON response
})


module.exports = postRoutes // export the router object to be used in other files