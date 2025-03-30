import express from 'express';
import { obtenerSuperheroePorIdController, obtenerSuperheroesMayoresDe30Controller, obtenerTodosLosSuperheroesController, obtenerSuperheroesPorAtributoController, crearSuperheroeController, actualizarSuperheroePorNombreController, borrarSuperheroeIdController, borrarSuperheroePorNombreController} from '../controllers/superheroController.mjs';


const router =express.Router();

router.get ('/heroes', obtenerTodosLosSuperheroesController);
router.get('/heroes/mayores-30', obtenerSuperheroesMayoresDe30Controller);
router.get('/heroes/:id', obtenerSuperheroePorIdController);
router.get('/heroes/buscar/:atributo/:valor', obtenerSuperheroesPorAtributoController);
router.post('/heroes/crear', crearSuperheroeController); 
router.put ('/heroes/actualizar/nombre/:nombreSuperheroe', actualizarSuperheroePorNombreController);
router.delete('/heroes/borrar-nombre/:nombreSuperheroe', borrarSuperheroePorNombreController);
router.delete('/heroes/borrar-id/:id', borrarSuperheroeIdController);





 

export default router;