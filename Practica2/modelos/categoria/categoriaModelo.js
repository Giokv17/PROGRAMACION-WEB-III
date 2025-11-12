import { db } from '../../config/config/db.js';

export const obtenerCategorias = async () => {
  const [categorias] = await db.query('SELECT * FROM categorias');
  return categorias;
};

export const obtenerCategoriaPorId = async (id) => {
  const [categoria] = await db.query('SELECT * FROM categorias WHERE id = ?', [id]);
  return categoria[0];
};

// Obtener categoría CON productos (Ejercicio 3)
export const obtenerCategoriaConProductos = async (id) => {
  const [categoria] = await db.query('SELECT * FROM categorias WHERE id = ?', [id]);
  
  if (categoria.length === 0) {
    return null;
  }

  const [productos] = await db.query(
    'SELECT * FROM productos WHERE categoria_id = ?', 
    [id]
  );

  return {
    ...categoria[0],
    productos: productos
  };
};


export const crearCategoria = async (categoria) => {
  const { nombre, descripcion } = categoria;
  const [resultado] = await db.query(
    'INSERT INTO categorias (nombre, descripcion) VALUES (?, ?)',
    [nombre, descripcion]
  );
  return { id: resultado.insertId, ...categoria };
};

export const actualizarCategoria = async (id, categoria) => {
  const { nombre, descripcion } = categoria;
  await db.query(
    'UPDATE categorias SET nombre = ?, descripcion = ? WHERE id = ?',
    [nombre, descripcion, id]
  );
  return { id, ...categoria };
};

export const eliminarCategoria = async (id) => {
  await db.query('DELETE FROM categorias WHERE id = ?', [id]);
  return { mensaje: 'Categoria eliminada exitosamente' };
};