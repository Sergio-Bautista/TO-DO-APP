const express = require('express');
const app = express();

const MongoClient = require('mongodb').MongoClient
const PORT = process.env.PORT || 7000;
require('dotenv').config();

let db, 
    mongoURL = process.env.db_URL,
    dbName = "TO-DO-APP"

MongoClient.connect(mongoURL)
.then(client => {
    console.log(`connected to ${dbName} Database`);
    db = client.db(dbName)
})


app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get("/", (req, res) =>{
    db.collection('tasks').find().toArray()
    .then(data =>{
        res.render('index.ejs', { info: data})
    })
    .catch(error => console.error(error))
})



app.listen(PORT, () =>{
    console.log(`Server running on port: ${PORT}`)
})