<template>
    <section id="formacion" class="educacion">
        <div class="contenedor">
            <div class="section-fade visible">
                <h2>Formación Académica</h2>
                <div class="max-w-4xl mx-auto">
                    <h3>Educación Universitaria</h3>
                    <div class="contenedor-universitario">
                        <div v-for="item in universitario" :key="item.id">
                            <h4>{{ item.titulo }}</h4>
                            <p class="institucion">{{ item.institucion }}</p>
                            <p class="tiempo">{{ item.tiempo }}</p>
                        </div>
                    </div>

                    <h3>Cursos Realizados</h3>
                    <div class="contenedor-cursos">
                        <div v-for="curso in cursos" :key="curso.id">
                            <h4>{{ curso.titulo }}</h4>
                            <p class="institucion">{{ curso.institucion }}</p>
                            <p class="tiempo">{{ curso.tiempo }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { educacion } from '@/data/data'; 
const cursos = educacion.filter(item => item.tipo === 'curso');
const universitario = educacion.filter(item => item.tipo === 'universitario');
</script>
<style lang="postcss" scoped>
.educacion{
    @apply py-20 bg-white;
    .contenedor{
        @apply container mx-auto px-4;
        h2{
            @apply text-3xl font-bold text-center text-gray-800 mb-12;
        }
        h3{
            @apply text-xl font-bold text-gray-800 mb-6;
        }
        .contenedor-cursos,
        .contenedor-universitario{
            @apply grid grid-cols-1 md:grid-cols-2 gap-6 mb-12;
            div{
                @apply bg-white rounded-xl shadow-md p-6 border-t-4 border-indigo-500;
                h4{
                    @apply text-lg font-bold text-gray-800;
                }
                .institucion{
                    @apply text-indigo-600 font-medium mb-2;
                }
                .tiempo{
                    @apply text-gray-600;
                }
            }
        }
        .contenedor-cursos{
            @apply grid grid-cols-1 md:grid-cols-2 gap-6;
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