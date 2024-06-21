const express = require('express')
const { MongoClient } = require('mongodb');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express()
const port = 5173

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'myBlogsManager';


app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
  }));

app.get('/', async (req, res) => {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('blogs');
    const findResult = await collection.find({}).toArray()
    console.log("hello")
    res.json(findResult)
})

app.post('/', async (req, res) => {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('blogs');
    const password = req.body
    const findResult = await collection.insertOne(password)
    console.log("hi")
    res.send({ findResult })
})

app.delete('/', async (req, res) => {
    await client.connect();
    const db = client.db(dbName);
    const password = req.body
    const collection = db.collection('blogs');
    const findResult = await collection.deleteOne(password)
    res.send({ findResult })
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})