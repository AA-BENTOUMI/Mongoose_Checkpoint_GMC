const Person = require("../models/Person");

exports.getall = async (req, res) => {
  try {
    //  step 1 GETTING the data from databse
    const personList = await Person.find({});
    // step2: when i get the list from the previous step i send it as a result
    res.send({ msg: "all person", persons: personList });
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getOne = async (req, res) => {
  try {
    // we send id as a parametre to find the person with that id
    const { _id } = req.params;
    const findPerson = await Person.findOne({ _id });
    res.send({ msg: "get the person", person: findPerson });
  } catch (error) {
    res.status(400).send({ msg: "can not get the person" });
  }
};

exports.postPerson = async (req, res) => {
  try {
    //   before we save the person we should check if the name dont exist in the DB
    let findPerson = await Person.findOne({ name: req.body.name });
    if (findPerson) {
      // if the name exist we return this message
      return res.send({ msg: "this name exist should change" });
    }
    // if name dosn't exist we create newperson
    // save it in databse
    const newPerson = new Person({ ...req.body });
    await newPerson.save();
    // send success
    res.send({ msg: "add route", person: newPerson });
  } catch (error) {
    res.status(400).send({ msg: "Person not saved", error });
  }
};

exports.updatePerson = async (req, res) => {
  try {
    // we send the body and the id as a parametre change person data
    let result = await Person.findByIdAndUpdate(req.params.id, req.body);
    res.send({ msg: "person is updated", result });
  } catch (error) {
    res.status(400).send({ msg: "not updated", error });
  }
};
exports.deletePerson = async (req, res) => {
  try {
    const { id } = req.params;
    // find person with his id and deleted
    let result = await Person.deleteOne({ _id: id });
    res.send({ msg: "person is deleted", result });
  } catch (error) {
    res.status(400).send({ msg: "not deleted", error });
  }
};
