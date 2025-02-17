<script setup>
  defineProps({
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
  });
</script>

<template>
  <li
    class="group bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 list-none relative overflow-hidden">
    <div
      class="absolute inset-0 bg-gradient-to-r from-accent-primary to-accent-secondary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
    <a :href="href" class="no-underline block relative z-10">
      <h2
        class="text-accent-primary text-xl font-bold mb-2 group-hover:translate-x-1 transition-transform duration-300">
        {{ title }}
        <span
          class="inline-block transition-transform duration-300 group-hover:translate-x-1 ml-1"
          >&rarr;</span
        >
      </h2>
      <p
        class="text-text-secondary mt-2 text-base leading-relaxed group-hover:text-text-primary transition-colors duration-300">
        {{ body }}
      </p>
    </a>
    <div
      class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent-primary to-accent-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
  </li>
</template>
