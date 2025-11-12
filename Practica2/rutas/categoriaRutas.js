import express from 'express';
import { 
  obtenerTodasLasCategorias,
  obtenerCategoria,
  insertarCategoria,
  modificarCategoria,
  borrarCategoria
} from '../controladores/categoriaControlador.js';

const router = express.Router();

router.get('/categorias', obtenerTodasLasCategorias);
router.get('/categorias/:id', obtenerCategoria);
router.post('/categorias', insertarCategoria);
router.put('/categorias/:id', modificarCategoria);
router.delete('/categorias/:id', borrarCategoria);

export default router;