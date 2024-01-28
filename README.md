# OrderFlow - Sistema de Pedidos en Línea

## Descripción del Proyecto

OrderFlow es un sistema de gestión de pedidos en línea que utiliza microservicios con Node.js y Express. La comunicación entre los microservicios se realiza a través de RabbitMQ. Dos bases de datos, MongoDB y MySQL, son utilizadas por microservicios específicos para gestionar la persistencia de datos.

## Microservicios

### 1. Microservicio de Gestión de Pedidos

- Funciones: Recepción de pedidos, validación de disponibilidad de productos, gestión de estados de pedidos.
- Comunicación: Produce y consume mensajes en la cola RabbitMQ.

### 2. Microservicio de Inventario

- Funciones: Gestión de inventario, actualización del inventario al recibir notificaciones de pedidos.
- Comunicación: Consume y produce mensajes en la cola RabbitMQ.

### 3. Microservicio de Envío

- Funciones: Coordinación de logística de envío, asignación de pedidos a servicios de envío, actualización de estados de envío.
- Comunicación: Consume y produce mensajes en la cola RabbitMQ.

### 4. Microservicio de Notificaciones

- Funciones: Envío de notificaciones a clientes sobre estados de pedidos y envíos, gestión de preferencias de notificación.
- Comunicación: Consume y produce mensajes en la cola RabbitMQ.

## Configuración

### Requisitos Previos

- Node.js (v14 o superior)
- RabbitMQ (servidor y configuración)
- MongoDB (para Microservicio de Inventario)
- MySQL (para Microservicio de Envío)

### Instalación

1. Clona el repositorio: `git clone https://github.com/tu-usuario/order-flow.git`
2. Configura las propiedades de cada microservicio en sus respectivos archivos de configuración.
3. Instala las dependencias: `npm install`
4. Inicia cada microservicio: `npm start`
5. Asegúrate de que RabbitMQ, MongoDB y MySQL estén en ejecución y configurados correctamente.

## Uso

1. Accede a la documentación del API proporcionada por el Gateway.
2. Realiza solicitudes a través del Gateway API.
3. Monitorea la cola RabbitMQ para mantener la coherencia entre microservicios.

## Contribuciones

¡Las contribuciones son bienvenidas! Si encuentras problemas o mejoras posibles, por favor, abre un problema o envía una solicitud de extracción.

## Licencia

Este proyecto está licenciado bajo la [Licencia MIT](LICENSE).
