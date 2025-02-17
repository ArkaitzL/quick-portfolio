# Vue 3 + Tailwind CSS Starter Template

Este es un template minimalista y elegante para proyectos con Vue 3 y Tailwind CSS, configurado con modo oscuro por defecto y una estructura clara y escalable. Puedes ver el ejemplo [aquí](https://vue-template.azaldev.com)

## ✨ Características

- ⚡️ Vue 3 con Composition API
- 🎨 Tailwind CSS para estilos modernos y flexibles
- 🌙 Modo oscuro por defecto
- 📱 Diseño totalmente responsive
- 🧭 Vue Router preconfigurado
- 🎯 Páginas de ejemplo (Home, About, Contact, 404)
- 💫 Animaciones y transiciones suaves
- 🔍 SEO friendly

## 🚀 Inicio Rápido

1. Utiliza este template haciendo clic en "Use this template" en GitHub
2. Clona tu nuevo repositorio
3. Instala las dependencias:

npm install

4. Inicia el servidor de desarrollo:

npm run dev

## 🎨 Personalización

### Colores y Tema

El template utiliza variables CSS personalizadas para los colores principales. Puedes modificarlas en tailwind.config.js:

theme: {
extend: {
colors: {
'accent-primary': 'var(--accent-primary)',
'accent-secondary': 'var(--accent-secondary)',
// ...
}
}
}

### Navegación

Modifica las rutas en src/router/index.js y actualiza el componente Menu.vue según tus necesidades.

## 📝 Scripts Disponibles

- npm run dev - Inicia el servidor de desarrollo
- npm run build - Construye el proyecto para producción
- npm run preview - Previsualiza la build de producción
- npm run lint - Ejecuta el linter

## 🤝 Contribuir

Si deseas contribuir a este proyecto:

1. Haz un fork del repositorio
2. Crea una nueva rama para tus cambios:
   git checkout -b feature/nueva-funcionalidad
3. Realiza tus cambios y haz commits:
   git commit -m 'feat: agrega nueva funcionalidad'
4. Sube los cambios a tu fork:
   git push origin feature/nueva-funcionalidad
5. Crea un Pull Request describiendo tus cambios

## 🙋‍♂️ Soporte

Si tienes preguntas o necesitas ayuda:

- Abre un issue en GitHub
- Contacta por email: me@azaldev.com

---

Creado con ❤️ por AzalDevX
