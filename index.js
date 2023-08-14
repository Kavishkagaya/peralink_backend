//////////////////////////////
// main js file    index.js

// Import required modules
const express = require("express");
const http = require("http");
const mysql = require("mysql");
const socketIo = require("socket.io");
const bodyParser = require("body-parser");
const path = require("path");
const socketService = require("./socketService");
const secret = require("./JWTconfig");

//create connection
const db = mysql.createConnection({
  host: "boq9xwp7trk1vrihlvkf-mysql.services.clever-cloud.com",
  user: "us5artcifyjqpibz",
  password: "xeZBGdvxd5bjLx2ooI0b",
  database: "boq9xwp7trk1vrihlvkf",
  charset: "utf8mb4",
});

// Create Express app
const app = express();
const server = http.createServer(app);
const io = socketService.initSocketIO(server);

// Add body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization "
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

// Export Database connection to the routes
module.exports = db;
const port = 3010;

// routes
const login = require("./login")(db, secret.secreteKey); // route for login
const signup = require("./signup")(db); // route for signup
const update_profile = require("./update_profile")(db); // route for additional account info
const search_friend = require("./search_friend")(db); // route for search and view profiles of friends
const search_global = require("./search_global")(db); // route for search and view profiles of any user
const post_feed = require("./post_feed")(db); // route for post feed
const profile_picture = require("./profile_picture")(db); // route for handling profile pics
const post = require("./post")(db); // route for post handling
const post_like = require("./post_like")(db); // route for like handling related to posts
const comment = require("./comment")(db); // route for comment handling related to posts
const comment_like = require("./comment_like")(db); // route for like handling related to comments
const displayProfile = require("./display_profile")(db);
const mediaUpload = require("./media_upload")(db);
const friend_request = require("./friend_request");

// Use the routes
app.use("/login", login);
app.use("/signup", signup);
app.use("/update_profile", update_profile);
app.use("/search_friend", search_friend);
app.use("/search_global", search_global);
app.use("/post_feed", post_feed);
app.use("/profile_picture", profile_picture);
app.use("/post", post);
app.use("/post_like", post_like);
app.use("/comment", comment);
app.use("/comment_like", comment_like);
app.use("/profile", displayProfile);
app.use("/media", mediaUpload);
app.use("/friend_request", friend_request);

const socketPort = 3010;

server.listen(socketPort, () => {
  console.log(`Server is running on port ${socketPort}`);
});
