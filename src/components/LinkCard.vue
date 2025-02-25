<template>
    <a
      :href="url"
      class="group block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
    >
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <div class="flex-shrink-0 w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
            <component
              :is="iconComponent"
              class="w-6 h-6 text-teal-600"
            />
          </div>
          <h2 class="text-xl font-semibold text-gray-900">{{ name }}</h2>
        </div>
        <svg
          class="w-6 h-6 text-gray-400 group-hover:text-teal-600 transition-colors duration-300 ease-in-out"
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
  import {
    CodeBracketIcon,
    BriefcaseIcon,
    ChatBubbleLeftRightIcon,
    DocumentIcon,
    PencilIcon,
    EnvelopeIcon,
  } from '@heroicons/vue/24/outline';
  
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
    const icons = {
      'code-bracket': CodeBracketIcon,
      'briefcase': BriefcaseIcon,
      'chat-bubble-left-right': ChatBubbleLeftRightIcon,
      'document': DocumentIcon,
      'pencil': PencilIcon,
      'envelope': EnvelopeIcon,
    };
    return icons[props.icon] || DocumentIcon;
  });
  </script>