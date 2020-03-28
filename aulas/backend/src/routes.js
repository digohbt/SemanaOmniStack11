const express = require('express');
const OngController = require('./controllers/OngController')
const IncidentesController = require('./controllers/incidentController') 
const ProfileController = require("./controllers/ProfileController")
const SessionController = require("./controllers/SessionController")
 
const routes = express.Router();

routes.post('/sessions',SessionController.create )

routes.get('/ongs',OngController.index );
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index)

routes.get('/incidents', IncidentesController.index);
routes.post('/incidents', IncidentesController.create);
routes.delete('/incidents/:id', IncidentesController.delete);



module.exports = routes