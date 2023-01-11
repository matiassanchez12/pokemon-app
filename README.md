Este es el resultado del Ejercicio para postulados Ixpandit.

Primero voy a mencionar las tecnologías utilizadas, luego explicaré la forma de hacer funcionar la aplicación de forma local y por último explicaré sobre como ejecutar los test automaticos.

Las tecnologías utilzadas son: React.js con Typescript y Css3 para el frontend y Express con Typescript para el backend. Para ambos lados, hice uso de la libreria Axios para poder hacer peticiones a las api.

Para comenzar a utilizar la app, es necesario:

1- Descargar las modulos para el lado del backend y del frontend. Para esto hay que posicionarse desde una consola de comandos en la carpeta "client" y luego ejecutar el comando yarn install. Para la parte del backend en necesario posicionarse en la carpeta base del proyecto "ejercicio-lxpandit" y luego ejecutar el comando npm install.

2- Una vez instalados los modulos de los dos lados de la app, es necesario iniciar los servidores. Por lo tanto, desde la carpeta base del proyecto, correr el siguiente comando: npm run start

3- El ultimo paso es ingresar desde el navegador web a la url que devuelve la consola cuando ejecutamos el comando npm run start (en mi caso, lo que devuelve el comando aparece de la siguiente forma **"Local: http://127.0.0.1:5173/"**)


**Parte de los Test automaticos**

Los test automaticos fueron realizados en la parte del backend con las librerias de javascript Jest y Supertest.
Para correr los test es necesario ir desde la consola a la carpeta base del proyecto y luego ejecutar el comando "npm run test".
