const express = require("express")
const database = require("./connect")
const objectId = require("mongodb").ObjectId

let postRoutes = express.Router() // this line creates a new express router object

// 1. Route to get all posts
// postRoutes.route("/posts").get(async (request, response) => {
    
//     try{

//         let db = database.getDb() // get the database object
//         let posts = await db.collection("posts").find({}).toArray() // fetch all posts from the "posts" collection
        
//         if(posts.length > 0){ // check if there are any posts
//             response.json(posts) // send the posts as a JSON response
//             //console.log(posts);
//         }else{ // if no posts found, throw an 
//             // console.log(posts);
//             // console.log(posts.length);
//             // console.log(db.databaseName);
//             return response.status(404).json({
//                 message: "No posts found in database"
//             })
//         }

//     } catch(error){
//         console.error("Error fetching posts:", error)
//         return response.status(500).json({
//             message: "Internal server error, Please Check if the current Ip is whitelisted in MongoDB Atlas"
//         })
//     }
    
// })

postRoutes.route("/services").get(async (req, res) => {
  try {
    const rows = await database.query('SELECT * FROM services')
    if (rows.length > 0) return res.json(rows)
    return res.status(404).json({ message: "No posts found in database" })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ message: "Internal server error" })
  }
})

postRoutes.route("/getInventory").get(async (req, res) => {
  try {
    const rows = await database.query(
        `SELECT p.pid, p.pname, p.base_price, p.selling_price, p.quantity, c.name AS category, s.supplier_name AS supplier
        FROM product p
        JOIN category c
          ON p.categoryid = c.categoryid
        JOIN supplier s
          ON p.supplier = s.supplier_id;`
      )

    if (rows.length > 0) return res.json(rows)
    return res.status(404).json({ message: "No Inventory found in database" })

  } catch (err) {
    console.error(err)
    return res.status(500).json({ message: "Internal server error in fetching inventory" })
  }
})


postRoutes.route("/posts/:id").get(async (req, res) => {
  try {
    const rows = await database.query('SELECT * FROM posts WHERE id = ?', [req.params.id])
    if (rows.length > 0) return res.json(rows[0])
    return res.status(404).json({ message: "Post not found in database" })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ message: "Internal server error" })
  }
})

// 2. Route to get one post by id
// postRoutes.route("/posts/:id").get(async (request, response) => {
//     try{
//         let db = database.getDb() // get the database object
//         let posts = await db.collection("posts").findOne({_id: new objectId(request.params.id)}) // fetch the post with the specified id from the "posts" collection
        
//         if(posts){ // check if the post object exists
//             response.json(posts) // send the posts as a JSON response
//             console.log(posts);
//         }else{ // if no posts found, throw an error
//             console.log(posts);
//             return response.status(404).json({
//                 message: "Post not found in database"
//             })
//         }

//     }catch(error){
//         console.error("Error fetching post:", error)
//         return response.status(500).json({
//             message: "Internal server error"
//         })
//     }
    
// })

// // 3. Route to create one post 
// postRoutes.route("/posts/create").post(async (request, response) => {
//     let db = database.getDb() // get the database object
//     let mongoObject = {
//         title: request.body.title,
//         description: request.body.description,
//         author: request.body.author,
//         dateCreated: request.body.dateCreated
//     }

//     let posts = await db.collection("posts").insertOne(mongoObject) // insert the new post into the "posts" collection
//     response.json(posts) // send the inserted post as a JSON response
// })

postRoutes.route("/posts/create").post(async (req, res) => {
  const { title, description, author, dateCreated } = req.body
  const result = await database.query(
    'INSERT INTO posts (title, description, author, dateCreated) VALUES (?, ?, ?, ?)',
    [title, description, author, dateCreated]
  )
  return res.json({ insertId: result.insertId })
})

// 4. Route to Update one post 
// postRoutes.route("/posts/update/:id").put(async (request, response) => { // changed to put method
//     let db = database.getDb() // get the database object
//     let mongoObject = {
//         $set: { // use $set operator to update only specified fields
//             title: request.body.title,
//             description: request.body.description,
//             author: request.body.author,
//             dateCreated: request.body.dateCreated
//         }
//     }

//     let posts = await db.collection("posts").updateOne({_id: new objectId(request.params.id)} ,mongoObject) // update the post with the specified id in the "posts" collection
//     response.json(posts) // send the inserted post as a JSON response
// })

postRoutes.route("/posts/update/:id").put(async (req, res) => {
  const { title, description, author, dateCreated } = req.body
  const result = await database.query(
    'UPDATE posts SET title = ?, description = ?, author = ?, dateCreated = ? WHERE id = ?',
    [title, description, author, dateCreated, req.params.id]
  )
  return res.json({ affectedRows: result.affectedRows })
})

// 5. Route to delete one post by id
// postRoutes.route("/posts/delete/:id").delete(async (request, response) => { // changed to delete method
//     let db = database.getDb() // get the database object

//     let posts = await db.collection("posts").deleteOne({_id: new objectId(request.params.id)}) // delete the post with the specified id from the "posts" collection

//     response.json(posts) // send the deleted post as a JSON response
// })

postRoutes.route("/posts/delete/:id").delete(async (req, res) => {
  const result = await database.query('DELETE FROM posts WHERE id = ?', [req.params.id])
  return res.json({ affectedRows: result.affectedRows })
})

module.exports = postRoutes // export the router object to be used in other files