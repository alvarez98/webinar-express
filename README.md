# WEBINAR ADC

## Conceptos

### Node

Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor (pero no limitándose a ello) basado en el lenguaje de programación ECMAScript, asíncrono, con E/S de datos en una arquitectura orientada a eventos y basado en el motor V8 de Google. Fue creado con el enfoque de ser útil en la creación de programas de red altamente escalables, como por ejemplo, servidores web. Fue creado por Ryan Dahl en 2009 y su evolución está apadrinada por la empresa Joyent, que además tiene contratado a Dahl en plantilla.

### API REST

REST (Representational State Transfer)

Un servicio REST no es una arquitectura software, sino un conjunto de restricciones con las que podemos crear un estilo de arquitectura software, la cual podremos usar para crear aplicaciones web respetando HTTP.

Diseños fundamentales clave: 

- Un protocolo cliente/servidor
- Un conjunto de operaciones bien definidas(métodos HTTP: POST, GET, PUT y DELETE)
- Una sintaxis universal para identificar los recursos. En un sistema REST, cada recurso es direccionable únicamente a través de su URI(endpoint)

### Express

Express es una infraestructura de aplicaciones web Node.js mínima y flexible que proporciona un conjunto sólido de características para las aplicaciones web y móviles.

Con miles de métodos de programa de utilidad HTTP y middleware a su disposición, la creación de una API sólida es rápida y sencilla.
Express proporciona una delgada capa de características de aplicación web básicas, que no ocultan las características de Node.js que tanto ama y conoce.



## Instalacion

Iniciamos un proyecto en Node.js

```sh
npm init --yes
```

Instalamos express como una dependencia del proyecto

```sh
npm install express -S
```

## Otros paquetes

```sh
sudo npm i dotenv -S
sudo npm i nodemon -D
```
