Este es el resultado del Ejercicio para postulados Ixpandit.

Primero voy a mencionar las tecnologías utilizadas y luego explicaré la forma de hacer funcionar la aplicación en servidores locales.

Las tecnologías utilzadas son: React.js para el frontend y Express para el backend. Para ambos lados, utilicé la libreria Axios para poder hacer peticiones a las api.

Para comenzar a utilizar la app, es necesario:

1- Descargar las modulos necesarios, para el lado del backend y del frontend. Para esto hay que posicionarse desde una consola de comandos en la carpeta frontend-pokemon y luego ejecutar el comando yarn install. Repetir el mismo procedimiento para la carpeta backend-pokemon.

2- Una vez instalados los modulos de los dos lados de la app, es necesario iniciar los servidores. Por lo tanto, desde la carpeta frontend-pokemon se debe ejecutar el comando yarn dev. Esto creara un servidor local en modo de desarrollo. Para el caso del backend, hay que ir a la carpeta backend-pokemon y ejecutar el comando node app.js.

3- El ultimo paso es ingresar desde el navegador web a la url que devuelve la consola al escribir el comando yarn dev en la parte frontend del proyecto y de esta forma se visualizará la interfaz.
