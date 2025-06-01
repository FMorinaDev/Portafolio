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
import PostmanIcon from '@/assets/icons/postman.svg?component'
import GitIcon from '@/assets/icons/git.svg?component'
import figmaIcon from '@/assets/icons/figma.svg?component'

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
        cargo: 'Desarrollador web Full Stack | TL',
        empresa: 'AULICA',
        tiempo: 'Oct 2021 - Actualidad',
        ubicacion: 'Córdoba, Argentina',
        detalles: 'Actualmente, como Desarrollador Full Stack y Líder Técnico de un equipo de desarrollo. Me especializo en HTML, CSS, JavaScript, Vue.js, jQuery, C#, Node.js, Oracle, MySQL, MongoDB, Flutter y Cypress.'
    },
    {
        cargo: 'Desarrollador web Full Stack',
        empresa: 'Dux Software',
        tiempo: 'Jun 2021 - Oct 2021',
        ubicacion: 'Córdoba, Argentina',
        detalles: 'Comencé mi trayectoria laboral en esta empresa. Usando HTML, CSS, JavaScript, Java y Oracle.'
    }
]
export const sobreMi = [
    'Soy Franco, desarrollador Full Stack con más de 4 años de experiencia. Me formé como técnico en programación en la Universidad Tecnológica Nacional de Córdoba y actualmente me sigo formando a través de cursos que me ayudan a ampliar mis conocimientos y habilidades en nuevas tecnologías y lenguajes.',
    `Comencé mi trayectoria laboral como Full Stack en 'Dux Software', donde trabajé con tecnologías como Java, CSS, JavaScript, PrimeFaces y Oracle. Me desarrollé en la empresa durante 3 meses en los cuales pude adquirir conocimientos y habilidades que me ayudaron a asentar las bases de mi experiencia técnica.`,
    `Actualmente, me encuentro trabajando como Full Stack en 'Aulica', en donde soy TL de mi equipo de desarrollo, lo cual me ayuda a su vez a expandir mi conjunto de habilidades. Mis áreas de especialización incluyen HTML, CSS, JavaScript, Vue.js, jQuery, C#, Node.js, así como bases de datos como Oracle, MySQL y MongoDB. Además, estoy desarrollando aplicaciones multiplataforma en Flutter y creando test automáticos en Cypress.`,
    'Me interesa seguir aprendiendo, por lo que estoy siempre buscando nuevas oportunidades para crecer y desarrollarme tanto profesional como personalmente. Me encantaría poder conectar con profesionales de ideas afines y explorar posibles colaboraciones y proyectos interesantes.',
]
export const educacion = [
    {
        tipo: 'universitario',
        titulo: 'Técnico Universitario en Programación',
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
        link: 'https://www.udemy.com/course/desarrollo-web-completo-con-html5-css3-js-php-y-mysql/',
        institucion: 'Udemy',
        tiempo: '83 Horas'
    },
    {
        tipo: 'curso',
        titulo: 'Vue.js: De cero a experto',
        link: 'https://www.udemy.com/course/vuejs-fh/',
        institucion: 'Udemy',
        tiempo: '38 Horas'
    },
    {
        tipo: 'curso',
        titulo: 'Vue.js 3 - La Guía Completa - Composition Pinia MEVN 10 Apps',
        link: 'https://www.udemy.com/course/vuejs-la-guia-completa-composition-pinia-mevn-creando-proyectos-reales/',
        institucion: 'Udemy',
        tiempo: '41 Horas'
    },
    {
        tipo: 'curso',
        titulo: 'Domina la Programación C# con Visual Studio DESDE CERO',
        link: 'https://www.udemy.com/course/aprende-programacion-con-c-sharp-y-visual-studio-desde-cero/',
        institucion: 'Udemy',
        tiempo: '8 Horas'
    },
    {
        tipo: 'curso',
        titulo: 'Node: De cero a experto',
        link: 'https://www.udemy.com/course/node-de-cero-a-experto/',
        institucion: 'Udemy',
        tiempo: '29 Horas'
    },
    {
        tipo: 'curso',
        titulo: 'Cypress: Master en automatización Test QA',
        link: 'https://www.udemy.com/course/cypress-master-en-automatizacion-de-pruebas-y-qa-espanol/',
        institucion: 'Udemy',
        tiempo: '29 Horas'
    },
    {
        tipo: 'curso',
        titulo: 'Nest: Desarrollo backend escalable con Node',
        link: 'https://www.udemy.com/course/nest-framework/',
        institucion: 'Udemy',
        tiempo: '25 Horas'
    },
    {
        tipo: 'curso',
        titulo: 'Curso de C# .NET desde cero hasta lo mas avanzado full stack',
        link: 'https://www.udemy.com/course/curso-de-c-sharp-net-core-desde-cero/',
        institucion: 'Udemy',
        tiempo: '24 Horas'
    },
    {
        tipo: 'curso',
        titulo: 'Git y GitHub 100% Práctico',
        link: 'https://www.udemy.com/course/git-y-github-100-practico/',
        institucion: 'Udemy',
        tiempo: '1 Hora'
    },
    {
        tipo: 'curso',
        titulo: 'Master en CSS: Responsive, SASS, Flexbox, Grid y Bootstrap',
        link: 'https://www.udemy.com/course/master-en-css-responsive-sass-flexbox-grid-y-boostrap-4/',
        institucion: 'Udemy',
        tiempo: '21 Horas'
    },
    {
        tipo: 'curso',
        titulo: 'UX: leyes y fundamentos explicados con ejemplos prácticos',
        link: 'https://www.udemy.com/course/ux-leyes-y-fundamentos-explicados-con-ejemplos-practicos/',
        institucion: 'Udemy',
        tiempo: '2 Horas'
    },
    {
        tipo: 'curso',
        titulo: 'Flutter - Móvil: De cero a experto',
        link: 'https://www.udemy.com/course/flutter-cero-a-experto/',
        institucion: 'Udemy',
        tiempo: '50 Horas'
    },
    {
        tipo: 'curso',
        titulo: 'Python TOTAL - Programador Avanzado en 16 días',
        link: 'https://www.udemy.com/course/python-total/',
        institucion: 'Udemy',
        tiempo: '31 Horas'
    },
    {
        tipo: 'curso',
        titulo: 'Máster en SQL Server: Desde Cero a Nivel Profesional',
        link: 'https://www.udemy.com/course/master-sql-server/',
        institucion: 'Udemy',
        tiempo: '16 Horas'
    },
    {
        tipo: 'curso',
        titulo: 'Java Avanzado',
        link: 'https://www.udemy.com/course/java-avanzado-aplicaciones-empresariales-para-empleo/',
        institucion: 'Udemy',
        tiempo: '53 Horas'
    },
    {
        tipo: 'curso',
        titulo: 'JavaScript Moderno Guía Definitiva Construye +20 Proyectos',
        link: 'https://www.udemy.com/course/javascript-moderno-guia-definitiva-construye-10-proyectos/',
        institucion: 'Udemy',
        tiempo: '53 Horas'
    },
    {
        tipo: 'curso',
        titulo: 'Freelancing: Curso Completo para Diseñadores y Programadores',
        link: 'https://www.udemy.com/course/como-ser-un-freelancer-exitoso-para-diseno-y-desarrollo-web/',
        institucion: 'Udemy',
        tiempo: '6 Horas'
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
        nombre: 'Postman',
        icono: PostmanIcon,
    },
    {
        nombre: 'Git',
        icono: GitIcon,
    },
    {
        nombre: 'Figma',
        icono: figmaIcon,
    },
    {
        nombre: 'Scrum',
        icono: ScrumIcon,
    },
]
export const proyectos = [
    {
        nombre: 'Cotizador de Criptomonedas',
        descripcion: 'App que compara criptomonedas usando APIs de datos en tiempo real. Permite ver precios y tendencias',
        github: 'https://github.com/FMorinaDev/comparadorCrypto',
        demo: 'https://comparadorcrpto.netlify.app'
    },
    {
        nombre: 'Administrador de Gastos',
        descripcion: 'App para administrar gastos e ingresos',
        github: 'https://github.com/FMorinaDev/AdministradorGastos',
        demo: 'https://administradorgastosfm.netlify.app'
    },
    {
        nombre: 'Seguimiento de Pacientes Veterinaria ',
        descripcion: 'App de gestión de pacientes para veterinarias',
        github: 'https://github.com/FMorinaDev/PacientesVeterinaria',
        demo: 'https://pacientesveterinariafm.netlify.app'
    },
    {
        nombre: 'GuitarLA',
        descripcion: 'Un catálogo de guitarras',
        github: 'https://github.com/FMorinaDev/guitarLA',
        demo: 'https://guitarlafm.netlify.app'
    },
    {
        nombre: 'Buscador Multicampos',
        descripcion: 'App para buscar por varios campos a la vez en una lista de manera local',
        github: 'https://github.com/FMorinaDev/BuscadorMultiCampos',
        demo: 'https://buscadormulticamposfm.netlify.app'
    },
    {
        nombre: 'Envio Email',
        descripcion: 'Front end de envio de email',
        github: 'https://github.com/FMorinaDev/EnvioMail',
        demo: 'https://enviaremailfm.netlify.app'
    },
    {
        nombre: 'Carrito de Compras HTML',
        descripcion: 'Catálogo simple con funcionalidad de carrito de compras.',
        github: 'https://github.com/FMorinaDev/CarritoCompras',
        demo: 'https://carritocomprashtmlfm.netlify.app'
    },
    {
        nombre: 'Cypress',
        descripcion: 'Proyecto de pruebas automatizadas usando Cypress.',
        github: 'https://github.com/FMorinaDev/cypress',
    },
]