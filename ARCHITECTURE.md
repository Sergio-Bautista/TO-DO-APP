# 🏗️ System Architecture

![Architecture Diagram](./assets/architecture.png)


## 📌 Overview

This document explains how different components of the To-Do application interact with each other.

---

## 🧩 Architecture Diagram

```
[ Client (Browser) ]
          ↓
[ Express Server (Node.js) ]
          ↓
[ MongoDB Database ]
```

---

## 🔄 Request Flow

1. User interacts with the UI (EJS frontend)
2. Browser sends HTTP request (GET, POST, PUT, DELETE)
3. Express server receives the request
4. Server processes logic
5. MongoDB performs database operation
6. Server sends response back to client
7. UI updates dynamically

---

## 🖥️ Frontend Layer

* Built using EJS templates
* Handles user interaction
* Sends requests using forms or fetch API

---

## ⚙️ Backend Layer

* Node.js + Express server
* Handles routing and business logic
* Connects to MongoDB
* Processes CRUD operations

---

## 🗄️ Database Layer

* MongoDB (NoSQL database)
* Stores task data in collections

### Example Document:

```json
{
  "task": "Finish homework",
  "completed": false
}
```

---

## 🔐 Environment Configuration

Sensitive data is stored in `.env`:

```
DB_URL=your_mongodb_connection_string
PORT=7000
```

---

## ⚠️ Current Limitations

* No authentication system
* No input validation
* Task deletion uses non-unique field (task name)

---

## 🚀 Future Enhancements

* Add authentication (JWT or sessions)
* Implement MVC architecture
* Use unique IDs for all operations
* Add logging & monitoring
* Deploy with cloud services (Render, AWS, etc.)

---

## 🧠 Key Concepts Demonstrated

* Client-server architecture
* RESTful communication
* CRUD operations
* Server-side rendering (EJS)
* Database integration
