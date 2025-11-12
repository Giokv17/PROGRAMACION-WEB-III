import express from 'express';
import { 
  obtenerTodosLosProductos, 
  obtenerProducto, 
  insertarProducto, 
  modificarProducto, 
  borrarProducto,
  patchStock
} from '../controladores/productoControlador.js';

const router = express.Router();

router.get('/productos', obtenerTodosLosProductos);
router.get('/productos/:id', obtenerProducto);
router.post('/productos', insertarProducto);
router.put('/productos/:id', modificarProducto);
router.patch('/productos/:id/stock', patchStock);
router.delete('/productos/:id', borrarProducto);

export default router;
