# Layer 1
FROM node:18.14 as node
WORKDIR /app

# Copy all relevant files except node_modules
COPY src .
COPY angular.json .
COPY Dockerfile .
COPY nginx.proxy.prod.conf .
COPY package.json .
COPY package-lock.json .
COPY tsconfig.app.json .
COPY tsconfig.json .
COPY tsconfig.spec.json .

RUN npm install
RUN npm run build --omit=dev
RUN ls -al

# Layer 2
FROM nginx:alpine
COPY nginx.proxy.prod.conf /etc/nginx/conf.d/default.conf
COPY --from=node /app/dist/address-book-frontend /usr/share/nginx/html

