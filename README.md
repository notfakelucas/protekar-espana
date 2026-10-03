# ProTekar España 🇪🇸

Sitio web de **ProTekar España** — Alfombrillas 3D premium a medida para coches.

## Características
- Landing page dark premium con acentos dorados (Space Grotesk / Sora / Inter)
- Bloque de oferta con precio fijo configurable (`KIT_PRICE` en `app.js`)
- Configurador de vehículos con 20 marcas populares en España
- Comparador antes/después deslizable y tabla ProTekar vs común
- Carrusel de fotos del producto instalado y detalles técnicos
- Sección de reseñas que se rellena desde `reviews.js` (oculta mientras esté vacía)
- Preguntas frecuentes, barra de compra fija y diseño responsive

## Tecnologías
- HTML5 semántico
- CSS3 (Variables CSS, Grid, Flexbox, Animaciones)
- JavaScript Vanilla (ES6+)
- Google Fonts (Inter)

## Cómo ejecutar
Simplemente abre `index.html` en un navegador o usa un servidor local:

```bash
# Con Python
python3 -m http.server 8080

# Con Node.js
npx serve .
```

## Estructura
```
protekar-espana/
├── index.html    # Estructura HTML completa
├── index.css     # Estilos y sistema de diseño
├── app.js        # Lógica de la aplicación (KIT_PRICE, CHECKOUT_URL)
├── reviews.js    # Reseñas reales de clientes de España
├── images/       # Fotos del producto
└── README.md     # Este archivo
```

## Contacto
- Email: soporte@protekar.es
- Ubicación: Madrid, España

© 2026 ProTekar España · Todos los derechos reservados
