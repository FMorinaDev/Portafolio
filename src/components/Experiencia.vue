<template>
    <section class="experiencia" id="experiencia">
        <div class="contenedor">
            <div class="section-fade visible">
                <h2>Experiencia Laboral</h2>
                <div class="items">
                    <div class="timeline-item" :class="{ 'pb-12': index !== experiencia.length - 1 }" v-for="(item, index) in experiencia" :key="index">
                        <div class="timeline-dot"></div>
                        <div class="timeline-content">
                            <h3 >{{ item.cargo }}</h3>
                            <div>
                                <span>{{ item.empresa }}</span>
                                <span class="mx-2">•</span>
                                <span>{{ item.tiempo }}</span>
                            </div>
                            <p class="ubicacion">{{ item.ubicacion }}</p>
                            <p class="tecnologias">
                                {{ item.detalles }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { experiencia } from '@/data/data'; 
</script>
<style lang="postcss" scoped>
.experiencia{
    @apply py-16 bg-gray-50;
    .contenedor{
        @apply container mx-auto px-4 relative;
        h2{
            @apply text-3xl font-bold text-center text-gray-800 mb-12;
        }
        .items{
            @apply max-w-4xl mx-auto;
            .timeline-item {
                @apply relative pl-10;
            }
            
            .timeline-item::before {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                height: 100%;
                width: 2px;
                background-color: #4F46E5;
            }
            .timeline-dot {
                position: absolute;
                left: -9px;
                top: 24px;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background-color: #4F46E5;
            }
            .timeline-content{
                @apply bg-white rounded-xl shadow-md p-6 border-l-4 border-indigo-500;
                h3{
                    @apply text-xl font-bold text-gray-800;
                }
                div{
                    @apply flex items-center text-indigo-600 font-medium mb-2;
                }
                .ubicacion{
                    @apply text-gray-600 mb-4;
                }
                .tecnologias{
                    @apply text-gray-700;

                }
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