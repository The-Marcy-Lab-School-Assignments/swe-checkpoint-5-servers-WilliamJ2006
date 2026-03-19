// A helper for generating unique IDs
let id = 1;
const getId = () => id++;

// TODO: Create an in-memory "database" array with 2-3 starter pets.
// Each pet should have an id (from getId) and a name.
const pets = [
  {
    name: `Gabe`,
    id: getId(),
  },
  {
    name: `Chris`,
    id: getId(),
  },
  {
    name: `Zane`,
    id: getId(),
  },
];

// TODO: Create a new pet and add it to the array. Return the new pet.
module.exports.create = (name) => {
  const newPet = { name, id: getId() };
  pets.push(newPet);
  return { ...newPet };
};

// TODO: Return a copy of all pets.
module.exports.list = () => {
  return [...pets];
};

// TODO: Find and return a single pet by its ID.
module.exports.find = (id) => {
  const pet = pets.find((pet) => pet.id === id);
  if (!pet) return null;
  return { ...pet };
};

// TODO: Update the name of a pet. Return the updated pet,
// or null if not found.
module.exports.update = (id, newName) => {
  const pet = pets.find((pet) => pet.id === id);
  if (!pet) return null;
  pet.name = newName;
  return { ...pet };
};

// TODO: Remove a pet from the array. Return the deleted pet,
// or null if not found.
module.exports.destroy = (id) => {
  const petIndex = pets.findIndex((pet) => pet.id === id);
  if (petIndex < 0) return null;
  pets.splice(petIndex, 1);
  return true;
};
