// Importano versión SASS de Bootstrap 4.5.3
import 'bootstrap';
// Importando complementes necesario del framework
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/alert';
// Archivo CSS generado con Webpack
import './styles/styles.scss'; // Override a las variables por defecto de Bootstrap


// Importar imágenes

// Home
import './static/img/img-01.jpg';
import './static/img/img-02.jpg';
import './static/img/logo-alnet-serveis.png';
import './static/img/logo-alnet-studio.png';
import './static/img/logo-mk.png';

// Nosotros
import './static/img/img-1.jpg';
import './static/img/img-nosotros-studio.jpg';

// Categoria (Studio)
import './static/img/img-serv-01.jpg';
import './static/img/img-serv-02.jpg';
import './static/img/img-serv-03.jpg';

// Categoría (Serveis)
import './static/img/img-serv-serveis-1.jpg';
import './static/img/img-serv-serveis-2.jpg';
// Subcategoría
import './static/img/img-sub-serveis-1.jpg';
import './static/img/img-sub-serveis-2.jpg';
import './static/img/img-sub-serveis-3.jpg';

// Proyectos (Studio)
import './static/img/img-proy-01.jpg';
import './static/img/img-proy-02.jpg';
import './static/img/img-proy-03.jpg';
// Proyecto Interna
import './static/img/img-proye-interna-01.jpg';

// Categoría Interna
import './static/img/img-media-1.jpg';
import './static/img/img-media-2.jpg';
import './static/img/img-media-1-studio.jpg';
import './static/img/img-media-2-studio.jpg';
import './static/svg/vineta.svg';

// Contacto
import './static/img/mapa.png';

// Home
import './static/img/main-slider-1.jpg';
import './static/img/main-slider-1-studio.jpg';

// Menú
import './static/img/logo-menu.png';

// Script para el header


//
function ffWrapperScrollDown() {
    //
    let wrapper = document.querySelector('.navbar');
    let scrollY = window.scrollY;
    if (scrollY > 100) {
      wrapper.classList.add('bg-scroll');
    } else {
      wrapper.classList.remove('bg-scroll');
    }
    //
  }
  window.addEventListener('load', ffWrapperScrollDown);
  window.addEventListener('scroll', ffWrapperScrollDown);
  //
  
  function closeMenu() {
    let menu = document.querySelector('#navbarNav');
    
    menu.classList.remove('show');
  }
  
  window.addEventListener('click', closeMenu);