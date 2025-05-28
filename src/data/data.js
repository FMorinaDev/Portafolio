import FlutterIcon from '@/assets/icons/flutter.svg?component'
import HtmlIcon from '@/assets/icons/html5.svg?component'
import CSharpIcon from '@/assets/icons/c3.svg?component'
import CSSIcon from '@/assets/icons/css-3.svg?component'
import CypressIcon from '@/assets/icons/cypress.svg?component'
import JqueryIcon from '@/assets/icons/jquery.svg?component'
import JavaScriptIcon from '@/assets/icons/js.svg?component'
import MongoDBIcon from '@/assets/icons/mongodb.svg?component'
import MysqlIcon from '@/assets/icons/mysql.svg?component'
import NestJsIcon from '@/assets/icons/nestjs.svg?component'
import NodeJsIcon from '@/assets/icons/nodejs.svg?component'
import SASSIcon from '@/assets/icons/sass.svg?component'
import ScrumIcon from '@/assets/icons/scrum.svg?component'
import SQLserverIcon from '@/assets/icons/sql.svg?component'
import TailwindIcon from '@/assets/icons/tailwind.svg?component'
import TypeScriptIcon from '@/assets/icons/typescript.svg?component'
import VueJsIcon from '@/assets/icons/vue.svg?component'

import IconTwitter from '@/components/icons/IconTwitter.vue'
import IconInstagram from '@/components/icons/IconInstagram.vue'
import IconFacebook from '@/components/icons/IconFacebook.vue'
import IconLinkedin from '@/components/icons/IconLinkedin.vue'
import IconUsuarioVue from '@/components/icons/IconUsuario.vue'
import IconUbicacionVue from '@/components/icons/IconUbicacion.vue'
import IconEmailVue from '@/components/icons/IconEmail.vue'
import IconTelefonoVue from '@/components/icons/IconTelefono.vue'

export const links = [
  { nombre: 'Twitter', url: 'https://x.com/FrancoMorina', icono: IconTwitter },
  { nombre: 'Instagram', url: 'https://www.instagram.com/morinafranco', icono: IconInstagram },
  { nombre: 'Facebook', url: 'https://www.facebook.com/profile.php?id=100011783949360', icono: IconFacebook, size: 18 },
  { nombre: 'LinkedIn', url: 'https://www.linkedin.com/in/franco-miguel-morina-comoglio-8a364565/', icono: IconLinkedin },
]

