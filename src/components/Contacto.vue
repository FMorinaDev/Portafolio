<template>
    <section id="contacto" class="contacto">
        <div class="container mx-auto px-4">
            <div class="section-fade visible">
                <h2>Contacto</h2>
                <div class="contenedor-contacto">
                    <div class="md:w-1/2">
                        <form
                            id="contact-form"
                            class="formulario"
                            action="https://formspree.io/f/xldbqjyb"
                            method="POST"
                            @submit="enviarEmail"
                        >
                        <h3>Envíame un mensaje</h3>
                        <div class="mb-6">
                            <label for="name">Nombre completo</label>
                            <input v-model="nombre" type="text" id="name" name="name" />
                        </div>
                        <div class="mb-6">
                            <label for="email">Correo electrónico</label>
                            <input v-model="email" type="email" id="email" name="email" />
                        </div>
                        <div class="mb-6">
                            <label for="phone">Teléfono</label>
                            <input v-model="telefono" type="tel" id="phone" name="phone" />
                        </div>
                        <div class="mb-6">
                            <label for="message">Mensaje</label>
                            <textarea v-model="mensaje" id="message" name="message" rows="5"></textarea>
                        </div>
                        <button type="submit">Enviar mensaje</button>
                        <div id="form-message" class="mt-4 text-center" :class="{'error-mensaje' : errorForm}" v-if="mensajeForm">{{ mensajeForm }}</div>
                        </form>

                    </div>
                    <div class="md:w-1/2">
                        <div class="informacion-contacto">
                            <h3>Información de contacto</h3>
                            <div class="space-y-6">
                                <div
                                    v-for="(item, index) in datosPersonales"
                                    :key="index" 
                                    class="flex items-start" 
                                >
                                    <div class="contenedor-icono">
                                        <component
                                            :is="item.icono"
                                        />
                                    </div>
                                    <div class="ml-4">
                                        <h4>{{ item.label }}</h4>
                                        <p class="text-gray-600">{{ item.valor }}</p>
                                    </div>
                                </div>                                
                            </div>
                            
                            <h3 class="redes-sociales">Redes sociales</h3>
                            <div class="flex space-x-4">
                                <a 
                                    v-for="(item, index) in links" 
                                    :key="index" 
                                    :href="item.url" 
                                    target="_blank"
                                    class="social-icon">
                                    <component
                                        :is="item.icono"
                                        v-bind="item.size ? { size: item.size } : {}"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { datosPersonales, links } from '@/data/data';
import { ref } from 'vue'
const nombre = ref('')
const email = ref('')
const telefono = ref('')
const mensaje = ref('')

const emailValido = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}
const errorForm = ref(false)
const mensajeForm = ref('');
const enviarEmail = (e) => {
    e.preventDefault()
    if (!nombre.value || !email.value || !mensaje.value) {
        showMessage('Por favor completa los campos requeridos.')
        return
    }

    if (!emailValido(email.value)) {
        showMessage('Por favor ingresa un correo electrónico válido.')
        return
    }
    const form = e.target
    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { Accept: 'application/json' },
    })
    .then((response) => {
        if (response.ok) {
            showMessage('¡Mensaje enviado con éxito! Te contactaré pronto.')
            form.reset()
            nombre.value = ''
            email.value = ''
            telefono.value = ''
            mensaje.value = ''
        } else {
            showMessage()
        }
    })
    .catch(() => {
        showMessage()
    })
}
const showMessage = (mensaje = '¡Ups! Hubo un error.') => {
    errorForm.value = true
    mensajeForm.value = mensaje
    setTimeout(() => {
        errorForm.value = false
        mensajeForm.value = ''
    }, 5000);
}
</script>
<style lang="postcss" scoped>
    .contacto{
        @apply py-20 bg-white;
        h2{
            @apply text-3xl font-bold text-center text-gray-800 mb-12;
        }
        .contenedor-contacto{
            @apply max-w-6xl mx-auto flex flex-col md:flex-row gap-10;
            .formulario{
                @apply bg-white rounded-xl shadow-md p-8 border-l-4 border-indigo-500;
                h3{
                    @apply text-xl font-bold text-gray-800 mb-6;
                }
                label{
                    @apply block text-gray-700 font-medium mb-2;
                }
                input, textarea{
                    @apply w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500;
                }
                textarea{
                    @apply resize-none;
                }
                button{
                    @apply w-full py-3 px-6 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition duration-300;
                }
                .error-mensaje{
                    @apply text-red-600 font-bold;
                }
            }
            .informacion-contacto{
                @apply bg-white rounded-xl shadow-md p-8 border-l-4 border-indigo-500 h-full;
                h3{
                    @apply text-xl font-bold text-gray-800 mb-6;
                }
                h4{
                    @apply text-lg font-medium text-gray-800;
                }
                .redes-sociales{
                    @apply text-xl font-bold text-gray-800 mt-10 mb-6;
                }
            }
            a{
                @apply bg-indigo-100 p-3 rounded-full text-indigo-600 hover:bg-indigo-600 hover:text-white transition duration-300;
            }
            .social-icon {
                transition: all 0.3s ease;
            }
            
            .social-icon:hover {
                transform: translateY(-5px);
            }
            .contenedor-icono{
                @apply flex-shrink-0 bg-indigo-100 p-3 rounded-full;
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