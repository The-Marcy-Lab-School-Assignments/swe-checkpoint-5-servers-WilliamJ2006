const express = require('express');
const path = require('path');

// TODO: Import your controllers from ./controllers/petControllers.js
const petController = require(`./controllers/petControllers.js`);

const app = express();
const pathToFrontend = path.join(__dirname, '../frontend');

/////////////////////
// Middleware
/////////////////////

// TODO: Create a logRoutes middleware function that logs the method and
// originalUrl of every incoming request, along with the current time.

const logRoutes = (req, res, next) => {
  const time = new Date().toLocaleString();
  console.log(`${req.method}: ${req.originalUrl} - ${time}`);
  next();
};

app.use(logRoutes);

// TODO: Add the express.json() middleware to parse JSON request bodies.
app.use(express.json());

// TODO: Serve the frontend/ folder as static assets using express.static()
app.use(express.static(pathToFrontend));

/////////////////////
// Endpoints
/////////////////////

// TODO: Define RESTful endpoints for managing pets.
app.get(`/api/pets`, petController.listPets);
app.get(`/api/pets/:id`, petController.getPet);
app.post(`/api/pets`, petController.createPet);
app.patch(`/api/pets/:id`, petController.updatePet);
app.delete(`/api/pets/:id`, petController.deletePet);

const serve404 = (req, res) => {
  res.status(404).send({ error: `not found ${req.originalUrl}` });
};

app.use(serve404);

const port = 8080;
app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port}`),
);
