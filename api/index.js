const express = require('express')
const app = express()

const MongoClient = require('mongodb').MongoClient
// Connection url
const creds = require('./creds.json')
const credString = `${creds.UID}:${encodeURIComponent(creds.PWD)}`
const url = `mongodb+srv://${credString}@cluster0-mhfkr.gcp.mongodb.net/`

// Connect using MongoClient
const getClient = () => new MongoClient(url, { useNewUrlParser: true });

app.get('/', (req, res) => {
    const client = getClient()
    client.connect((err) =>{
        client.db('data')
            .collection('flights')
            .find({})
            .toArray()
            .then((data) => res.json(data))
            .then(client.close())
    })
})

const server = app.listen(8080, () => {
    const host = server.address().address
    const port = server.address().port

    console.log(`App running at https://${host}:${port}`)
})