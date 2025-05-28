<template>
    <footer class="footer">
        <div class="contenedor">
            <div class="contenedor-footer">
                <div class="mb-6 md:mb-0">
                    <h2>Franco Miguel Morina Comoglio</h2>
                    <p>Desarrollador Full Stack</p>
                </div>
                <div class="links">
                    <a 
                        v-for="(item, index) in links" 
                        :key="index" 
                        :href="item.url" 
                        target="_blank">
                        <component
                            :is="item.icono"
                            v-bind="item.size ? { size: item.size } : {}"
                        />
                    </a>
                </div>
            </div>
            <div class="mt-8 text-center text-gray-400">
                <p>© {{ anioActual }} Franco Miguel Morina Comoglio. Todos los derechos reservados.</p>
            </div>
        </div>
    </footer>
</template>
<script setup>
import { links } from '@/data/data'; 
const anioActual = new Date().getFullYear();

</script>
<style lang="postcss" scoped>
.footer{
    @apply py-10 bg-gray-800 text-white;
    .contenedor{
        @apply container mx-auto px-4;
        .contenedor-footer{
            @apply flex flex-col md:flex-row justify-between items-center;
            h2{
                @apply text-2xl font-bold;
            }
            p{
                @apply text-gray-300;
            }
            .links{
                @apply flex space-x-4;
                a{
                    @apply text-gray-300 hover:text-white transition duration-300;
                }
            }
        }
    }
}
    
</style>