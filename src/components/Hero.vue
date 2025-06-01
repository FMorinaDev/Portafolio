<template>
    <section id="inicio" class="hero">
        <div class="contenedor">
            <div class="informacion">
                <h1>Franco Miguel Morina Comoglio</h1>
                <h2>Desarrollador Full Stack | TL</h2>
                <p>
                    Apasionado de la programación con residencia actual en Córdoba Capital. 
                    Especializado en desarrollo web y móvil con experiencia en múltiples tecnologías.
                </p>
                <div>
                    <a href="#contacto" class="contacto" @click="smoothScroll">Contáctame</a>
                    <a href="#experiencia" class="experiencia" @click="smoothScroll">Ver experiencia</a>
                </div>
            </div>
            <div class="contenedor-imagen">
                <div class="contenedor-redondo">
                    <div class="contenedor-jpg">
                        <img src="../assets/mi-avatar.jpg" alt="mi-imagen">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
const smoothScroll = (e) => {
  e.preventDefault()
  const targetId = e.currentTarget.getAttribute('href')
  if (!targetId) return

  const targetElement = document.querySelector(targetId)
  if (targetElement) {
    const offsetTop = targetElement.offsetTop
    window.scrollTo({
      top: offsetTop - 80,
      behavior: 'smooth'
    })
  }
}
</script>
<style lang="postcss" scoped>
.hero{
    @apply pt-28 pb-20;
    background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%);
    .contenedor{
        @apply container mx-auto px-4 flex flex-col md:flex-row items-center;
        .informacion{
            @apply md:w-1/2 mb-10 md:mb-0;
            h1{
                @apply text-4xl md:text-5xl font-bold text-white mb-4;
            }
            h2{
                @apply text-xl md:text-2xl font-medium text-indigo-100 mb-6;
            }
            p{
                @apply text-white text-opacity-90 mb-8 leading-relaxed;
            }
            div{
                @apply flex space-x-4;
                .contacto{
                    @apply px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg hover:bg-gray-100 transition duration-300;
                }
                .experiencia{
                    @apply px-6 py-3 border border-white text-white font-medium rounded-lg hover:bg-white hover:bg-opacity-10 transition duration-300;
                }
            }
        }
        .contenedor-imagen{
            @apply md:w-1/2 flex justify-center;
            .contenedor-redondo{
                @apply w-64 h-64 rounded-full bg-white p-2 shadow-xl;
                .contenedor-jpg{
                    @apply w-full h-full rounded-full bg-indigo-100 flex items-center justify-center;
                    img{
                        @apply rounded-full;
                    }
                }
            }
        }
    }
}
    
</style>