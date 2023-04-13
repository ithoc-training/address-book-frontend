# Layer 1
FROM node:18.14 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --omit=dev

# Layer 2
FROM nginx:alpine
COPY --from=node /app/dist/address-book-frontend /usr/share/nginx/html

