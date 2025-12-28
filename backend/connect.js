
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config({path: "./config.env"})

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.ATLAS_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


let database 


module.exports = {
  //this function will connect to the mongodb server and select the database name blogData
  connectToServer: async () => {
    await client.connect() // connect to the MongoDB server
    database = client.db("blogData")
    console.log("MongoDB connected");
  },
  //this function will fetch the database object from the database
  getDb: () => {
    return database
  }
}
