<script setup>
  import { ref } from 'vue';
  import { Mail, MapPin, Phone, Send } from 'lucide-vue-next';

  const form = ref({
    name: '',
    email: '',
    message: '',
  });

  const isSubmitting = ref(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    isSubmitting.value = true;

    // Simular envío
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Aquí iría tu lógica de envío real
    console.log('Formulario enviado:', form.value);

    isSubmitting.value = false;
    form.value = { name: '', email: '', message: '' };
  };
</script>

<template>
  <main class="max-w-4xl mx-auto px-6 py-24">
    <!-- Encabezado -->
    <header class="mb-16">
      <h1 class="text-4xl font-light text-text-primary mb-4">Contacto</h1>
      <p class="text-text-secondary max-w-lg">
        ¿Tienes alguna pregunta o proyecto en mente? Nos encantaría escucharte.
      </p>
    </header>

    <div class="grid md:grid-cols-2 gap-12 md:gap-24">
      <!-- Información de contacto -->
      <div class="space-y-8">
        <div class="space-y-6">
          <h2 class="text-lg font-medium text-accent-primary">
            Información de contacto
          </h2>

          <ul class="space-y-4">
            <li class="flex items-center gap-3 text-text-secondary">
              <Mail class="w-5 h-5 text-accent-primary" />
              <a
                href="mailto:contacto@ejemplo.com"
                class="hover:text-accent-primary transition-colors">
                contacto@ejemplo.com
              </a>
            </li>
            <li class="flex items-center gap-3 text-text-secondary">
              <Phone class="w-5 h-5 text-accent-primary" />
              <a
                href="tel:+34600000000"
                class="hover:text-accent-primary transition-colors">
                +34 600 000 000
              </a>
            </li>
            <li class="flex items-start gap-3 text-text-secondary">
              <MapPin class="w-5 h-5 text-accent-primary shrink-0" />
              <p>Calle Principal 123<br />28001 Madrid, España</p>
            </li>
          </ul>
        </div>

        <div class="space-y-4">
          <h2 class="text-lg font-medium text-accent-primary">Horario</h2>
          <div class="space-y-2 text-text-secondary">
            <p>Lunes a Viernes: 9:00 - 18:00</p>
            <p>Fines de semana: Cerrado</p>
          </div>
        </div>
      </div>

      <!-- Formulario -->
      <form @submit="handleSubmit" class="space-y-6">
        <div class="space-y-4">
          <div>
            <label for="name" class="block text-sm text-text-secondary mb-2">
              Nombre
            </label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              required
              class="w-full px-4 py-2 bg-accent-secondary/70 border border-accent-primary/10 rounded-lg text-text-primary focus:outline-none focus:border-accent-primary/30 transition-colors" />
          </div>

          <div>
            <label for="email" class="block text-sm text-text-secondary mb-2">
              Email
            </label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              class="w-full px-4 py-2 bg-accent-secondary/70 border border-accent-primary/10 rounded-lg text-text-primary focus:outline-none focus:border-accent-primary/30 transition-colors" />
          </div>

          <div>
            <label for="message" class="block text-sm text-text-secondary mb-2">
              Mensaje
            </label>
            <textarea
              id="message"
              v-model="form.message"
              required
              rows="4"
              class="w-full px-4 py-2 bg-accent-secondary/70 border border-accent-primary/10 rounded-lg text-text-primary focus:outline-none focus:border-accent-primary/30 transition-colors resize-none"></textarea>
          </div>
        </div>

        <button
          type="submit"
          :disabled="isSubmitting"
          class="group flex items-center gap-2 px-6 py-2 bg-accent-primary/10 hover:bg-accent-primary/20 rounded-lg text-accent-primary transition-colors disabled:opacity-50">
          <span>Enviar mensaje</span>
          <Send
            class="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </form>
    </div>
  </main>
</template>
