import { 
  crearCategoria, 
  obtenerCategorias,  
  obtenerCategoriaPorId,
  obtenerCategoriaConProductos,  
  actualizarCategoria,
  eliminarCategoria
} from '../modelos/categoria/categoriaModelo.js';
import { validarCategoria } from '../utils/validadores.js';

export const obtenerTodasLasCategorias = async (req, res) => {
  try {
    const categorias = await obtenerCategorias();  
    res.status(200).json({
      mensaje: 'Categorías obtenidas exitosamente',
      datos: categorias
    });
  } catch (error) {
    console.error('Error en controlador:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

export const obtenerCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    const categoria = await obtenerCategoriaConProductos(id);  
    
    if (!categoria) {
      return res.status(404).json({ error: 'Categoría no encontrada' });
    }

    res.status(200).json({
      mensaje: 'Categoría obtenida exitosamente',
      datos: categoria
    });
  } catch (error) {
    console.error('Error en controlador:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

export const insertarCategoria = async (req, res) => {
  try {
    const validacion = validarCategoria(req);
    if (!validacion.valido) {
      return res.status(400).json({ error: validacion.mensaje });
    }

    const resultado = await crearCategoria(req.body);
    res.status(201).json({
      mensaje: 'Categoría creada exitosamente',
      datos: resultado
    });
  } catch (error) {
    console.error('Error en controlador:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

export const modificarCategoria = async (req, res) => {
  try {
    const { id } = req.params;

    const validacion = validarCategoria(req);
    if (!validacion.valido) {
      return res.status(400).json({ error: validacion.mensaje });
    }

    const resultado = await actualizarCategoria(id, req.body);
    res.status(200).json({
      mensaje: 'Categoría actualizada exitosamente',
      datos: resultado
    });
  } catch (error) {
    console.error('Error en controlador:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

export const borrarCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    const resultado = await eliminarCategoria(id);
    
    res.status(200).json({
      mensaje: resultado.mensaje
    });
  } catch (error) {
    console.error('Error en controlador:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};