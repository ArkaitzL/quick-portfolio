<script setup>
  import { useRouter } from 'vue-router';
  import { ArrowLeft } from 'lucide-vue-next';

  const router = useRouter();

  const goBack = () => {
    router.push('/');
  };
</script>

<template>
  <main
    class="min-h-screen w-full flex items-center justify-center bg-background px-6">
    <div class="flex flex-col items-center">
      <!-- Número 404 simple y elegante -->
      <h1
        class="text-[180px] md:text-[240px] font-light leading-none tracking-tight text-accent-primary/20">
        404
      </h1>

      <!-- Mensaje superpuesto -->
      <div
        class="relative -mt-16 md:-mt-24 text-center z-10 bg-background/80 backdrop-blur-sm p-6">
        <h2 class="text-2xl md:text-3xl font-light text-text-primary mb-6">
          Página no encontrada
        </h2>

        <button
          @click="goBack"
          class="group inline-flex items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors duration-300">
          <ArrowLeft
            class="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          <span>Volver al inicio</span>
        </button>
      </div>
    </div>
  </main>
</template>
