// creates the express instance for the app
const express = require('express');
const app = express();

// defines the client for the mongoDB / creates a port using the env file
const MongoClient = require('mongodb').MongoClient
const PORT = process.env.PORT || 7000;
require('dotenv').config();

// defines extra utilities 
app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// sets the APP name and the URL for the database using the .env file
let db, 
    mongoURL = process.env.db_URL,
    dbName = "TO-DO-APP"

// connects to the database and sets the name 
MongoClient.connect(mongoURL)
.then(client => {
    console.log(`connected to ${dbName} Database`);
    db = client.db(dbName)
})

// root route 
app.get("/", (req, res) =>{
    // gets the tasks from the db and converts them into an array of objects
    const tasks = db.collection("tasks").find().toArray()
    console.log(tasks)
    
    // passes the array of 'tasks' to the ejs file to render
    tasks.then(data =>{
        res.render('index.ejs', { info: data})
    })
    .catch(error => console.error(error))
});
// add a task route
app.post("/addTask", (req, res) => {

    // adds a task to the collection in the db
    const addTask = db.collection("tasks").insertOne({task: req.body.task, completed: false})

    // once the task is added the ejs is rendered with the new information by the redirect method
    addTask.then( () => {
        console.log("Task Added!!!");
        res.redirect("/")
    })
    .catch(error => console.error(error))
});

// delete a task route 
app.delete("/deleteTask", (req, res) =>{
    // looks for the value of the input in the html/ejs file in the db and removes it 
    db.collection('tasks').deleteOne({ task: req.body.value })

    // once the task is deleted, respond to the client with json 
    .then(result => {
        console.log("task deleted")
        res.json("task deleted")
    })
    .catch(error => console.error(error))

})


// makes the server listen
app.listen(PORT, () =>{
    console.log(`Server running on port: ${PORT}`)
})