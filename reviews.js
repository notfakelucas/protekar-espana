/* ========================================
   Reseñas de clientes de España
   ----------------------------------------
   La sección "Lo que dicen nuestros clientes" solo aparece cuando
   este array tiene al menos una reseña; la nota media se calcula
   automáticamente a partir de ellas.

   Campos:
     foto      Foto del producto instalado (images/...)
     producto  Etiqueta opcional sobre la foto (p. ej. "Alfombrilla de maletero")
     nota      1–5
     texto     Texto de la reseña
     nombre    Nombre mostrado
     detalle   Opcional: edad / ciudad
     avatar    Opcional: foto de perfil (images/...)
     verificada true si la reseña está ligada a un pedido real
   ======================================== */

const REVIEWS = [
    {
        foto: 'images/cliente-1.png',
        producto: 'Alfombrilla de Maletero Premium',
        nota: 5,
        texto: 'Mirad esta foto, es exactamente así como llegó. Sin uniones, bordes altísimos que retienen cualquier líquido. Uso el coche a diario y sigue intacto. Mi mujer quedó impresionada. Solo hay que lavarlo con la manguera y queda como nuevo. Lo recomiendo muchísimo.',
        nombre: 'Javier Fernández',
        detalle: '38 años · Madrid',
        verificada: true
    },
    {
        foto: 'images/cliente-2.png',
        producto: 'Alfombrillas delanteras',
        nota: 5,
        texto: 'Fijaos en la foto, los ojales de origen encajan en los anclajes y la alfombrilla no se mueve. El borde elevado es este que se ve. Se me cayó el café y no llegó ni una gota a la moqueta. Parece de fábrica.',
        nombre: 'Carlos Ruiz',
        detalle: '32 años · Barcelona',
        verificada: true
    },
    {
        foto: 'images/cliente-3.webp',
        producto: 'Alfombrilla de maletero',
        nota: 5,
        texto: 'Esta de la foto es mi maletero. Cobertura total, los bordes suben por los laterales. El carrito del bebé, la compra, el perro, da igual. Solo hay que sacudir y queda limpio. No querré otra cosa.',
        nombre: 'Marta Gómez',
        detalle: '34 años · Valencia',
        verificada: true
    },
    {
        foto: 'images/cliente-4.webp',
        producto: 'Alfombrilla trasera de una pieza',
        nota: 5,
        texto: 'Esta es la alfombrilla trasera de mi coche. De una pieza, sin uniones, cubre de lado a lado. Mi hijo tira galletas, zumo, lo que sea. Solo hay que levantarla y lavarla. Ya se lo he recomendado a tres amigos y todos compraron.',
        nombre: 'Pablo Martín',
        detalle: '28 años · Sevilla',
        verificada: true
    }
];
