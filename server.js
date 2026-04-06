const express = require('express');
const app = express();

const MongoClient = require('mongodb').MongoClient
const PORT = process.env.PORT || 7000;
require('dotenv').config();

app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

let db, 
    mongoURL = process.env.db_URL,
    dbName = "TO-DO-APP"

MongoClient.connect(mongoURL)
.then(client => {
    console.log(`connected to ${dbName} Database`);
    db = client.db(dbName)
})

app.get("/", (req, res) =>{
    const tasks = db.collection("tasks").find().toArray()
    console.log(tasks)
    
    tasks.then(data =>{
        res.render('index.ejs', { info: data})
    })
    .catch(error => console.error(error))
});

app.post("/addTask", (req, res) => {
    
    const addTask = db.collection("tasks").insertOne({task: req.body.task, completed: false})

    addTask.then( () => {
        console.log("Task Added!!!");
        res.redirect("/")
    })
    .catch(error => console.error(error))
});

app.delete("/deleteTask", (req, res) =>{
    db.collection('tasks').deleteOne({ task: req.body.value })

    .then(result => {
        console.log("task deleted")
        res.json("task deleted")
    })
    .catch(error => console.error(error))

})



app.listen(PORT, () =>{
    console.log(`Server running on port: ${PORT}`)
})