// TODO: Import the Pet model
const {
  deleteTodo,
} = require('../../../../mod-5/homework/swe-5-4-mvc-rest-api-WilliamJ2006/server/controllers/todoControllers.js');
const petModel = require(`../models/petModel.js`);

// TODO: Implement each controller function.
// Each controller should:
//   - Parse any needed data from req.params or req.body
//   - Call the appropriate Pet model method
//   - Send the appropriate response with the correct status code

module.exports.createPet = (req, res) => {
  // Parse the name from req.body
  // If name is missing, send a 400 response with an error message
  // Otherwise, create the pet and send a 201 response
  const { name } = req.body;
  if (!name) {
    return res.status(400).send({ message: `Invalid Name` });
  }
  const newPet = petModel.create(name);
  res.status(201).send(newPet);
};

module.exports.listPets = (req, res) => {
  // Get all pets and send them
  const pets = petModel.list();
  res.send(pets);
};

module.exports.getPet = (req, res) => {
  // Parse the id from req.params (remember to convert to a Number!)
  // If the pet is not found, send a 404 response with an error message
  // Otherwise, send the pet
  const { id } = req.params;
  const pet = petModel.find(Number(id));
  if (!pet) {
    return res.status(404).send({ message: `ID not found: ${id}` });
  }
  res.send(pet);
};

module.exports.updatePet = (req, res) => {
  // Parse the id from req.params and the name from req.body
  // If name is missing, send a 400 response
  // If the pet is not found, send a 404 response
  // Otherwise, send the updated pet
  const { name } = req.body;
  if (!name) {
    return res.status(400).send({ message: `Invalid Name` });
  }
  const { id } = req.params;
  const updatedPet = petModel.update(Number(id), name);
  if (!updatedPet) {
    return res.status(404).send({ message: `ID not found: ${id}` });
  }
  res.send(updatedPet);
};

module.exports.deletePet = (req, res) => {
  // Parse the id from req.params
  // If the pet is not found, send a 404 response
  // Otherwise, send the deleted pet
  const { id } = req.params;
  const deletedPet = petModel.find(Number(id));
  const deleted = petModel.destroy(Number(id));
  console.log(deletedPet);
  if (!deleted) {
    return res.status(404).send({ message: `ID not found: ${id}` });
  }
  res.json(deletedPet);
};
