const background = document.getElementById('background');
const totalDrops = 50; // Número de gotas en pantalla
const dropImage = 'img/pepino.png'; // Imagen de la gota (reemplaza con la ruta de tu imagen)

// Función para crear gotas
function createDrop() {
  const drop = document.createElement('img');
  drop.src = dropImage;
  drop.classList.add('drop');
  
  // Posición aleatoria horizontal
  drop.style.left = Math.random() * 100 + 'vw';
  
  // Duración aleatoria de la caída
  const fallDuration = Math.random() * 3 + 2; // Entre 2 y 5 segundos
  drop.style.animationDuration = `${fallDuration}s`;
  
  // Retraso aleatorio para empezar
  const delay = Math.random() * 5; // Hasta 5 segundos de retraso
  drop.style.animationDelay = `${delay}s`;

  background.appendChild(drop);

  // Eliminar la gota después de que pase
  setTimeout(() => {
    drop.remove();
  }, fallDuration * 1000 + delay * 1000);
}

// Crear gotas de forma continua
setInterval(() => {
  createDrop();
}, 200); // Crear una nueva gota cada 200 ms


const btnHome = document.querySelector("#btnHome");
const btnAbout = document.querySelector("#btnAbout");
const btnInterests = document.querySelector("#btnInterests");
const btnContact = document.querySelector("#btnContact");

const divAbout = document.querySelector("#about");
const divInterests = document.querySelector("#my-interests");
const divContact = document.querySelector("#contact");

btnAbout.addEventListener('click',()=>{
  divAbout.style.display = 'block';
  divInterests.style.display = 'none';
  divContact.style.display = 'none';
});


btnInterests.addEventListener('click',()=>{
  divAbout.style.display = 'none';
  divInterests.style.display = 'block';
  divContact.style.display = 'none';
});

btnContact.addEventListener('click',()=>{
  divAbout.style.display = 'none';
  divInterests.style.display = 'none';
  divContact.style.display = 'block';
});

btnHome.addEventListener('click',()=>{
  divAbout.style.display = 'none';
  divInterests.style.display = 'none';
  divContact.style.display = 'none';
});