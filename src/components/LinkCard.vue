<template>
  <a
    :href="url"
    class="group block p-6 bg-card bg-opacity-50 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105"
  >
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-4">
        <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-full flex items-center justify-center">
          <component
            :is="iconComponent"
            class="w-6 h-6 text-text-primary"
          />
        </div>
        <h2 class="text-xl font-semibold text-text-primary group-hover:text-accent-primary">{{ name }}</h2>
      </div>
      <svg
        class="w-6 h-6 text-text-secondary group-hover:text-accent-secondary transition-colors duration-300 ease-in-out"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  </a>
</template>

<script setup>
import { computed } from 'vue';
// Importa el objeto de iconos
import icons from '../data';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});

const iconComponent = computed(() => {
  // Accede al icono desde el objeto 'icons' usando la propiedad 'icon'
  return icons[props.icon] ; // fallback al icono por defecto
});
</script>
