Hola a quién este leyendo esto.

El challenge del amigo secreto de alura consta en una pagina donde vamos añadiendo nombres y el programa selecciona un nombre al azar para devolverlo al usuario.
1.- Cada tipeamos un nombre este se almacena en el array [listaAmigos], esto ocurre cada que damos click al botón "añadir"
 y podemos comprobar en la consola el estado de la lista. También al dar click a añadir se limpia la caja donde tecleamos los nombres
2.- Si ingresamos no escribimos datos o solo usamos espacios el programa nos devolvera un alert para añadir un nombre valido
3.- cada nombre añadido se muestra en una lista en la misma pagina
4.- Al dar click al botón "sortear Amigo" nos devolvera el nombre al azar de uno de los que escribimos
5.- Cada que damos click a "sortear Amigo" nos devovlera un nuevo nombre

En este readme también voy a explicar la funcion "actualizarLista()" que a mi juicio personal fue la mas complicada pues fue la que me requirio "salir"
del entorno de allura a investigar documentaciones. Esta funcion es la encargada de que cada vez que damos al botón "Añadir" va mostrando los nombres en la página

function actualizarLista() 
    {
        document.getElementById("listaAmigos").innerHTML = listaAmigos
        .map(amigo => `<li>${amigo}</li>`)
        .join("");
    }


[listaAmigos] es el array que contiene todos los nombres ingresados por el usuario.

La función .map() toma este array, lo recorre y va aplicando una transformación a cada elemento (en este caso cada nombre en listaAmigos).

La transformación que se aplica es la creación de un string que representa un elemento HTML <li> con el nombre del amigo: <li>${amigo}</li>.

Por ejemplo, si listaAmigos contiene ["Ana", "Luis", "María"], .map() devolvería un nuevo array con los elementos:
["<li>Ana</li>", "<li>Luis</li>", "<li>María</li>"]
