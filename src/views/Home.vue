<script setup>
import { ref } from 'vue';
import LinkCard from '../components/LinkCard.vue';
import { links } from '../data'; // Importamos los enlaces desde src/data.js

</script>

<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
    <div class="flex-grow flex flex-col py-16 px-8 sm:px-12 lg:px-16">
      <!-- Grid Container -->
      <div class="grid grid-cols-1 gap-8 mx-auto w-full max-w-screen-lg">
        <!-- Header -->
        <div class="col-span-1 p-8 bg-card bg-opacity-50 backdrop-blur-lg rounded-2xl shadow-2xl text-text-primary flex flex-col sm:flex-row items-center justify-center sm:justify-start">
          <div class="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <!-- Profile Image -->
            <img
              class="h-32 w-32 rounded-full object-cover shadow-md border-4 border-accent-primary"
              src="/profile-pic.png"
              alt="Profile picture"
            />
            <div class="text-center sm:text-left">
              <!-- Name and profession -->
              <h1 class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
                Arkaitz Leon
              </h1>
              <p class="mt-2 text-xl font-medium text-text-secondary">
                Desarrollador Web Fullstack & Creador de Videojuegos
              </p>
            </div>
          </div>
        </div>

        <!-- Links Grid -->
        <main class="col-span-1">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
  </div>
</template>
