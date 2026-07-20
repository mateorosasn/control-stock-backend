# Backend - Barbería 💈

## Descripción del proyecto

Este proyecto corresponde al backend de una aplicación web para la gestión de una barbería.

El objetivo principal del sistema es permitir la administración de turnos, servicios y usuarios, brindando una conexión entre la aplicación frontend y una base de datos para almacenar la información de manera organizada y segura.

El backend fue desarrollado para manejar la lógica del negocio, controlar las solicitudes realizadas por los usuarios y administrar la información almacenada.

---

## Tecnologías utilizadas

Para el desarrollo del backend se utilizaron las siguientes tecnologías:

- Node.js: entorno de ejecución utilizado para desarrollar la aplicación del servidor.

- Express.js: framework utilizado para la creación de rutas, manejo de solicitudes y respuestas del servidor.

- MongoDB: base de datos utilizada para almacenar usuarios, servicios y turnos.

- Mongoose: herramienta utilizada para conectar la aplicación con MongoDB y trabajar con modelos de datos.

- JavaScript: lenguaje utilizado para desarrollar toda la lógica del backend.

- Dotenv: utilizado para manejar variables de configuración del proyecto.

- Bcrypt: utilizado para proteger las contraseñas de los usuarios mediante encriptación.

---

## Funcionalidades principales

El backend permite realizar las siguientes acciones:

### Gestión de usuarios

El sistema cuenta con un módulo de autenticación de usuarios que permite:

- Registrar nuevos usuarios.
- Validar que los campos obligatorios estén completos.
- Controlar que los correos electrónicos tengan un formato válido.
- Validar la longitud mínima de las contraseñas.
- Evitar registros duplicados.
- Encriptar las contraseñas antes de almacenarlas.
- Permitir el inicio de sesión mediante correo y contraseña.

---

### Gestión de turnos

El sistema permite administrar los turnos de la barbería.

Las funcionalidades implementadas son:

- Crear nuevos turnos.
- Obtener todos los turnos registrados.
- Actualizar información de un turno.
- Eliminar turnos.

Además cuenta con validaciones para mejorar el funcionamiento:

- Verificación de campos obligatorios.
- Validación del número de teléfono.
- Control de fechas anteriores.
- Control de disponibilidad de horarios.
- Evitar que un mismo barbero tenga dos turnos en la misma fecha y horario.
- Manejo del estado del turno, pudiendo diferenciar turnos pendientes y confirmados.

---

### Gestión de servicios

El backend también administra los servicios ofrecidos por la barbería.

Permite:

- Crear servicios.
- Mostrar servicios disponibles.
- Actualizar servicios existentes.
- Eliminar servicios.

Los servicios se almacenan en la base de datos y son utilizados al momento de reservar un turno.

---

## Organización del proyecto

La estructura del backend se encuentra organizada separando responsabilidades:

- Models: contiene los modelos utilizados para representar los datos de usuarios, servicios y turnos.

- Controllers: contiene la lógica necesaria para procesar las solicitudes y respuestas.

- Routes: contiene las rutas encargadas de conectar las peticiones con los controladores correspondientes.

- Configuración principal: contiene la conexión con la base de datos y la configuración general del servidor.

---

## Seguridad

Para mejorar la seguridad del sistema se implementaron diferentes medidas:

- Encriptación de contraseñas mediante Bcrypt.
- Validación de datos recibidos desde el cliente.
- Manejo de errores mediante respuestas controladas.
- Separación de lógica entre rutas, controladores y modelos.

---

## Base de datos

La aplicación utiliza MongoDB como sistema de almacenamiento.

Dentro de la base de datos se encuentran diferentes colecciones:

- Usuarios: almacena la información de las cuentas creadas.

- Servicios: contiene los servicios disponibles de la barbería.

- Turnos: guarda las reservas realizadas por los clientes.

La comunicación con la base de datos se realiza utilizando Mongoose.

---

## Manejo de errores

El backend cuenta con controles para responder correctamente ante diferentes situaciones:

- Datos incompletos.
- Usuarios existentes.
- Credenciales incorrectas.
- Horarios ocupados.
- Rutas inexistentes.
- Errores internos del servidor.

También posee una respuesta personalizada para rutas no encontradas.

---

## Objetivo del backend

El objetivo principal del backend es proporcionar una estructura organizada y segura que permita gestionar el funcionamiento interno de la aplicación de barbería.

Se encarga de administrar la información, procesar las solicitudes del frontend y garantizar que los datos sean almacenados correctamente.

---

## Estado del proyecto

Backend finalizado y funcional.

Cuenta con conexión a base de datos, autenticación de usuarios, gestión de turnos, gestión de servicios, validaciones y manejo de errores.