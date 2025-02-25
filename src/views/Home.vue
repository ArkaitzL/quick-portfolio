<template>
  <div class="min-h-screen bg-gradient-to-r from-teal-400 to-blue-500 py-16 px-8 sm:px-12 lg:px-16">
    <!-- Grid Container -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-screen-lg">

      <!-- Header -->
      <div class="col-span-1 sm:col-span-2 lg:col-span-3 p-8 bg-white rounded-lg shadow-lg text-black flex items-center justify-start">
        <div class="text-left flex flex-col sm:flex-row items-center space-x-6 sm:space-x-8">
          <!-- Imagen de perfil -->
          <img
            class="h-32 w-32 rounded-full object-cover shadow-md mb-4 sm:mb-0"
            src=""
            alt="Profile picture"
          />
          <div>
            <!-- Nombre y profesión -->
            <h1 class="text-4xl font-semibold">Jane Doe</h1>
            <p class="mt-2 text-xl font-medium opacity-80">
              Web Developer & Designer
            </p>
          </div>
        </div>
      </div>

      <!-- Links Grid -->
      <main class="col-span-1 sm:col-span-2 lg:col-span-3">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <LinkCard
            v-for="link in links"
            :key="link.name"
            :name="link.name"
            :url="link.url"
            :icon="link.icon"
          />
        </div>
      </main>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import LinkCard from '../components/LinkCard.vue';

const links = ref([
  { name: 'GitHub', url: 'https://github.com', icon: 'code-bracket' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'briefcase' },
  { name: 'Twitter', url: 'https://twitter.com', icon: 'chat-bubble-left-right' },
  { name: 'Portfolio', url: '#', icon: 'document' },
  { name: 'Blog', url: '#', icon: 'pencil' },
  { name: 'Contact', url: '#', icon: 'envelope' },
]);
</script>
