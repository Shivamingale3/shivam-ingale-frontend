# syntax=docker/dockerfile:1
# build environment
FROM node:16 as build
WORKDIR /app
COPY package*.json .
COPY . .

RUN npm install --force
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
