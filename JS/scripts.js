function mostrarSeccion(seccionId) {
  // Ocultar todas las secciones
  const secciones = document.querySelectorAll('.seccion');
  secciones.forEach(seccion => seccion.style.display = 'none');
  
  // Mostrar la sección seleccionada
  const seccionActiva = document.getElementById(seccionId);
  seccionActiva.style.display = 'block';
}

// Esperar a que el DOM se cargue para mostrar la primera sección
document.addEventListener('DOMContentLoaded', () => {
  mostrarSeccion('inicio');  // Mostrar la sección de inicio por defecto
});

// Función para mostrar los detalles del proyecto
function verProyecto(proyectoId) {
  const detalles = {
    1: {
      nombre: "Butaca baja para PILMA",
      descripcion: "El objetivo principal dado por Pilma es diseñar una gama de productos. Se trata de ayudar a la empresa a darse a conocer en Madrid. La butaca baja Cálix forma parte de la gama. Se busca crear uniones no vistas sin utilizar tornillos ni clavos. La inspiración principal de la gama es el diseño nórdico y Finn Julh.",
      imagen: "./assets/Image 1 (1).png"
    },
    2: {
      nombre: "Banco de cama para Studio Silva",
      descripcion: "Se diseña un banco de cama, pensado para camas de matrimonio colaborando con una empresa de mobiliario portuguesa llamada Studio Silva. El proyecto se desarrolló siguiendo un briefing predeterminado por la empresa en el que principalmente se pide que el banco de cama combine con la estética de la marca.El banco tiene dos cajones para los pijamas, espacio debajo  para zapatillas y un cojín. Es rectangular con las esquinas redondeadas aportando una forma más fluida. La base del banco soporta el mueble, reforzada con unas piezas en las esquinas.",
      imagen: "./assets/Untitled (9).png"
    },
    3: {
      nombre: "Batidora ergonómica",
      descripcion: "En este proyecto el objetivo es repensar  la batidora de mano, para hacer de su uso en la cocina una experiencia intuitiva y eficiente. Para conseguirlo, los objetos en cuestión deben diseñarse teniendo en cuenta la ergonomía, la funcionalidad y el diseño.",
      imagen: "./assets/Captura de pantalla 2025-01-14 172657.png"
    }
  };

  const proyecto = detalles[proyectoId];
  
  // Actualizar el contenido de la sección de detalles
  const detalleDiv = document.getElementById('detalle-content');
  detalleDiv.innerHTML = `
    <h3>${proyecto.nombre}</h3> 
    <img src="${proyecto.imagen}" alt="${proyecto.nombre}" style="max-width: 75%; border-radius: 0px; margin-bottom: 30px;">
    <p style="text-align: center">${proyecto.descripcion}</p> 
  `;
  


  // Mostrar la sección de detalles del proyecto y ocultar otras secciones
  mostrarSeccion('detalle-proyecto');
}
