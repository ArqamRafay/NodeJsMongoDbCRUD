// var express = require('express');
// var app = express();
// const router = express.Router();
// const { MongoClient } = require('mongodb'),
//     assert = require('assert');
// const mongoos = require('mongoose')

// const uri = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false";

// app.get('/getMongoConnection', async (req, res) => {
//     await main().catch(console.error);
//     res.end('Welcome');
// })

// async function main() {

//     const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

//     try {
//         // Connect the client to the server
//         await client.connect()
//             .then(() => console.log('Connected successfully to server'))
//             .catch((err) => console.log(err));
//         // Make the appropriate DB calls
//         // await listDatabases(client);

//         // Establish and verify connection
//         // await client.db("admin").command({ ping: 1 });
//         // console.log("Connected successfully to server");

//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
// }

// async function listDatabases(client) {
//     databasesList = await client.db().admin().listDatabases();
//     console.log("Databases List:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));

// };








// module.exports = app;