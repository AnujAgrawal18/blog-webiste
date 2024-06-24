const express = require('express')
// const { MongoClient } = require('mongodb');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs/promises');


const app = express()
const port = 5173

// const url = 'mongodb://192.168.29.221:27017';
// const client = new MongoClient(url);
// const dbName = 'myBlogsManager';


app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));



app.get('/', async (req, res) => {
    // await client.connect();
    // const db = client.db(dbName);
    // const collection = db.collection('blogs');
    // const findResult = await collection.find({}, { sort: { date: 1 } }).toArray()
    var datas = await fs.readFile('data.json');
    var myObject = JSON.parse(datas);
    res.json(myObject)
})

app.post('/', async (req, res) => {
    // await client.connect();
    // const db = client.db(dbName);
    // const collection = db.collection('blogs');
    var datas = await fs.readFile('data.json');
    var myObject = JSON.parse(datas);
    const data = req.body
    // const findResult = await collection.insertOne(data)
    myObject.push(data);
    const findResult = await fs.writeFile("data.json", JSON.stringify(myObject))
    res.send({ findResult })
})

app.listen(port, () => {
    console.log(`Example app listening on port http://192.168.29.221:${port}`)
})