export const datosPersonales = [
    {
        valor: 'Franco Miguel Morina Comoglio',
        label: 'Nombre completo',
        icono: IconUsuarioVue,
    },
    {
        valor: 'Córdoba, Argentina',
        label: 'Ubicación',
        icono: IconUbicacionVue,
    },
    {
        valor: 'francomorinaa@gmail.com',
        label: 'Correo electrónico',
        icono: IconEmailVue,
    },
    {
        valor: '+54 351-3165992',
        label: 'Telefono',
        icono: IconTelefonoVue,
    },    
]
export const experiencia = [
    {
        cargo: 'Desarrollador web Full Stack',
        empresa: 'AULICA',
        tiempo: 'Oct 2021 - Actualidad',
        ubicacion: 'Córdoba, Córdoba, Argentina',
        detalles: 'Mis áreas de especialización incluyen HTML, CSS, Vue.js, jQuery, C#, Node.js, así como bases de datos como Oracle, MySQL y MongoDB. Además, también estoy explorando el emocionante mundo de Flutter y haciendo test automáticos con Cypress.'
    },
    {
        cargo: 'Desarrollador web Full Stack',
        empresa: 'Dux Software',
        tiempo: 'Jun 2021 - Oct 2021',
        ubicacion: 'Córdoba, Córdoba, Argentina',
        detalles: 'Comencé mi trayectoria laboral en esta empresa. Usando html, css, js, java y Oracle.'
    }
]
export const sobreMi = [
    'Soy Franco Miguel Morina Comoglio, un apasionado de la programación con raíces en General Levalle y residencia actual en Córdoba Capital. Poseo una sólida formación como Técnico Universitario en Programación, lo que me ha permitido embarcarme en una emocionante carrera profesional en el mundo del desarrollo de software.',
    'Comencé mi trayectoria laboral como Full Stack en Dux Software, donde tuve la oportunidad de trabajar con tecnologías como Java, CSS, JavaScript y Oracle. Durante estos 3 meses, adquirí valiosos conocimientos y habilidades que sentaron las bases de mi experiencia técnica.',
    'Actualmente, me desempeño como Full Stack en Aulica, donde continúo expandiendo mi conjunto de habilidades. Mis áreas de especialización incluyen HTML, CSS, Vue.js, jQuery, C#, Node.js, así como bases de datos como Oracle, MySQL y MongoDB. Además, también estoy explorando el emocionante mundo de Flutter, una plataforma de desarrollo de aplicaciones móviles multiplataforma.',
    'Creo firmemente en el aprendizaje continuo y estoy siempre buscando nuevas oportunidades para crecer y desarrollarme tanto profesional como personalmente. Estoy emocionado por conectar con profesionales de ideas afines y explorar posibles colaboraciones y proyectos interesantes.',
]
export const educacion = [
    {
        tipo: 'universitario',
        titulo: 'Técnico universitario',
        institucion: 'UTN FRC',
        tiempo: 'Feb 2019 - Jun 2022'
    },
    {
        tipo: 'universitario',
        titulo: 'Simulaciones virtuales y videojuegos',
        institucion: 'IES Siglo XXI',
        tiempo: 'Ago 2012 - Nov 2013'
    },
    {
        tipo: 'curso',
        titulo: 'Desarrollo Web Completo con HTML5, CSS3, JS AJAX PHP y MySQL',
        institucion: 'Udemy',
        tiempo: 'Dic 2021 - Dic 2022'
    },
    {
        tipo: 'curso',
        titulo: 'Vue.js: De cero a experto',
        institucion: 'Udemy',
        tiempo: 'Ene 2022 — Abr 2022'
    },
    {
        tipo: 'curso',
        titulo: 'Programación en C#',
        institucion: 'Udemy',
        tiempo: 'Ago 2019 — Sep 2019'
    },
    {
        tipo: 'curso',
        titulo: 'Node: De cero a experto',
        institucion: 'Udemy',
        tiempo: 'Dic 2021 — May 2022'
    },
    {
        tipo: 'curso',
        titulo: 'Cypress: Master en automatización Test QA',
        institucion: 'Udemy',
        tiempo: 'Ene 2022 — May 2022'
    },
    {
        tipo: 'curso',
        titulo: 'Node: Flutter - Móvil: De cero a experto',
        institucion: 'Udemy',
        tiempo: 'Nov 2023 — Actualidad'
    },
]
export const habilidades = [
    {
        nombre: 'HTML5',
        icono: HtmlIcon,
    },
    {
        nombre: 'CSS3',
        icono: CSSIcon,
    },
    {
        nombre: 'Tailwind CSS',
        icono: TailwindIcon,
    },
    {
        nombre: 'SASS',
        icono: SASSIcon,
    },
    {
        nombre: 'jQuery',
        icono: JqueryIcon,
    },
    {
        nombre: 'JavaScript',
        icono: JavaScriptIcon,
    },
    {
        nombre: 'TypeScript',
        icono: TypeScriptIcon,
    },
    {
        nombre: 'Vue.js',
        icono: VueJsIcon,
    },
    {
        nombre: 'Flutter',
        icono: FlutterIcon,
    },
    {
        nombre: 'C#',
        icono: CSharpIcon,
    },
    {
        nombre: 'Node.js',
        icono: NodeJsIcon,
    },
    {
        nombre: 'Nest.js',
        icono: NestJsIcon,
    },
    {
        nombre: 'SQL Server',
        icono: SQLserverIcon,
    },
    {
        nombre: 'MongoDB',
        icono: MongoDBIcon,
    },
    {
        nombre: 'MySQL',
        icono: MysqlIcon,
    },
    {
        nombre: 'Cypress',
        icono: CypressIcon,
    },
    {
        nombre: 'Scrum',
        icono: ScrumIcon,
    },
]