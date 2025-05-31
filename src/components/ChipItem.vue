<template>
  <div class="chip"  :class="resumido ? 'p-4' :'px-6 py-4'" >
    <component :is="skill.icono" class="w-6 h-6" :class="{'mr-3' : !resumido}" />
    <span class="font-medium" v-if="!resumido">{{ skill.nombre }}</span>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  skill: {
    type: Object,
    required: true
  },
  resumido: {
    type: Boolean,
    default: false
  }
})
</script>
<style lang="postcss" scoped>
.chip {
    @apply bg-white rounded-full shadow-md border border-gray-200 flex items-center;
    transition: all 0.3s ease;
}

.chip:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}
</style>