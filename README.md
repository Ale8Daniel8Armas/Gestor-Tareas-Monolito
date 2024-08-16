# Gestión de Tareas y Usuarios en Next.js 13

## Descripción

Este proyecto es una aplicación de gestión de tareas desarrollada en Next.js 13 con TypeScript. Permite organizar tareas, visualizarlas en un calendario y gestionar usuarios. 

## Preparando el Proyecto

1. Instala las dependencias:
   ```bash
   npm install
   ```
2. Inicia el proyecto:
   ```bash
   npm run dev
   ```
   Accede a la aplicación en [http://localhost:3000](http://localhost:3000).

## Tecnologías Implementadas
   Next.js: Framework de React para aplicaciones web.
   React: Biblioteca de JavaScript para construir interfaces de usuario.
   TypeScript: Lenguaje de programación que añade tipos estáticos opcionales a JavaScript.
   Tailwind CSS: Framework de CSS para diseño rápido y estilización.
   FullCalendar: Biblioteca para crear y gestionar calendarios en la aplicación.
   MongoDB: Base de datos NoSQL utilizada para almacenar usuarios y tareas.
   Mongoose: ODM para MongoDB, utilizado para interactuar con la base de datos.
   Node.js: Entorno de ejecución de JavaScript en el backend.
   API REST: Se implementaron endpoints para la autenticación de usuarios y la gestión de tareas.
   Auth0 Authentificator: Utilizado para la autenticación de usuarios.

## Endpoints Disponibles

- **Iniciar Sesión**: `/api/auth/login`
- **Crear Cuenta**: `/api/auth/register`
- **Enviar Correo para Cambiar Contraseña**: `/api/auth/forget-password`
- **Cambiar Contraseña**: `/api/auth/change-password?token=12345`
- **Obtener Usuarios**: `/api/users`
- **Obtener Tareas**: `/api/tareas`

## Funcionalidades Implementadas

### Gestión de Tareas

- Visualización de tareas en tarjetas con detalles.
- Formulario para crear nuevas tareas.
- Integración con un calendario para visualizar tareas.

### Gestión de Usuarios

- Tabla de usuarios con ID, correo electrónico y fecha de creación.
- Estilización de la tabla con colores alternados para filas y un diseño claro.

### Estilización y Personalización

#### Calendario

- Encabezados de días y botón de hoy con colores personalizados.
- Día actual resaltado en amarillo.
- Selección de fechas destacada en azul.

#### Tabla de Usuarios

- Encabezados con fondo blanco y texto oscuro.
- Filas alternando entre blanco y gris claro para mejor legibilidad.

## Implementación de FullCalendar

La biblioteca FullCalendar se usa para la gestión del calendario. Instala las dependencias necesarias y configura el componente `Calendar.tsx` para integrarlo en la página principal con el estilo adecuado.

---

Este README cubre la instalación, la configuración del proyecto, los endpoints disponibles y una visión general de las funcionalidades implementadas y su estilización.
```
