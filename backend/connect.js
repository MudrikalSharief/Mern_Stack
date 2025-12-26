
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotemv').config({path: "./config.env"})

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
  connectToServer: () => {
    database = client.db("blogData")
  },
  //this function will fetch the database object from the database
  getDb: () => {
    return database
  }
}
//this Funtion will only ping the mongodb server to check the connection
/*
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}   
run().catch(console.dir);
*/