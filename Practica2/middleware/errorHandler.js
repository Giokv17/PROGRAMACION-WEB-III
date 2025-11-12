
export const errorHandler = (err, req, res, next) => {
  console.error('Error:', err);
  
  const statusCode = err.statusCode || 500;
  const mensaje = err.mensaje || 'Error interno del servidor';
  
  res.status(statusCode).json({
    error: mensaje,
    detalles: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
};


export const logger = (req, res, next) => {
  console.log(`${req.method} ${req.path} - ${new Date().toLocaleTimeString()}`);
  next();
};
