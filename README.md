# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

While this project uses React, Vite supports many popular JS frameworks. [See all the supported frameworks](https://vitejs.dev/guide/#scaffolding-your-first-vite-project).

## Deploy Your Own

Deploy your own Vite project with Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/vercel/tree/main/examples/vite-react&template=vite-react)

_Live Example: https://vite-react-example.vercel.app_

### Deploying From Your Terminal

You can deploy your new Vite project with a single command from your terminal using [Vercel CLI](https://vercel.com/download):

```shell
$ vercel
```

# 🚀 Proyecto Frontend

Este proyecto está estructurado de manera **modular**, organizando la lógica en `features`, `shared`, `layouts` y `styles`. A continuación, se explican los aspectos técnicos clave relacionados con **Providers**, **Layouts** y **Estilos**.

---

## 📂 **Shared Providers**

Los **Providers** en React son esenciales para gestionar estados globales y compartir datos entre componentes sin necesidad de pasar props manualmente en múltiples niveles. 🌐

### 🔹 Estructura de los Providers

Cada Provider encapsula un contexto específico y se implementa como un componente de orden superior (`HOC - Higher Order Components`) para envolver la aplicación o secciones específicas.

- **FetchProvider.tsx**  
  Maneja las peticiones HTTP centralizadas. Usa `React.createContext()` para compartir el estado de carga (`loading`), errores (`error`) y datos (`data`) con los componentes que lo consuman. 🔄

- **ModalProvider.tsx**  
  Controla la apertura y cierre de modales en la aplicación, evitando la gestión de estados locales dispersos. 🚪

- **SnackbarProvider.tsx**  
  Administra notificaciones emergentes tipo "snackbar" para mostrar alertas de éxito, error o advertencias. ⚠️

- **TitleProvider.tsx**  
  Permite modificar dinámicamente los títulos de las vistas según la navegación. 📌

- **GlobalProviders.tsx**  
  Unifica todos los Providers en un solo punto para simplificar su uso en `App.tsx`.

---

## 📂 **Shared Layouts**

Los **Layouts** en React ayudan a estructurar las páginas de la aplicación, evitando la repetición de código y proporcionando un diseño coherente. 🏗️

### 🔹 Estructura de los Layouts

Los layouts encapsulan la estructura principal de cada tipo de usuario o vista.

- **AdminLayout.tsx**  
  Diseñado para la sección administrativa.

- **ClientLayout.tsx**  
  Layout para la vista de clientes, con un diseño más simple y enfocado en la navegación general. 👤

- **MainLayout.tsx**  
  Diseño base común a todas las páginas, ideal para aplicar configuraciones globales. 🌍

- **PlainLayout.tsx**  
  Un layout sin estructura compleja, útil para pantallas de login o error. 🔒

Cada layout se usa envolviendo las páginas en `App.tsx` o en el enrutador.

---

## 🎨 **Styles**

El sistema de estilos utiliza **SCSS** para manejar variables, mixins y estilos globales. ✨

### 🔹 Archivos de Estilos

- **\_bootstrap.scss**  
  Importa configuraciones de Bootstrap para estandarizar el diseño.

- **\_globals.scss**  
  Define estilos generales como fuentes, colores y espaciados.

- **\_mixins.scss**  
  Contiene funciones reutilizables como media queries.

- **\_variables.scss**  
  Define colores y tamaños globales.
