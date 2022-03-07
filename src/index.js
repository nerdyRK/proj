const express = require("express");
const app = express();
const path = require("path");

const spath = path.join(__dirname, "../public");
app.use(express.static(spath, { extensions: ["html"] }));

// app.get("/", (req, res) => {
//   res.sendFile("./public/index.html");
// });

app.listen(5008);
