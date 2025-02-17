<script setup>
  import { User, Mail, Github, Linkedin } from 'lucide-vue-next';

  const team = [
    {
      name: 'Gonzalo Azaldegi',
      role: 'Frontend Developer',
      bio: 'Especializado en crear experiencias web modernas y accesibles',
      image: '/profile-picture.png',
      social: {
        email: 'me@azaldev.com',
        github: 'github.com/AzalDevX',
        linkedin: 'linkedin.com/in/azaldev',
      },
    },
  ];
</script>

<template>
  <main class="max-w-4xl mx-auto px-6 py-24">
    <!-- Encabezado -->
    <header class="mb-24 space-y-4">
      <h1 class="text-4xl font-light text-text-primary">Sobre nosotros</h1>
      <p class="text-xl text-text-secondary font-light max-w-2xl">
        Un equipo apasionado por crear experiencias web excepcionales,
        combinando diseño minimalista con tecnología de vanguardia.
      </p>
    </header>

    <!-- Sección Principal -->
    <div class="grid md:grid-cols-2 gap-24">
      <!-- Misión -->
      <section class="space-y-4">
        <h2 class="text-lg font-medium text-accent-primary">Nuestra Misión</h2>
        <p class="text-text-secondary leading-relaxed">
          Desarrollamos soluciones web que combinan simplicidad visual con
          funcionalidad robusta. Creemos en el poder del diseño minimalista y el
          código limpio para crear experiencias digitales memorables.
        </p>
      </section>

      <!-- Tecnologías -->
      <section class="space-y-4">
        <h2 class="text-lg font-medium text-accent-primary">
          Stack Tecnológico
        </h2>
        <ul class="grid grid-cols-2 gap-3 text-text-secondary">
          <li class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-accent-primary"></span>
            Vue.js
          </li>
          <li class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-accent-primary"></span>
            TypeScript
          </li>
          <li class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-accent-primary"></span>
            Tailwind CSS
          </li>
          <li class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-accent-primary"></span>
            Node.js
          </li>
        </ul>
      </section>
    </div>

    <!-- Equipo -->
    <section class="mt-24">
      <h2 class="text-lg font-medium text-accent-primary mb-12">
        Nuestro Equipo
      </h2>

      <div class="grid md:grid-cols-2 gap-12">
        <article
          v-for="member in team"
          :key="member.name"
          class="group space-y-6">
          <!-- Imagen -->
          <div class="aspect-square overflow-hidden bg-card rounded-lg">
            <img
              :src="member.image"
              :alt="member.name"
              class="w-full h-full object-cover transition duration-500 group-hover:scale-105" />
          </div>

          <!-- Info -->
          <div class="space-y-4">
            <div>
              <h3 class="text-xl text-text-primary">{{ member.name }}</h3>
              <p class="text-text-secondary">{{ member.role }}</p>
            </div>

            <p class="text-text-secondary">{{ member.bio }}</p>

            <!-- Enlaces sociales -->
            <div class="flex gap-4 text-text-secondary">
              <a
                :href="`mailto:${member.social.email}`"
                class="hover:text-accent-primary transition-colors"
                aria-label="Email">
                <Mail class="w-5 h-5" />
              </a>
              <a
                :href="`https://${member.social.github}`"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-accent-primary transition-colors"
                aria-label="GitHub">
                <Github class="w-5 h-5" />
              </a>
              <a
                :href="`https://${member.social.linkedin}`"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-accent-primary transition-colors"
                aria-label="LinkedIn">
                <Linkedin class="w-5 h-5" />
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- Contacto -->
    <section class="mt-24 py-12 border-t border-accent-primary/10">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <p class="text-text-secondary">¿Interesado en trabajar juntos?</p>
        <a
          href="mailto:contacto@ejemplo.com"
          class="flex justify-center items-center gap-2 text-accent-primary hover:opacity-80 transition-opacity">
          <Mail class="w-4 h-4" />
          <span>me@azaldev.com</span>
        </a>
      </div>
    </section>
  </main>
</template>
