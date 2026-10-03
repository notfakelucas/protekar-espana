/* ========================================
   Reseñas de clientes de España
   ----------------------------------------
   Añade aquí reseñas REALES de clientes españoles (con su permiso).
   La sección "Lo que dicen nuestros clientes" solo aparece cuando
   este array tiene al menos una reseña, y la nota media se calcula
   automáticamente a partir de ellas.

   Campos:
     foto      Foto del producto instalada que envió el cliente (images/...)
     producto  Etiqueta opcional sobre la foto (p. ej. "Alfombrilla de maletero")
     nota      1–5
     texto     Texto de la reseña, tal como lo escribió el cliente
     nombre    Nombre que el cliente autoriza a mostrar (p. ej. "Laura G.")
     detalle   Opcional: ciudad u otro dato que el cliente autorice
     avatar    Opcional: foto de perfil del cliente (images/...)
     verificada true solo si la reseña está ligada a un pedido real

   Ejemplo (formato):
   {
       foto: 'images/resena-laura.webp',
       producto: 'Alfombrilla de maletero',
       nota: 5,
       texto: '...',
       nombre: 'Laura G.',
       detalle: 'Zaragoza',
       verificada: true
   }
   ======================================== */

const REVIEWS = [];
