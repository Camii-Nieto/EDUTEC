# EDUTEC - Electricista matriculado/ Materiales eléctricos

## Stack
El proyecto está armado con NodeJS por lo cuál corre en un entorno de NGINX.

Se compone por:

 - Armado web en servidor (SSR)
 - REST API

**Keywords**: NodeJS, EJS, API, MongoDB, Heroku

## Levantar el proyecto
Para levantar el proyecto local:

 1. Descarga del repo
 2. Instalar módulos en el **/website** y en la **/api**

    *npm i* 

Para que funcione el sitio es necesario primero levantar el servicio en **/api**.

#### Levantar API

 1. Levantar una instancia local de MongoDB que exponga el puerto 27017. 
 2. Crear una base llamada **edutec** en MongoDB
 3. Levantar el servicio con el comando `node index.js` dentro de **api/src**. Opcionalmente se puede usar `nodemon index.js` si se va a trabajar sobre la API

#### Levantar Website

Una vez corriendo el servicio, levantar el proyecto **website** con los comandos `node app.js` o `nodemon app.js` en la carpeta **/website**

#### Parte Front End

La página está armada 100% con Bootstrap.

#### Parte Back End 

La página está realizada con SSR y un motor de templetes EJS

### Patre API

La api consta de dos colecciones, una consta de productos y la otra de servicios

#### Algunas especificaciones de la página

Ya que la página se divide en dos servicios diferentes (Servicio de electricista matriculado y Venta de materiales) se utilizo en el proyecto las iniciales de cada uno para diferenciar los partials que correspondian a cada archivo EJS.

La página se conecta a dos colecciones proporcionadas por la base de datos, una consta de productos, destinada a generar cards, y la otra de servicios que se utiliza en este momento solo para la zona de selección de servicios, pero también se puede ingresar una imagen y una descripción del servicio, esto es para que en un futuro se generen archivos dinámicos para exhibir los servicios más a detalle.

Por ultimo cabe mencionar que el proyecto se conecta a 4 archivos JSON que proporcionan las imágenes de los carruseles, las categorías de la parte de productos y la información para armar la pagina de inicio.  
