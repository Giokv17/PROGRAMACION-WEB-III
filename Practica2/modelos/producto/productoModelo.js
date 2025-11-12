import { db } from '../../config/config/db.js';

export const obtenerProductos = async () => {
  const [productos] = await db.query('SELECT * FROM productos');
  return productos;
};

export const obtenerProductosConCategoria = async () => {
  const [productos] = await db.query(
    `SELECT p.*, c.nombre as categoria_nombre FROM productos p 
     JOIN categorias c ON p.categoria_id = c.id`
  );
  return productos;
};

export const obtenerProductoPorId = async (id) => {
  const [producto] = await db.query('SELECT * FROM productos WHERE id = ?', [id]);
  return producto[0];
};

// ejercicio 8: obtener producto por ID incluyendo el nombre de la categoria
export const obtenerProductoConCategoria = async (id) => {
  const [productos] = await db.query(
    `SELECT p.*, c.nombre as categoria_nombre
     FROM productos p
     JOIN categorias c ON p.categoria_id = c.id
     WHERE p.id = ?`,
    [id]
  );
  return productos[0];
};

export const crearProducto = async (producto) => {
  const { nombre, precio, stock, categoria_id } = producto;
  const [resultado] = await db.query(
    'INSERT INTO productos (nombre, precio, stock, categoria_id) VALUES (?, ?, ?, ?)',
    [nombre, precio, stock, categoria_id]
  );
  return { id: resultado.insertId, ...producto };
};

export const actualizarProducto = async (id, producto) => {
  const { nombre, precio, stock, categoria_id } = producto;
  await db.query(
    'UPDATE productos SET nombre = ?, precio = ?, stock = ?, categoria_id = ? WHERE id = ?',
    [nombre, precio, stock, categoria_id, id]
  );
  return { id, ...producto };
};

// ejercicio 10: actualizar solo el stock de un producto (suma o resta)
export const actualizarStock = async (id, cantidad) => {
  const [producto] = await db.query('SELECT stock FROM productos WHERE id = ?', [id]);
  
  if (!producto || producto.length === 0) {
    return null;
  }

  const nuevoStock = producto[0].stock + cantidad;

  if (nuevoStock < 0) {
    throw new Error('El stock no puede ser negativo');
  }

  await db.query('UPDATE productos SET stock = ? WHERE id = ?', [nuevoStock, id]);
  
  return { id, stock_anterior: producto[0].stock, stock_nuevo: nuevoStock, cantidad_modificada: cantidad };
};

export const eliminarProducto = async (id) => {
  await db.query('DELETE FROM productos WHERE id = ?', [id]);
  return { mensaje: 'Producto eliminado exitosamente' };
};
