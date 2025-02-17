<script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { Sparkles, Home, User, Code, Send } from 'lucide-vue-next';

  const route = useRoute();
  const menuOpen = ref(false);
  const cursorPosition = ref({ x: 0, y: 0 });
  const activeIndex = ref(null);

  const navigation = [
    {
      name: 'Inicio',
      path: '/',
      icon: Home,
      color: 'from-violet-500 to-fuchsia-500',
    },
    {
      name: 'Sobre Nosotros',
      path: '/about',
      icon: User,
      color: 'from-emerald-500 to-teal-500',
    },
    {
      name: 'Proyectos',
      path: '/projects',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Contacto',
      path: '/contact',
      icon: Send,
      color: 'from-orange-500 to-rose-500',
    },
  ];

  const updateCursor = (event) => {
    if (!menuOpen.value) return;
    const rect = event.currentTarget.getBoundingClientRect();
    cursorPosition.value = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  };

  const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;
    if (!menuOpen.value) activeIndex.value = null;
  };
</script>

<template>
  <nav class="fixed top-0 left-0 w-full z-50" @mousemove="updateCursor">
    <!-- Botón del menú -->
    <button
      @click="toggleMenu"
      class="fixed top-6 right-6 z-50 w-14 h-14 rounded-2xl bg-gradient-to-r from-accent-primary to-accent-secondary shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-500 flex items-center justify-center group overflow-hidden">
      <div
        class="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      <div class="relative w-6 h-6 flex items-center justify-center">
        <span
          class="absolute w-6 h-0.5 bg-white transition-all duration-500"
          :class="menuOpen ? 'rotate-45' : '-translate-y-2'"></span>
        <span
          class="absolute w-6 h-0.5 bg-white transition-all duration-500"
          :class="
            menuOpen ? 'opacity-0 translate-x-full' : 'opacity-100'
          "></span>
        <span
          class="absolute w-6 h-0.5 bg-white transition-all duration-500"
          :class="menuOpen ? '-rotate-45' : 'translate-y-2'"></span>
      </div>
    </button>

    <!-- Menú expandido -->
    <div
      class="fixed inset-0 backdrop-blur-md transition-all duration-700"
      :class="menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'">
      <!-- Fondo animado -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-background via-background to-accent-primary/5 opacity-90"></div>

      <!-- Efecto de cursor -->
      <div
        class="pointer-events-none fixed w-[40rem] h-[40rem] rounded-full bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 opacity-50 blur-3xl transition-all duration-300"
        :style="{
          transform: `translate(${cursorPosition.x - 320}px, ${
            cursorPosition.y - 320
          }px)`,
        }"></div>

      <div
        class="relative h-full max-w-4xl mx-auto flex items-center justify-center">
        <ul class="space-y-6 w-full px-6">
          <li
            v-for="(item, index) in navigation"
            :key="item.path"
            @mouseenter="activeIndex = index"
            @mouseleave="activeIndex = null">
            <router-link
              :to="item.path"
              class="group flex items-center gap-6 text-3xl relative overflow-hidden p-6 rounded-2xl transition-all duration-500"
              :class="[
                route.path === item.path
                  ? 'bg-accent-primary/5'
                  : 'hover:bg-accent-primary/5',
                activeIndex === index ? 'scale-105' : 'scale-100',
              ]"
              @click="toggleMenu">
              <!-- Icono con efecto hover -->
              <div
                class="relative z-10 p-4 rounded-xl bg-gradient-to-r shadow-lg transition-all duration-500 group-hover:shadow-2xl"
                :class="[
                  item.color,
                  activeIndex === index ? 'scale-110' : 'scale-100',
                ]">
                <component
                  :is="item.icon"
                  class="w-6 h-6 text-white transition-transform duration-500 group-hover:scale-110" />
              </div>

              <!-- Texto con efecto hover -->
              <span
                class="relative z-10 font-light tracking-wide text-text-primary transition-all duration-500 group-hover:translate-x-2 group-hover:font-normal">
                {{ item.name }}
              </span>

              <!-- Indicador de ruta activa -->
              <div
                v-if="route.path === item.path"
                class="absolute right-6 flex items-center gap-2 text-accent-primary">
                <Sparkles class="w-5 h-5 animate-pulse" />
                <div
                  class="w-2 h-2 rounded-full bg-accent-primary animate-ping"></div>
              </div>

              <!-- Efecto de hover -->
              <div
                class="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-all duration-500"
                :class="item.color"></div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
  .router-link-active {
    @apply text-accent-primary font-medium;
  }
</style>
