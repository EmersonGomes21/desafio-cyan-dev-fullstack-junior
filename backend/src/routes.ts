
//Atual
import express from 'express';
//controllers
import UsinasController from './controllers/UsinasController';
import SafrasController from './controllers/SafrasController';
import FazendasController from './controllers/FazendasController';
import CamposController from './controllers/CamposController';
import UsersController from './controllers/UsersController';
const routes = express.Router();

const usersController = new UsersController();

const usinasController = new UsinasController();

const fazendasController = new FazendasController();

const safrasController = new SafrasController();

const camposController = new CamposController();


//Users
routes.post('/users', usersController.create);
routes.post('/login', usersController.login);

//Moinhos or usinas
routes.post('/usinas', usinasController.create);

routes.get('/usinas', usinasController.index);

routes.get('/usinas/:id', usinasController.show);

//Safras 
routes.post('/safras', safrasController.create);

routes.get('/safras', safrasController.index);

routes.get('/safras/:id', safrasController.show);


//fazendas
routes.post('/fazendas', fazendasController.create);

routes.get('/fazendas', fazendasController.index);

routes.get('/fazendas/:id', fazendasController.show);


// Campos 
routes.post('/campos', camposController.create);

routes.get('/campos', camposController.index);

routes.get('/campos/:id', camposController.show);

export default routes;