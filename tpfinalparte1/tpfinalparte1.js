let pantallaActual = 0; 
let textos = [];
let fondos = []; 

function preload() {
  textos = loadStrings("data/cuento.txt"); 
  
  for (let i = 0; i < 8; i++) { 
    fondos[i] = loadImage("data/autopista" + i + ".jpeg");
  }
}

function setup() {
  createCanvas(640, 480);
  textSize(18);
}

function draw() {
  background(255); 
  fill(255);
  textAlign(CENTER);

  if (pantallaActual === 0) {
    mostrarFondo(0); 
    fill(0);
    rect(70, 40, 500, 60);
    fill(255);
    textSize(32);
    text('La autopista del sur', width / 2, 80);
    textSize(24);

    // Botón de Inicio
    fill(0);
    rect(120, 285, 120, 50); 
    fill(255);
    textSize(20);
    text('Inicio', 180, 315); 

    // Botón de Créditos
    fill(0);
    rect(400, 285, 120, 50); 
    fill(255);
    textSize(20);
    text('Créditos', 460, 315); 

  } else if (pantallaActual === 1) {
    mostrarFondo(0); 
    fill(255);
    rect(70, 25, 500, 100);
    fill(0);
    mostrarTexto(textos[0], 12); 

  } else if (pantallaActual === 2) {
    mostrarFondo(1); 
    fill(255);
    rect(70, 25, 500, 50);
    fill(0);
    mostrarTexto(textos[1], 12); 
    
  } else if (pantallaActual === 3) {
    mostrarFondo(2); 
    fill(255);
    rect(70, 25, 500, 50);
    fill(0);
    mostrarTexto(textos[2], 12); 
    
    // Botón mantenerse apartado
    fill(0);
    rect(350, 285, 140, 60); 
    fill(255);
    textSize(15);
    text('Mantenerse \n apartado', 423, 310); 
    
    // Botón hacer contacto con otros conductores
    fill(0);
    rect(110, 285, 140, 60); 
    fill(255);
    textSize(15);
    text('Hacer contacto con \n otros conductores ', 180, 310); 


  } else if (pantallaActual === 4) {
    mostrarFondo(3);
    fill(255);
    rect(70, 40, 500, 100);
    fill(0);
    mostrarTexto(textos[3], 12); 

  } else if (pantallaActual === 5) {
    mostrarFondo(4); 
    fill(255);
    rect(70, 40, 500, 100);
    fill(0);
    mostrarTexto(textos[4], 15);

  } else if (pantallaActual === 6) {
    mostrarFondo(0);
    fill(0);
    rect(70, 40, 500, 50);
    fill(255);
    textSize(24);
    text('Créditos', width / 2, 75); 
    textSize(18);
   
    // Botón para volver a la pantalla de inicio
    fill(0);
    rect(220, 370, 200, 50); 
    fill(255);
    textSize(20);
    text('Volver al inicio', width / 2, 400); 

  } else if (pantallaActual === 7) {
    mostrarFondo(5); 
    fill(255);
    rect(70, 20, 500, 100);
    fill(0);
    mostrarTexto(textos[4], 12); 

    // Botón Cambiar de idea e integrase al grupo
    fill(0);
    rect(100, 200, 140, 40); 
    fill(255);
    textSize(15);
    text('Cambiar de idea \n e integrase al grupo', 170, 225); 

    // Botón Seguir aislado
    fill(0);
    rect(400, 200, 140, 40); 
    fill(255);
    textSize(15);
    text('Seguir aislado', 470, 225); 

  } else if (pantallaActual === 11) {  
    mostrarFondo(4); 
    fill(255);
    rect(70, 25, 500, 40);
    fill(0);
    mostrarTexto(textos[5], 8);

    // Botón para volver a la pantalla de inicio
    fill(0);
    rect(220, 370, 200, 50); 
    fill(255);
    textSize(20);
    text('Volver al inicio', width / 2, 400); 
  }
}

// función para mostrar texto
function mostrarTexto(texto, size) {
  textSize(size); 
  text(texto, 70, 30, 500); 
}

function mousePressed() {
  if (pantallaActual === 0) {
    // botón Inicio
    if (mouseX > 120 && mouseX < 240 && mouseY > 285 && mouseY < 335) {
      pantallaActual = 1; // Cambia a la pantalla uno
    }
    // botón Créditos
    else if (mouseX > 400 && mouseX < 520 && mouseY > 285 && mouseY < 335) {
      pantallaActual = 6; // Cambia a la pantalla de créditos
    }
  } else if (pantallaActual === 3) {
    //  botón Mantenerse apartado
    if (mouseX > 350 && mouseX < 490 && mouseY > 285 && mouseY < 345) {
      pantallaActual = 7; // Cambia a la pantalla Mantenerse apartado
    }
  } else if (pantallaActual === 6) {
    // botón Volver al inicio
    if (mouseX > 220 && mouseX < 420 && mouseY > 370 && mouseY < 420) {
      pantallaActual = 0; // Vuelve a la pantalla de inicio
    }
  } else if (pantallaActual === 7) {
    // botón Seguir aislado
    if (mouseX > 400 && mouseX < 540 && mouseY > 200 && mouseY < 240) {
      pantallaActual = 11; // Cambia a la nueva pantalla tras Seguir aislado
    }
  } else if (pantallaActual === 11) {
    // botón Volver al inicio
    if (mouseX > 220 && mouseX < 420 && mouseY > 370 && mouseY < 420) {
      pantallaActual = 0; // Vuelve a la pantalla de inicio
    }
  } else {
    // Para las pantallas sin botones, avanzar a la siguiente al hacer clic
    pantallaActual++;
  }
}

// Función para mostrar la imagen de fondo
function mostrarFondo(indice) {
  image(fondos[indice], 0, 0, width, height); // Dibuja la imagen de fondo ocupando toda la pantalla
}
