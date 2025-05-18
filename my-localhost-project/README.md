# My Localhost Project

Este proyecto es una aplicación web simple que incluye un mensaje de bienvenida, un formulario de contacto y una lista dinámica. A continuación se detallan las características y cómo configurar el proyecto.

## Estructura del Proyecto

```
my-localhost-project
├── public
│   ├── index.html        # Documento HTML principal
│   └── styles.css       # Estilos para la aplicación
├── src
│   ├── app.js           # Archivo JavaScript principal
│   └── components
│       ├── contactForm.js  # Componente del formulario de contacto
│       ├── dynamicList.js   # Componente de la lista dinámica
│       └── welcomeMessage.js # Componente del mensaje de bienvenida
├── package.json          # Configuración de npm
└── README.md             # Documentación del proyecto
```

## Instalación

1. Clona el repositorio en tu máquina local:
   ```
   git clone <URL_DEL_REPOSITORIO>
   ```

2. Navega al directorio del proyecto:
   ```
   cd my-localhost-project
   ```

3. Instala las dependencias:
   ```
   npm install
   ```

## Uso

1. Inicia el servidor local:
   ```
   npm start
   ```

2. Abre tu navegador y ve a `http://localhost:3000` para ver la aplicación en acción.

## Características

- **Mensaje de Bienvenida**: Un mensaje de bienvenida que incluye un botón que muestra un mensaje de agradecimiento al hacer clic.
- **Formulario de Contacto**: Un formulario que permite a los usuarios enviar su nombre, correo electrónico y un mensaje. Incluye validaciones y muestra una alerta al enviar.
- **Lista Dinámica**: Permite a los usuarios agregar y eliminar elementos de una lista.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.