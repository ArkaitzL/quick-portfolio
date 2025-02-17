<script setup>
  import Card from '../components/Card.vue';
</script>

<template>
  <div>
    <main class="max-w-4xl mx-auto p-6 pt-16">
      <h1 class="text-text-primary text-5xl font-extrabold text-center mb-8">
        Bienvenido a <strong class="text-accent-secondary">Vue</strong> +
        <strong class="text-teal-300">TailwindCSS</strong>
      </h1>

      <p class="text-center text-xl mb-12">
        ¡Empieza con
        <code
          class="bg-code-background border-1 border-code-border px-2 py-1 rounded-md"
          >src/views</code
        >
        para codear!<br />
        <strong class="text-accent-primary">Objetivo:</strong> Facilitar la
        creación de proyectos combinados con ambas tecnologías.
      </p>

      <ul role="list" class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          href="https://www.npmjs.com/package/create-vue-template"
          title="Instala con NPM"
          body="Crea un nuevo proyecto rápidamente usando: npx create-vue-template. ¡Comienza en segundos!" />
        <Card
          href="https://lalo.lol/create-vue-template"
          title="Documentación"
          body="Aprende a usar el paquete NPM, y consulta las guías para personalizar el template." />
        <Card
          href="https://tailwindcss.com/docs/installation/using-vite#vue"
          title="Aprende Vue y TailwindCSS"
          body="Descubre cómo aprovechar al máximo Vue y TailwindCSS en tus proyectos." />
        <Card
          href="https://github.com/azaldevx/vue-template"
          title="Contribuir al Proyecto"
          body="¿Tienes ideas o mejoras? Colabora en el desarrollo de este template en GitHub." />
      </ul>
    </main>

    <footer class="mt-12 text-center text-gray-800">
      <p>
        Creado por
        <a
          href="https://www.linkedin.com/in/azaldev"
          class="text-accent-primary hover:underline"
          >AzalDevX</a
        >
        -
        <a
          href="https://github.com/azaldevx/vue-template"
          class="text-accent-primary hover:underline"
          >GitHub</a
        >
        -
        <a
          href="https://lalo.lol/create-vue-template"
          class="text-accent-primary hover:underline"
          >Paquete NPM</a
        >
      </p>
    </footer>
  </div>
</template>
