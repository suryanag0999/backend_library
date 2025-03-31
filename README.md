# Library Management System (MERN Stack)

This is a simple **Library Management System** built using the **MERN (MongoDB, Express.js, React, Node.js) stack**. It allows users to perform CRUD (Create, Read, Update, Delete) operations on book records.

## Features
✅ Create a new book record.
✅ Retrieve all books from the database.
✅ Update book details.
✅ Delete a book by ID.

## Technologies Used
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Database**: MongoDB
- **Tools**: Postman (for API testing), VS Code

## Folder Structure
```
backend/
│── controllers/         # Handles business logic (bookController.js)
│── models/              # Mongoose Schema (Book.js)
│── routes/              # API Routes (bookRoutes.js)
│── utils/               # Database connection file (db.js)
│── index.js             # Main server file
│── .env                 # Environment variables
```

## Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/library-management-system.git
cd library-management-system/backend
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Configure Environment Variables
Create a **.env** file in the root folder and add:
```env
PORT=3000
MONGODB_URL=mongodb://127.0.0.1:27017/backend_library
```

### 4️⃣ Start the Server
```bash
npm start  # or nodemon index.js
```

## API Endpoints

| Method | Endpoint       | Description                |
|--------|--------------|---------------------------|
| POST   | `/books`      | Add a new book            |
| GET    | `/books`      | Get all books             |
| PUT    | `/books/:id`  | Update book details       |
| DELETE | `/books/:id`  | Delete a book by ID       |

## Example API Requests (Using Postman)

### ➤ **Add a Book (POST /books)**
```json
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "genre": "Fiction",
  "publishedYear": 1925
}
```

### ➤ **Retrieve All Books (GET /books)**
Simply make a GET request to `/books` to fetch all books.

### ➤ **Update a Book (PUT /books/:id)**
```json
{
  "title": "The Great Gatsby (Updated)"
}
```

### ➤ **Delete a Book (DELETE /books/:id)**
Make a DELETE request to `/books/:id` to remove a book.

## Contributing
Feel free to contribute by creating pull requests! 🚀

## License
This project is open-source and available under the [MIT License](LICENSE).

---
Made with ❤️ by **suryanag**

