const { db } = require("../config/db.js");
const express = require("express");

const checkRouter = express.Router();

checkRouter.get("/user", (req, res) => {
  console.log("Docker Successfull");
  res.send("Successfull request");
});

checkRouter.get("/get", (req, res) => {
  const getQuery = "SELECT * FROM userdata";

  db.query(getQuery, (err, data) => {
    if (err) {
      res.status(500).send("Error");
    } else {
      res.status(200).send({ Data: data });
    }
  });
});

checkRouter.post("/add", (req, res) => {
  console.log("add data");

  //console.log(req.body.name);
  const q = "INSERT INTO userdata(`name`, `email`, `password`) VALUES (?,?,?)";
  const values = [req.body.name, req.body.email, req.body.password];

  db.query(q, values, (err, results) => {
    if (err) {
      res.status(500).send({ ERROR: err });
    } else {
      if (results) {
        res.status(200).send({ data: "Data added Successfully" });
      }
    }
  });
});

// checkRouter.put("/edit/:id", (req, res) => {
//   console.log("Update Data");

//   const { id } = req.params;

//   console.log(id);
//   const values = [req.body.name, req.body.email, req.body.password, id];

//   const updateQuery = `UPDATE userdata SET name=?, email=?, password=? WHERE id=?`;

//   db.query(updateQuery, [values], (err, results) => {
//     if (err) {
//       res.status(500).send({ Error: err });
//     } else {
//       res.status(200).send({ Data: "Data Updated" });
//     }
//   });
// });

checkRouter.put("/edit/:id", (req, res) => {
  console.log("Update Data");

  const { id } = req.params;

  console.log(id);
  const values = [req.body.name, req.body.email, req.body.password];

  const updateQuery = `UPDATE userdata SET name=?, email=?, password=? WHERE id=${id}`;

  db.query(updateQuery, values, (err, results) => {
    if (err) {
      res.status(500).send({ Error: err });
    } else {
      res.status(200).send({ Data: "Data Updated" });
    }
  });
});

module.exports = { checkRouter };
