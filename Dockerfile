# Etapa 1: build de la app
FROM node:22 AS build

# Crear directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json primero (mejor cacheo)
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Compilar el proyecto para producción
RUN npm run build

# Etapa 2: servir archivos estáticos con nginx
FROM nginx:alpine

# Copiar el build al directorio html de nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copiar un archivo de configuración de nginx opcional
# (sirve para que el router de React funcione con rutas)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
