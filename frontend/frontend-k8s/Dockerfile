# Stage 1: Build the React application
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build

# Stage 2: Create a lightweight final image with Nginx
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
# Copy the built React app from the builder stage
COPY --from=builder /app/build .
# Copy the new NGINX configuration
COPY public/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
