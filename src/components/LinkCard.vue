<template>
  <a
    ref="cardElement"
    target="_blank"
    :href="url"
    class="group block p-6 bg-card bg-opacity-50 backdrop-blur-lg rounded-2xl shadow-lg transition-all duration-300 ease-in-out link-card"
    :class="destacado ? 'border-2 border-gradient-yellow destacado' : ''"
    @mouseenter="startHoverAnimation"
    @mouseleave="endHoverAnimation"
  >
    <div class="flex items-center justify-between relative z-10">
      <div class="flex items-center space-x-4">
        <div
          ref="iconContainer"
          class="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-accent-primary to-accent-secondary icon-container"
        >
          <component
            :is="iconComponent"
            class="w-6 h-6 text-text-primary icon"
          />
        </div>
        <h2 class="text-xl font-semibold text-text-primary group-hover:text-purple-400 card-title">{{ name }}</h2>
      </div>
      <svg
        ref="arrowIcon"
        class="w-6 h-6 text-text-secondary group-hover:text-accent-secondary transition-colors duration-300 ease-in-out arrow-icon"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </div>
    <div ref="hoverLine" class="hover-line"></div>
  </a>
</template>

<script setup>
import { computed, ref, onUnmounted } from 'vue';
import gsap from 'gsap';
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
  destacado: {
    type: Boolean,
    default: false,
  },
  index: {
    type: Number,
    required: true,
  },
});

const cardElement = ref(null);
const iconContainer = ref(null);
const arrowIcon = ref(null);
const hoverLine = ref(null);

defineExpose({
  element: cardElement,
  animateEntry: (delay) => animateEntry(delay)
});

const iconComponent = computed(() => {
  return icons[props.icon] || icons['document'];
});

const startHoverAnimation = () => {
  // Subtle elevation
  gsap.to(cardElement.value, {
    y: -2,
    boxShadow: '0 6px 12px -2px rgba(0, 0, 0, 0.1), 0 3px 7px -3px rgba(0, 0, 0, 0.05)',
    duration: 0.3,
    ease: 'power2.out'
  });

  // Animate the hover line
  if (hoverLine.value) {
    gsap.fromTo(hoverLine.value, 
      { width: '0%', left: '0%' },
      { width: '100%', duration: 0.3, ease: 'power2.out' }
    );
  }

  // Subtle scale of the icon
  if (iconContainer.value) {
    gsap.to(iconContainer.value, {
      scale: 1.05,
      duration: 0.3,
      ease: 'power2.out'
    });
  }

  // Subtle movement of the arrow
  if (arrowIcon.value) {
    gsap.to(arrowIcon.value, {
      x: 3,
      duration: 0.3,
      ease: 'power2.out'
    });
  }
};

const endHoverAnimation = () => {
  // Reset card
  gsap.to(cardElement.value, {
    y: 0,
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    duration: 0.3,
    ease: 'power2.out'
  });

  // Reset the hover line
  if (hoverLine.value) {
    gsap.to(hoverLine.value, {
      width: '0%',
      left: '100%',
      duration: 0.3,
      ease: 'power2.inOut'
    });
  }

  // Reset the icon
  if (iconContainer.value) {
    gsap.to(iconContainer.value, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out'
    });
  }

  // Reset the arrow
  if (arrowIcon.value) {
    gsap.to(arrowIcon.value, {
      x: 0,
      duration: 0.3,
      ease: 'power2.out'
    });
  }
};

const animateEntry = (delay) => {
  gsap.from(cardElement.value, {
    opacity: 0,
    y: 20,
    duration: 0.6,
    delay: delay,
    ease: 'power3.out',
    clearProps: 'all'
  });
};

const exitAnimation = () => {
  return gsap.to(cardElement.value, {
    opacity: 0,
    y: -10,
    duration: 0.4,
    ease: 'power2.in'
  });
};

onUnmounted(() => {
  exitAnimation();
});
</script>

<style scoped>
.link-card {
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.destacado {
  position: relative;
  overflow: hidden;
  border: 2px solid rgba(255, 215, 0, 0.7);
  border-radius: 1rem;
  background: linear-gradient(45deg, rgba(255, 215, 0, 0.1), rgba(255, 165, 0, 0.1));
}

.destacado:hover {
  border-color: rgba(255, 215, 0, 1);
}

.icon-container {
  position: relative;
  z-index: 2;
  transition: transform 0.3s ease;
}

.hover-line {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background: linear-gradient(90deg, #9333ea, #ec4899);
  z-index: 1;
  opacity: 0.7;
}
</style>