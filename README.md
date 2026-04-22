## 📝 Project Overview
This is a full-stack To-Do application designed to help users manage tasks efficiently. The application supports creating, updating, and deleting tasks, with dynamic rendering for a smooth user experience.

## 🎥 Demo
[![To-Do App Demo](https://img.youtube.com/vi/Zt3lCyY8-tw/0.jpg)](https://youtu.be/Zt3lCyY8-tw)
*A quick walkthrough demonstrating task creation, updates, and deletion.*

---

## ⚙️ Features
- Create, edit, and delete tasks  
- Dynamic UI rendering using EJS  
- Persistent data storage with MongoDB  
- RESTful routing using Express  
- Simple and intuitive user interface  

---

## 🛠️ Tech Stack
- **Frontend:** JavaScript, EJS, HTML, CSS  
- **Backend:** Node.js, Express  
- **Database:** MongoDB  

---

## 🧠 How It Works
The application follows a standard MVC-like structure:
- **Routes** handle incoming requests (GET, POST, PUT, DELETE)  
- **Database (MongoDB)** stores task data  
- **EJS templates** dynamically render tasks to the UI  

When a user adds or updates a task:
1. The request is sent to the Express server  
2. The server processes the request and updates MongoDB  
3. The updated task list is rendered back to the user  

---

## ▶️ How to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/Sergio-Bautista/TO-DO-APP.git
2. Navigate to the project folder:
   ```bash
   cd TO-DO-APP
3. Install dependencies:
   ```bash
   npm install
4. Start the server:
   ```bash
   node server.js
5. Open  your browser and go to:
   ```bash
   http://localhost:7000

---

## 🏗️ Architecture Preview

![Architecture Diagram](./assets/architecture.png)

📄 [View Full Architecture Documentation](./ARCHITECTURE.md)

---

## 📚 Documentation
- 📄 [Backend Docs](./BACKEND.md)
- 🏗️ [Architecture](./ARCHITECTURE.md)
