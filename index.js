const express = require("express");
//JSON DATA IMPORT
const { users } = require("./data/users.json");

const usersRouter = require("./routes/users");
const booksRouter = require("./routes/books");

const app = express();//initialize

const PORT = 8081;


app.use(express.json());//it will use json format

//to check if our server is running
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Server is up and running",
    });
});

app.use("/users", usersRouter);
app.use("/books", booksRouter);

//any other if searched which doent exist then it will handle it
app.get("*", (req, res) => {
    res.status(404).json({
        message: "this route does not exist",
    });
});

app.listen(PORT, () => {
    console.log('Server is running at port ${PORT}');
});