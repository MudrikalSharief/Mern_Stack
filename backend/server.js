const connect = require("./connect")
const express = require("express")
const cors = require("cors") // Import the cors module for handling Cross-Origin Resource Sharing
const postRoutes = require("./postRoutes") // Import the postRoutes module

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())
app.use(postRoutes)

app.listen(PORT, () => {
    connect.connectToServer()
    console.log(`Server is running on port ${PORT}`)
})