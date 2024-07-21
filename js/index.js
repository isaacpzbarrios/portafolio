const text = "con un Front-end de calidad!";
const element = document.getElementById('titulo-destaque');
let index = 0;

// Efecto de escritura
function type() {
  if (index < text.length) {
    element.innerHTML += text.charAt(index);
    index++;
    setTimeout(type, 100); 
  } else {
    setTimeout(erase, 1000);
  }
}

// Efecto de borrado
function erase() {
  if (index > 0) {
    element.innerHTML = text.substring(0, index - 1);
    index--;
    setTimeout(erase, 50);
  } else {
    setTimeout(type, 500); 
  }
}

// Inicia el efecto
type();
