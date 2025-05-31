<template>
    <section class="sobre-mi">
        <div class="contenedor">
            <div class="section-fade visible">
                <h2>Sobre mí</h2>
                <div>
                    <p :class="{ 'ultimo': index === sobreMi.length - 1 }" v-for="(oracion, index) in sobreMi" :key="oracion"> {{ oracion }} </p>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { sobreMi } from '@/data/data';
</script>
<style lang="postcss" scoped>
.sobre-mi{
    @apply py-16 bg-white;
    .contenedor{
        @apply container mx-auto px-4;
        .section-fade {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
            &.visible {
                opacity: 1;
                transform: translateY(0);
            }
            h2{
                @apply text-3xl font-bold text-center text-gray-800 mb-12;
            }
            div{
                @apply max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8 border-l-4 border-indigo-500;
                p{
                    @apply text-gray-700 leading-relaxed mb-4;
                }
                .ultimo{
                    @apply text-gray-700 leading-relaxed;
                }
            }
        }
    }
}
    
</style>