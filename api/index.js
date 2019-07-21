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
    const client = getClient
})