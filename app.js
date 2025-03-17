// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = []; //declarando la lista de nombres
function limpiarCuadro() //Limpiando el cuadro donde se ingresan los nombres
    {
        let valorCuadro = document.querySelector('#amigo');
        valorCuadro.value = "";
    }
function actualizarLista() 
    {
        document.getElementById("listaAmigos").innerHTML = listaAmigos
        .map(amigo => `<li>${amigo}</li>`)
        .join("");
    }

function agregarAmigo() //Esta funcion recibe nombres y los almacena en la lista. Si no hay un nombre valido pone un alert de que se ingrese un nombre valido
    {
        let nombreAmigo = document.getElementById('amigo').value;
            if (nombreAmigo.trim()==="") //Esta linea rechaza los nombres vacios o compuestos solo por espacios 
                {alert("Se debe añadir un nombre valido");} 
            else {      
                listaAmigos.push(nombreAmigo);
                limpiarCuadro();
                actualizarLista();
            console.log(listaAmigos); }
    }
function sortearAmigo()
    {
        if (listaAmigos.length === 0) { // Validar que la lista no esté vacía
            alert("No hay amigos en la lista para sortear.");
            return;
        }
    
        // Seleccionar un índice aleatorio del array
        let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
        let amigoSorteado = listaAmigos[indiceAleatorio];
    
        // Mostrar el resultado en la página
        let resultadoHTML = document.getElementById("resultado");
        resultadoHTML.innerHTML = ""; // Limpiar el contenido actual del <ul>
        
        let li = document.createElement("li"); // Crear un elemento <li>
        li.textContent = `Amigo secreto: ${amigoSorteado}`;
        resultadoHTML.appendChild(li); // Agregar el <li> al <ul>
    }