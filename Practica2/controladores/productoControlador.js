import { 
  obtenerProductos, 
  obtenerProductoPorId, 
  crearProducto, 
  actualizarProducto, 
  eliminarProducto,
  obtenerProductoConCategoria,
  obtenerProductosConCategoria,
  actualizarStock
} from '../modelos/producto/productoModelo.js';
import { obtenerCategoriaPorId } from '../modelos/categoria/categoriaModelo.js';
import { validarProducto } from '../utils/validadores.js';

export const obtenerTodosLosProductos = async (req, res) => {
  try {
    const productos = await obtenerProductosConCategoria();
    res.status(200).json({
      mensaje: 'Productos obtenidos exitosamente',
      datos: productos
    });
  } catch (error) {
    console.error('Error en controlador:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

//7) Obtener productos con nombre de categoria
export const obtenerTodosLosProductosConCategoria = async (req, res) => {
  try {
    const productos = await obtenerProductosConCategoria();
    res.status(200).json({
      mensaje: 'Productos obtenidos exitosamente',
      datos: productos
    });
  } catch (error) {
    console.error('Error en controlador:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
// ejercicio 8: obtener producto por ID incluyendo el nombre de la categoría
export const obtenerProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await obtenerProductoConCategoria(id);
    
    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    res.status(200).json({
      mensaje: 'Producto obtenido exitosamente',
      datos: producto
    });
  } catch (error) {
    console.error('Error en controlador:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
//6) Insertar Producto
export const insertarProducto = async (req, res) => {
  try {
    const validacion = validarProducto(req);
    if (!validacion.valido) {
      return res.status(400).json({ error: validacion.mensaje });
    }

    const resultado = await crearProducto(req.body);
    res.status(201).json({
      mensaje: 'Producto creado exitosamente',
      datos: resultado
    });
  } catch (error) {
    console.error('Error en controlador:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

export const modificarProducto = async (req, res) => {
  try {
    const { id } = req.params;

    const validacion = validarProducto(req);
    if (!validacion.valido) {
      return res.status(400).json({ error: validacion.mensaje });
    }

    // ejercicio 9: verificar que la categoria exista antes de actualizar
    const { categoria_id } = req.body;
    const categoria = await obtenerCategoriaPorId(categoria_id);
    if (!categoria) {
      return res.status(400).json({ error: 'La categoría indicada no existe' });
    }

    const resultado = await actualizarProducto(id, req.body);
    res.status(200).json({
      mensaje: 'Producto actualizado exitosamente',
      datos: resultado
    });
  } catch (error) {
    console.error('Error en controlador:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
//5 eliminar Categoria con sus productos 
export const borrarProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const resultado = await eliminarProducto(id);
    
    res.status(200).json({
      mensaje: resultado.mensaje
    });
  } catch (error) {
    console.error('Error en controlador:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// ejercicio 10: actualizar el stock de un producto (incrementar o decrementar)
export const patchStock = async (req, res) => {
  try {
    const { id } = req.params;
    const { cantidad } = req.body;

    if (cantidad === undefined || cantidad === null) {
      return res.status(400).json({ error: 'El campo cantidad es obligatorio' });
    }

    if (typeof cantidad !== 'number' || !Number.isInteger(cantidad)) {
      return res.status(400).json({ error: 'La cantidad debe ser un número entero' });
    }
    const producto = await obtenerProductoPorId(id);
    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    const resultado = await actualizarStock(id, cantidad);
    
    res.status(200).json({
      mensaje: 'Stock actualizado exitosamente',
      datos: resultado
    });
  } catch (error) {
    console.error('Error en controlador:', error);
    
    // Capturar error de stock negativo<-------------
    if (error.message === 'El stock no puede ser negativo') {
      return res.status(400).json({ error: 'No hay suficiente stock para realizar esta operación' });
    }
    
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};