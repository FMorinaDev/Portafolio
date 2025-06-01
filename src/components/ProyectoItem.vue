<template>
  <div class="proyecto-item">
    <div 
        class="proyecto-content"
    >
        <h4 >{{ proyecto.nombre }}</h4>
        <div>
            {{ proyecto.descripcion }}
        </div>
        <div class="git-demo">
            <ChipItem :skill="{ icono: githubIcon }" :resumido="true" class="chip" v-if="proyecto.github" @click="redirect(proyecto.github)"></ChipItem>
            <ChipItem :skill="{ icono: linkIcon }" :resumido="true" class="chip" v-if="proyecto.demo" @click="redirect(proyecto.demo)"></ChipItem>
        </div>
    </div>
</div>
</template>

<script setup>
import { defineProps } from 'vue';
import githubIcon from '@/assets/icons/github.svg?component'
import linkIcon from '@/assets/icons/link.svg?component'
import ChipItem from './ChipItem.vue';
const props = defineProps({
    proyecto : {
        type: Object,
        required: true
    },
})
const redirect = (link) => {
    if (link) {
        window.open(link, '_blank');
    }
}
</script>

<style lang="postcss" scoped>
.proyecto-item{
    .proyecto-content{
        @apply bg-white rounded-xl shadow-md px-6 pt-3  border-l-4 border-indigo-500;
        h4{
            @apply text-lg font-bold text-gray-800;
        }
        div{
            @apply flex items-center text-gray-600 font-medium mb-2;
        }
        .git-demo{
            @apply flex gap-2 cursor-pointer;
        }
    }
}
</style>