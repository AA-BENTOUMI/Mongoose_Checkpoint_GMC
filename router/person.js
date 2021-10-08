const express = require("express");
const router = express.Router();
const {
  getall,
  getOne,
  postPerson,
  updatePerson,
  deletePerson,
} = require("../controllers/person.controllers");

// Read => GET ()
// @Route Get ALL Persons
// @ Method : GET
// @data:
// Path: http://localhost:5000/api/person
router.get("/", getall);
// Read => GET ()
// @Route Get ALL Persons
// @ Method : GET
// @data:
// Path: http://localhost:5000/api/person
router.get("/:_id", getOne);
// create => POST ()
// @Route Add persons
// @ Method : POST
// @data: req.body
// Path: http://localhost:5000/api/person
router.post("/", postPerson);
// Update => Update ()
// @Route update a persons
// @ Method : UPDATE
// @data: ID req.params + req.body
// Path: http://localhost:5000/api/person/:id
router.put("/:id", updatePerson);
// DELETE => DELETE ()
// @Route delete a persons
// @ Method : DELETE
// @data: ID req.params
// Path: http://localhost:5000/api/person/:id
router.delete("/:id", deletePerson);

module.exports = router;
