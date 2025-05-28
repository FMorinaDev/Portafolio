<template>
    <section id="habilidades" class="habilidades">
        <div class="contenedor">
            <div class="section-fade visible">
                <h2>Habilidades Técnicas</h2>
                <div class="lista-habilidades">
                    <div v-for="(skill, index) in habilidades" :key="index" class="skill-pill">
                        <component :is="skill.icono" class="w-6 h-6  mr-3" />
                        <span class="font-medium">{{ skill.nombre }}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { habilidades } from '@/data/data'; 
</script>
<style lang="postcss" scoped>
.habilidades{
    @apply py-20 bg-gray-50;
    .contenedor{
        @apply container mx-auto px-4;
        h2{
            @apply text-3xl font-bold text-center text-gray-800 mb-12;
        }
        .lista-habilidades{
            @apply max-w-4xl mx-auto flex flex-wrap justify-center gap-4;
            
            .skill-pill {
                @apply bg-white px-6 py-4 rounded-full shadow-md border border-gray-200 flex items-center;
                transition: all 0.3s ease;
            }
            
            .skill-pill:hover {
                transform: translateY(-5px);
                box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            }
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