# 💈 Barbería Premium - Backend

## 📖 Descripción

El backend de **Barbería Premium** fue desarrollado utilizando Node.js y Express con el objetivo de brindar una API REST segura, organizada y escalable para la gestión completa de la aplicación.

Su función principal es administrar la comunicación entre el frontend y la base de datos MongoDB Atlas, procesando todas las solicitudes relacionadas con usuarios, servicios y turnos.

La API permite realizar operaciones CRUD, gestionar la autenticación de usuarios y validar la información antes de almacenarla en la base de datos.

---

# 🎯 Objetivos

El backend fue desarrollado para:

- Centralizar toda la lógica del sistema.
- Gestionar la información almacenada en MongoDB.
- Validar los datos recibidos desde el frontend.
- Permitir la autenticación de usuarios.
- Administrar los turnos de la barbería.
- Gestionar los servicios ofrecidos.
- Responder correctamente mediante códigos HTTP.

---

# 🚀 Tecnologías utilizadas

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- bcrypt
- dotenv
- cors
- Nodemon

---

# 📂 Arquitectura del Proyecto

El proyecto sigue una arquitectura cliente-servidor.

El backend recibe solicitudes HTTP desde el frontend desarrollado en React, procesa la información mediante Express y utiliza Mongoose para interactuar con la base de datos MongoDB Atlas.

Cada petición es validada antes de ejecutarse y finalmente se devuelve una respuesta al cliente utilizando los códigos HTTP correspondientes.

---

# 🗄 Base de Datos

La aplicación utiliza **MongoDB Atlas** como base de datos en la nube.

Actualmente se administran las siguientes colecciones:

## Usuarios

Almacena:

- Nombre de usuario.
- Contraseña cifrada mediante bcrypt.
- Rol del usuario (Administrador o Cliente).

---

## Servicios

Cada servicio contiene información como:

- Nombre.
- Precio.
- Descripción.
- Duración.

Estos servicios son consumidos por el frontend para que el cliente pueda seleccionar el tratamiento deseado al reservar un turno.

---

## Turnos

Cada turno registra:

- Nombre del cliente.
- Número de teléfono.
- Servicio seleccionado.
- Barbero.
- Fecha.
- Hora.
- Estado del turno.

Además, el sistema controla que no existan horarios ocupados para evitar reservas duplicadas.

---

# 📡 API REST

La aplicación implementa una API REST que permite la comunicación entre el frontend y la base de datos.

---

## Autenticación

### POST /api/auth/register

Permite registrar nuevos usuarios.

---

### POST /api/auth/login

Permite iniciar sesión verificando la contraseña cifrada.

---

## Turnos

### GET /api/turnos

Obtiene todos los turnos registrados.

---

### POST /api/turnos

Crea un nuevo turno.

Antes de guardar la información se realizan distintas validaciones para evitar errores.

---

### PUT /api/turnos/:id

Actualiza un turno existente.

Permite modificar:

- Fecha
- Hora
- Servicio
- Estado
- Barbero

---

### DELETE /api/turnos/:id

Elimina un turno de la base de datos.

---

## Servicios

### GET /api/servicios

Obtiene todos los servicios.

---

### POST /api/servicios

Registra un nuevo servicio.

---

### PUT /api/servicios/:id

Actualiza un servicio existente.

---

### DELETE /api/servicios/:id

Elimina un servicio.

---

# 🔐 Seguridad

Para mejorar la seguridad del sistema se implementaron distintas medidas.

Entre ellas:

- Contraseñas cifradas utilizando bcrypt.
- Variables de entorno mediante dotenv.
- Validaciones de datos.
- Restricción de operaciones mediante roles.
- Respuestas HTTP apropiadas.

---

# ⚠️ Manejo de Errores

El backend responde utilizando códigos HTTP para informar correctamente el resultado de cada solicitud.

Entre ellos:

- 200 OK
- 201 Created
- 400 Bad Request
- 401 Unauthorized
- 404 Not Found
- 500 Internal Server Error

El Error 404 es enviado por el backend cuando una ruta no existe y posteriormente es consumido por el frontend para mostrar una página personalizada.

---

# 🔄 Flujo de Funcionamiento

Cliente

↓

Frontend (React)

↓

Axios

↓

API REST (Express)

↓

Controladores

↓

Modelos (Mongoose)

↓

MongoDB Atlas

↓

Respuesta HTTP

↓

Frontend

---

# ▶️ Instalación

Clonar el repositorio

```bash
git clone URL_DEL_BACKEND
```

Ingresar al proyecto

```bash
cd backend
```

Instalar dependencias

```bash
npm install
```

Crear un archivo

```env
.env
```

Agregar

```env
MONGO_URI=tu_uri_de_mongodb
PORT=3000
```

Ejecutar el servidor

```bash
npm run dev
```

---

# 📂 Organización del Proyecto

```
backend/

src/
│
├── controllers/
├── models/
├── routes/
├── middleware/
├── config/
│
index.js
package.json
```

---

# 🌱 Posibles Mejoras

El proyecto podrá ampliarse incorporando nuevas funcionalidades como:

- Recordatorios automáticos por correo electrónico.
- Sistema de notificaciones.
- Calendario interactivo.
- Estadísticas para administradores.
- Gestión completa de clientes.
- Historial de reservas.
- Integración con pagos online.

---

# 👨‍💻 Autor

**Mateo Rosas**

Proyecto desarrollado como trabajo final para **Rolling Code School**, aplicando una arquitectura Full Stack basada en React, Node.js, Express y MongoDB Atlas.

---

# 📌 Estado del Proyecto

🟢 Desarrollo avanzado.

Actualmente el backend implementa la mayor parte de las funcionalidades previstas, incluyendo autenticación, operaciones CRUD, validaciones, integración con MongoDB Atlas y manejo de errores HTTP.

Se encuentra preparado para su despliegue en producción y futuras mejoras.