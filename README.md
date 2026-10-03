# ProTekar España 🇪🇸

Sitio web de **ProTekar España** — Alfombrillas 3D premium a medida para coches.

## Características
- Landing page dark premium con acentos dorados (Space Grotesk / Sora / Inter)
- Bloque de oferta con precio fijo configurable (`KIT_PRICE` en `app.js`)
- Configurador de vehículos con 46 marcas presentes en España (modelos hasta 2026)
- Fotos ampliables (lightbox) en oferta, carrusel, detalles y reseñas
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

## Checkout y pagos
El checkout (`checkout.html`) crea el pago en **Stripe** a través de la función `api/checkout.js` (Vercel).

1. Crea una cuenta en Stripe y copia la clave secreta (`sk_test_...` para pruebas, `sk_live_...` en producción).
2. En Vercel → proyecto → Settings → Environment Variables, añade `STRIPE_SECRET_KEY`.
3. Opcional: `SITE_URL` (p. ej. `https://protekar-espana.vercel.app`).
4. Redeploy. Los pedidos aparecen en el panel de Stripe con vehículo, teléfono y dirección.

Precios, envíos, extras y textos: `checkout-config.json` (importes en céntimos, IVA incluido).
`compareAt` y `promoEndsAt` solo deben rellenarse con un precio anterior y una fecha de fin reales.

## Estructura
```
protekar-espana/
├── index.html    # Estructura HTML completa
├── index.css     # Estilos y sistema de diseño
├── app.js        # Lógica de la aplicación (KIT_PRICE, CHECKOUT_URL)
├── reviews.js    # Reseñas reales de clientes de España
├── checkout.html # Checkout (checkout.css, checkout.js)
├── checkout-config.json # Precios, envíos, extras y textos del checkout
├── gracias.html  # Página tras el pago
├── api/checkout.js # Función serverless que crea la sesión de Stripe
├── images/       # Fotos del producto
└── README.md     # Este archivo
```

## Contacto
- Email: soporte@protekar.es
- Ubicación: Madrid, España

© 2026 ProTekar España · Todos los derechos reservados
