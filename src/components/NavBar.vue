<template>
    <nav class="navbar">
        <div class="contenedor">
            <a href="#" class="enlace-fm">FM<span>.</span></a>
            <div class="enlaces">
                <a href="#inicio" class="nav-link" @click="smoothScroll">Inicio</a>
                <a href="#experiencia" class="nav-link" @click="smoothScroll">Experiencia</a>
                <a href="#formacion" class="nav-link" @click="smoothScroll">Formación</a>
                <a href="#habilidades" class="nav-link" @click="smoothScroll">Habilidades</a>
                <a href="#contacto" class="nav-link" @click="smoothScroll">Contacto</a>
            </div>
            <button id="mobile-menu-button" @click="toggleMenu">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
        </div>
        <div id="mobile-menu"  :class="menu ? 'md:hidden bg-white shadow-md' : 'hidden'">
            <div class="enlaces">
                <a href="#inicio" @click="smoothScroll">Inicio</a>
                <a href="#experiencia" @click="smoothScroll">Experiencia</a>
                <a href="#formacion" @click="smoothScroll">Formación</a>
                <a href="#habilidades" @click="smoothScroll">Habilidades</a>
                <a href="#contacto" @click="smoothScroll">Contacto</a>
            </div>
        </div>
    </nav>
</template>
<script setup>
import { ref } from 'vue'
const menu = ref(false)
const toggleMenu = () => {
    menu.value = !menu.value
}

const smoothScroll = (e) => {
  e.preventDefault()
  const targetId = e.currentTarget.getAttribute('href')
  if (!targetId) return

  const targetElement = document.querySelector(targetId)
  if (targetElement) {
    const offsetTop = targetElement.offsetTop
    window.scrollTo({
      top: offsetTop - (menu.value ? 30 : 80),
      behavior: 'smooth'
    })
  }
  menu.value = false
}
</script>
<style lang="postcss" scoped>
.navbar{
    @apply fixed w-full bg-white shadow-md z-50;
    .contenedor {
        @apply container mx-auto px-4 py-3 flex justify-between items-center;
        .enlace-fm{
            @apply text-2xl font-bold text-indigo-600;
            span{
                @apply text-gray-800;
            }
        }
        .enlaces{
            @apply hidden md:flex space-x-8;
        }
        #mobile-menu-button{
            @apply md:hidden text-gray-700 focus:outline-none;
            div{
                @apply container mx-auto px-4 py-3 flex flex-col space-y-3;
                a{
                    @apply text-gray-700 hover:text-indigo-600 font-medium;
                }
            }
        }
    }
    #mobile-menu {
        @apply md:hidden bg-white shadow-md;
        .enlaces{
            @apply container mx-auto px-4 py-3 flex flex-col space-y-3;
            a{
                @apply text-gray-700 hover:text-indigo-600 font-medium;
            }
        }
    }
    .nav-link {
        position: relative;
        @apply text-gray-700 hover:text-indigo-600 font-medium;
    }
    
    .nav-link::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 0;
        height: 2px;
        background-color: #4F46E5;
        transition: width 0.3s ease;
    }
    
    .nav-link:hover::after {
        width: 100%;
    }
}
    
</style>