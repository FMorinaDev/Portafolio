<template>
  <div class="body bg-gray-50">
    <NavBar />
    <Hero></Hero>
    <SobreMi></SobreMi>
    <Experiencia></Experiencia>
    <Educacion></Educacion>
    <Habilidades></Habilidades>
    <Contacto></Contacto>
    <Footer></Footer>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue';
import Hero from './components/Hero.vue';
import SobreMi from './components/SobreMi.vue';
import Experiencia from './components/Experiencia.vue';
import Educacion from './components/Educacion.vue';
import Habilidades from './components/Habilidades.vue';
import Contacto from './components/Contacto.vue';
import Footer from './components/Footer.vue';
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        
  .body {
    font-family: 'Poppins', sans-serif;
    scroll-behavior: smooth;
  }
</style>
