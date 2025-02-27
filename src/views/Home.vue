<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import LinkCard from '../components/LinkCard.vue';
import { links } from '../data'; // Importamos los enlaces desde src/data.js

// Referencias para los elementos
const mainContainer = ref(null);
const profileSection = ref(null);
const linkCardsContainer = ref(null);

onMounted(() => {
  // Crear timeline para secuencia de animaciones
  const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
  
  // Animación del contenedor principal
  tl.fromTo(mainContainer.value,
    { opacity: 0, scale: 0.98 },
    { opacity: 1, scale: 1, duration: 0.7 }
  );
  
  // Animación del perfil - solo movimiento vertical y opacidad
  tl.fromTo(profileSection.value,
    { y: -20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6 },
    "-=0.3"
  );
  
  // Animación de las tarjetas - solo movimiento vertical y opacidad, sin giros ni desplazamientos laterales
  tl.fromTo(linkCardsContainer.value.children,
    { 
      y: 30, 
      opacity: 0, 
      scale: 0.98
      // Eliminados rotation y x para un movimiento recto
    },
    { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      duration: 0.5, 
      stagger: 0.06, 
      ease: "power2.out" 
    },
    "-=0.4"
  );
  
  // Animación de partículas de fondo
  initParticles();
});

// Función para inicializar las partículas
function initParticles() {
  const particlesContainer = document.querySelector('.particles-container');
  if (!particlesContainer) return;
  
  // Crear partículas
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Posición aleatoria
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const size = Math.random() * 10 + 2;
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;
    
    // Aplicar estilos
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;
    
    particlesContainer.appendChild(particle);
  }
}
</script>

<template>
  <!-- Contenedor de partículas -->
  <div class="particles-container"></div>
  
  <div ref="mainContainer" class="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
    <div class="flex-grow flex flex-col py-16 px-8 sm:px-12 lg:px-16">
      <!-- Grid Container -->
      <div class="grid grid-cols-1 gap-8 mx-auto w-full max-w-screen-lg">
        <!-- Header -->
        <div ref="profileSection" class="col-span-1 p-8 bg-card bg-opacity-50 backdrop-blur-lg rounded-2xl shadow-2xl text-text-primary flex flex-col sm:flex-row items-center justify-center sm:justify-start">
          <div class="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <!-- Profile Image -->
            <img
              class="h-32 w-32 rounded-full object-cover shadow-md border-4 border-accent-primary profile-image"
              src="/profile-pic.png"
              alt="Profile picture"
            />
            <div class="text-center sm:text-left">
              <!-- Name and profession -->
              <h1 class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary glow-text">
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
          <div ref="linkCardsContainer" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <LinkCard
              v-for="(link, index) in links"
              :key="link.name"
              :name="link.name"
              :url="link.url"
              :icon="link.icon"
              :destacado="link.destacado || false"
              :index="index"
            />
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Estilos para las partículas */
.particles-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
}

.particle {
  position: absolute;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.1));
  border-radius: 50%;
  opacity: 0;
  animation: float infinite ease-in-out;
}

@keyframes float {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 0.8;
  }
  90% {
    opacity: 0.2;
  }
  100% {
    transform: translateY(-100vh) rotate(360deg);
    opacity: 0;
  }
}

/* Animación para la imagen de perfil */
.profile-image {
  animation: pulse 5s infinite ease-in-out;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

</style>