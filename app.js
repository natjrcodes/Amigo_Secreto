let amigos = [];

/**
 * Función para agregar un amigo a la lista.
 */
function agregarAmigo() {
    let ingresarNombre = document.getElementById('nombre');
    let nombreDeAmigo = ingresarNombre.value.trim();
    
    if (!nombreDeAmigo) {
        alert("Por favor, ingrese un nombre.");
        return;
    }
    if (amigos.length >= 10) {
        alert("No puedes agregar más de 10 participantes.");
        return;
    }
    
    amigos.push(nombreDeAmigo);
    ingresarNombre.value = '';
    ingresarNombre.focus();
    mostrarAmigos();
}

function mostrarAmigos() {
    let listaDeAmigos = document.getElementById('lista');
    listaDeAmigos.innerHTML = "";

    amigos.forEach((amigo, index) => {
        let itemLista = document.createElement("li");
        itemLista.textContent = amigo;

        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "❌";
        botonEliminar.classList.add("btn-delete");
        botonEliminar.onclick = function () {
            eliminarAmigo(index);
        };

        itemLista.appendChild(botonEliminar);
        listaDeAmigos.appendChild(itemLista);
    });
}

function eliminarAmigo(index) {
    amigos.splice(index, 1);
    mostrarAmigos();
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }
    
    let indice = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos.splice(indice, 1)[0];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `🎉 El amigo sorteado es: <strong>${amigoSorteado}</strong>`;
    mostrarAmigos();

    if (amigos.length === 0) {
        setTimeout(() => {
            alert("Ya se sortearon todos los amigos de la lista");
        }, 600);
    }
}