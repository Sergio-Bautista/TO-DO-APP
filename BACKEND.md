# 🖥️ Backend Documentation

## 📌 Overview

This file documents the server-side logic of the To-Do application.
The backend is built using **Node.js**, **Express**, and **MongoDB**, and is responsible for handling API requests, managing data, and rendering views.

---

## ⚙️ Tech Stack

* Node.js
* Express.js
* MongoDB (Native Driver)
* EJS (Templating Engine)
* dotenv (Environment Variables)

---

## 🔗 Server Setup

The server is initialized using Express and configured with middleware:

```js
const express = require('express');
const app = express();

app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
```

### ✅ What this does:

* Sets EJS as the templating engine
* Serves static files from the `public` folder
* Parses incoming form data and JSON

---

## 🗄️ Database Connection

```js
MongoClient.connect(mongoURL)
  .then(client => {
    db = client.db("TO-DO-APP")
  })
  .catch(error => console.error(error))
```

### ✅ Description:

* Connects to MongoDB using a connection string stored in `.env`
* Initializes the `db` variable for use across routes

---

## 🔌 API Routes

### 🏠 GET `/`

Fetches all tasks and renders them on the homepage.

```js
app.get("/", (req, res) => {
  db.collection("tasks").find().toArray()
    .then(data => res.render("index.ejs", { info: data }))
})
```

---

### ➕ POST `/addTask`

Adds a new task to the database.

```js
app.post("/addTask", (req, res) => {
  db.collection("tasks").insertOne({
    task: req.body.task,
    completed: false
  })
  .then(() => res.redirect("/"))
})
```

---

### ❌ DELETE `/deleteTask`

Deletes a task based on its name.

```js
app.delete("/deleteTask", (req, res) => {
  db.collection("tasks").deleteOne({ task: req.body.value })
    .then(() => res.json("Task deleted"))
})
```

⚠️ **Note:** Deleting by task name may cause issues if multiple tasks share the same name.

---

### ✅ PUT `/completeTask`

Updates the completion status of a task.

```js
app.put("/completeTask", (req, res) => {
  db.collection("tasks").updateOne(
    { task: req.body.task },
    { $set: { completed: req.body.value } }
  )
  .then(() => res.json("Update successful"))
})
```

---

## 🗂️ Data Structure

Each task is stored in MongoDB as:

```json
{
  "_id": "ObjectId(059638754693876)",
  "task": "Example task",
  "completed": false
}
```

---

## 🔄 Application Flow

1. User interacts with the frontend (EJS)
2. Request is sent to Express server
3. Server processes request
4. MongoDB is queried/updated
5. Response is sent back to client

---

## 🚀 Future Improvements

* Use `_id` instead of task name for updates/deletes
* Add authentication (login system)
* Input validation & error handling
* Convert to REST API + frontend framework (React)

---

## 🧠 Key Learning Points

* CRUD operations with MongoDB
* RESTful route design
* Server-side rendering with EJS
* Handling client-server communication
