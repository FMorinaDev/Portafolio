<template>
    <section class="proyecto" id="proyectos">
        <div class="contenedor">
            <div class="section-fade visible">
                <h2>Mis Proyectos</h2>
                <div class="items">
                    <ProyectoItem v-for="(item, index) in proyectos" :key="index" :proyecto="item"></ProyectoItem>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { proyectos } from '@/data/data';
import ProyectoItem from './ProyectoItem.vue';
</script>
<style lang="postcss" scoped>
.proyecto{
    @apply py-16 bg-white;
    .contenedor{
        @apply container mx-auto px-4 relative;
        h2{
            @apply text-3xl font-bold text-center text-gray-800 mb-12;
        }
        .items{
            @apply grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto;
        }
    }
    .section-fade {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .section-fade.visible {
        opacity: 1;
        transform: translateY(0);
    }
}
    
</style>