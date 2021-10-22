const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("wow! iam very exited my frist node project");
});
const users = [
  {
    id: 0,
    name: "junaid",
    phone: "01777777777",
    age: 11,
    email: "junaid@gmail.com",
  },
  {
    id: 1,
    name: "muhammad",
    phone: "01777777777",
    age: 14,
    email: "muhammd@gmail.com",
  },
  {
    id: 2,
    name: "hasan",
    phone: "01777777777",
    age: 114,
    email: "hasan@gmail.com",
  },
  {
    id: 3,
    name: "ahmad",
    phone: "01777777777",
    age: 116,
    email: "ahmad@gmail.com",
  },
  {
    id: 4,
    name: "didar",
    phone: "01777777777",
    age: 17,
    email: "didar@gmail.com",
  },
  {
    id: 5,
    name: "hossain",
    phone: "01777777777",
    age: 91,
    email: "hossain@gmail.com",
  },
  {
    id: 6,
    name: "abbas",
    phone: "01777777777",
    age: 114,
    email: "abbas@gmail.com",
  },
  {
    id: 7,
    name: "jaker",
    phone: "01777777777",
    age: 110,
    email: "jaker@gmail.com",
  },
];

app.get("/", (req, res) => {
  res.send(users);
});
app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  // console.log(id);
  const user = users[id];
  res.send(user);
});
app.get("/user", (req, res) => {
  const search = req.query.search;
  console.log(search);
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});
app.get("/froots/mago/fazlee", (req, res) => {
  res.send(["mango", "banana", "orange", "fazleee"]);
});
app.post("/user", (req, res) => {
  console.log("hitted post ", req.body);
  const Newuser = req.body;
  Newuser.id = users.length;
  res.json(Newuser);
});
app.listen(port, () => {
  console.log("hello node world", port);
});

//
