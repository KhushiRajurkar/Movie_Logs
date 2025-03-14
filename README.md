# 🎬 Movie Notes App  

A **simple web application** to store and manage your favorite **movies**!  
Built with **Node.js, Express, PostgreSQL, EJS, and Axios**, it allows users to **add, edit, and delete** movie entries along with ratings, notes, and posters fetched from the **OMDb API**.  

---

## Features  
1.  **Add movies** with title, rating, watched date, and personal notes.  
2. **Automatically fetch movie posters** using the **OMDb API**.  
3. **Edit movie details** anytime.  
4. **Delete movies** from the list.  
5. **Bootstrap-styled UI** for a modern look.  

---

## 🛠️ Tech Stack  
- **Backend**: Node.js, Express.js  
- **Database**: PostgreSQL  
- **Templating Engine**: EJS  
- **API**: OMDb API (for movie posters & metadata)  
- **Styling**: Bootstrap + Custom CSS  

---

## 📸 Screenshots  
![image](https://github.com/user-attachments/assets/044d0452-6c66-47ee-bb4b-6138138e3fdd)

---

# 💻 Setup Guide for Movie Notes CRUD App  

Follow these steps to set up and run the **Movie Notes CRUD App** locally on your machine.  

---

## 🚀 Prerequisites  

Before you begin, make sure you have:  
✅ **Node.js** installed – [Download Node.js](https://nodejs.org/)  
✅ **PostgreSQL** installed – [Download PostgreSQL](https://www.postgresql.org/download/)  
✅ A **GitHub account** to clone the repository  

---

## 📦 Step 1: Clone the Repository  
```sh
git clone https://github.com/KhushiRajurkar/Movie_Logs.git
cd Movie_Logs
```
## 📥 Step 2: Install Dependencies
```sh
npm install
```
## 🔑 Step 3: Set Up Environment Variables
```sh
OMDB_API_KEY=your_api_key_here
```
## 🛢️ Step 4: Set Up PostgreSQL Database
1️⃣ Open PostgreSQL CLI (psql)

2️⃣ Run the following SQL commands to create your database:
```sh
CREATE DATABASE movies_db;
\c movies_db

CREATE TABLE movies (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    rating INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 10),
    watched_date DATE NOT NULL,
    notes TEXT,
    poster_url TEXT
);
```
## 🚀 Step 5: Start the Server
```sh
node index.js

```
