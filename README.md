# Gestión de Tareas y Usuarios en Next.js 13

## Descripción

Este proyecto es una aplicación de gestión de tareas desarrollada en Next.js 13 con TypeScript. Permite organizar tareas, visualizarlas en un calendario y gestionar usuarios. 

## Link al Video

Para ver una explicación detallada, consulta el video [Aca!](https://www.youtube.com/watch?v=-vZIzDHkR-g&feature=youtu.be&ab_channel=Mauro).

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