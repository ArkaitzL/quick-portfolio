<script setup>
  import NavigationMenu from './components/Menu.vue';
</script>

<template>
  <div class="bg-background min-h-screen text-white font-sans">
    <NavigationMenu />
    <router-view></router-view>
  </div>
</template>
