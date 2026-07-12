# 💻 Mi Portafolio Profesional — Cindy Berrios

¡Hola! Bienvenido/a al repositorio de mi portafolio profesional. Soy **Cindy Berrios**, Desarrolladora de Software enfocada en el backend robusto, el desarrollo móvil nativo y la creación de experiencias multimedia interactivas.

Este proyecto no es solo una página web; es el reflejo de mi trayectoria, de mi dedicación al código limpio (*Clean Code*) y de cómo integro la funcionalidad del backend con interfaces estéticas y responsivas.

---

## 🚀 Vista Rápida del Proyecto

El portafolio cuenta con un diseño contemporáneo que prioriza la legibilidad y la inmediatez de la información para los reclutadores:
- 🖥️ **Hero interactivo**: Un widget que simula una terminal de comandos ejecutando un archivo `cindy-berrios.json` para escanear mi perfil de forma interactiva.
- 🎨 **Estilo Glassmorphism**: Tarjetas translúcidas premium que se adaptan con suavidad a las transiciones de color.
- 🌓 **Modo Claro / Oscuro nativo**: Configurado en modo oscuro por defecto (`#101216` con acentos fucsia `#b5179e` y cian) y adaptable a un modo claro brillante y contrastado (`#f8fafc`).
- 📱 **Diseño Responsivo**: Reajuste de componentes (como el menú de navegación lateral y la tarjeta de biografía) para que la experiencia sea igual de fluida en móviles, tablets y computadoras de escritorio.

---

## 🛠️ Tecnologías y Herramientas Utilizadas

Este portafolio está construido sobre tecnologías web modernas para garantizar velocidad de carga y modularidad:

- ⚛️ **Core**: [React.js](https://react.dev/) + Javascript moderno (ES6+).
- ⚡ **Build Tool**: [Vite](https://vitejs.dev/) para un empaquetado ultrarrápido y desarrollo eficiente.
- 🎨 **Estilos**: Vanilla CSS combinado con componentes responsivos de [Bootstrap 5.3](https://getbootstrap.com/).
- 📦 **Iconos**: [React Icons](https://react-icons.github.io/react-icons/) (Font Awesome & Bootstrap Icons) y [TypeIt](https://typeitjs.com/) para las animaciones de escritura en tiempo real.

---

## 📂 Estructura del Código

Para mantener un proyecto mantenible, la arquitectura del código está organizada de la siguiente manera:

```text
src/
├── components/          # Componentes independientes de React
│   ├── Header.jsx       # Barra lateral de navegación y selector de tema reactivo
│   ├── Home.jsx         # Panel de bienvenida y widget de terminal JSON
│   ├── About.jsx        # Biografía, trayectoria académica y stack tecnológico
│   ├── Portfolio.jsx    # Catálogo de proyectos con enlaces a código (GitHub) y demos
│   ├── Testimonials.jsx # Recomendaciones de docentes y colegas en formato de rejilla
│   ├── Contact.jsx      # Bloque minimalista centrado de contacto y áreas de colaboración
│   └── Footer.jsx       # Pie de página alineado responsivamente
├── App.jsx              # Componente principal que estructura la SPA
├── main.jsx             # Punto de entrada de la aplicación
└── index.css            # Motor de diseño (CSS variables, estilos bento y adaptabilidad)
```

---

## ⚙️ Instrucciones de Lanzamiento Local

Si deseas clonar este proyecto y probarlo en tu entorno local, sigue estos pasos:

### 1. Clonar el repositorio
```bash
git clone https://github.com/cindyberrios02/portafolio.cbdev.cl.git
cd portafolio.cbdev.cl
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Iniciar el servidor de desarrollo
```bash
npm run dev
```
Abre [http://localhost:5173](http://localhost:5173) en tu navegador para ver la página en vivo con recarga automática.

### 4. Generar el paquete de producción (Build)
```bash
npm run build
```
Esto compilará y optimizará todos los recursos en la carpeta `dist/`, lista para ser desplegada en cualquier servidor de hosting estático (como Vercel, Netlify o GitHub Pages).

---

## 💬 Conectemos

Si te interesa mi perfil, tienes una propuesta de colaboración o deseas conocer más de mi trabajo, no dudes en escribirme:
- ✉️ **Correo**: [cindy.berrios02@gmail.com](mailto:cindy.berrios02@gmail.com)
- 💼 **LinkedIn**: [Cindy Berrios Ugarte](https://www.linkedin.com/in/cindy-berrios-ugarte-376a542a2/)
- 💻 **GitHub**: [@cindyberrios02](https://github.com/cindyberrios02)

---
*Desarrollado con dedicación por Cindy Berrios. © 2026*
