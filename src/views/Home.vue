<template>
  <div class="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
    <!-- Header -->
    <header class="max-w-4xl mx-auto mb-12">
      <div class="flex items-center space-x-6">
        <img
          class="h-24 w-24 rounded-full object-cover shadow-lg"
          src=""
          alt="Profile picture"
        />
        <div>
          <h1 class="text-3xl font-bold text-gray-900">Jane Doe</h1>
          <p class="mt-2 text-xl text-gray-600">
            Web Developer & Designer
          </p>
        </div>
      </div>
      <p class="mt-4 text-lg text-gray-600 max-w-2xl">
        Passionate about creating beautiful and functional web experiences. 
        Always learning and exploring new technologies.
      </p>
    </header>

    <!-- Links Grid -->
    <main class="max-w-4xl mx-auto">
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