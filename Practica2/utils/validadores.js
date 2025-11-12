// Validadores 
export const validarCategoria = (req, res) => {
  const { nombre } = req.body;
  
  if (!nombre || nombre.trim() === '') {
    return { valido: false, mensaje: 'El nombre de la categoría es obligatorio' };
  }
  
  if (nombre.length > 100) {
    return { valido: false, mensaje: 'El nombre no puede exceder 100 caracteres' };
  }
  
  return { valido: true };
};
export const validarProducto = (req, res) => {
  const { nombre, precio, stock, categoria_id } = req.body;
  
  if (!nombre || nombre.trim() === '') {
    return { valido: false, mensaje: 'El nombre del producto es obligatorio' };
  }
  
  if (!precio || precio <= 0) {
    return { valido: false, mensaje: 'El precio debe ser mayor a 0' };
  }
  
  if (stock === undefined || stock < 0) {
    return { valido: false, mensaje: 'El stock no puede ser negativo' };
  }
  
  if (!categoria_id) {
    return { valido: false, mensaje: 'La categoría es obligatoria' };
  }
  
  return { valido: true };
};
