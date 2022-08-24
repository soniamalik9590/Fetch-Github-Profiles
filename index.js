const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
const port = 3000;

app.get("/", (req, res) => {
  res.render("home");
});
app.post("/show", async (req, res) => {
  try {
    var val = req.body.num;
    let response = await axios.get(`https://api.github.com/users/${val}`);
    var na = response.data.name;
    var logn = response.data.login;
    var bi = response.data.bio;
    var follow = response.data.followers;
    var followi = response.data.following;
    console.log(na);
    console.log(bi);
    console.log(follow);
    console.log(followi);
    res.render("output", {
      n: na,
      l: logn,
      b: bi,
      f: follow,
      fw: followi,
    });
  } catch (err) {
    console.log(err);
  }
});
app.listen(port, () => {
  console.log(`The server is listening at port ${port}`);
});
