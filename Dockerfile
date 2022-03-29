FROM node:14.17.1 as node
WORKDIR /app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"] /app
RUN npm install --silent
COPY . .
RUN npm run build

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=node app/dist/carguero /usr/share/nginx/html
COPY ./config/nginx.conf /etc/ngix/conf.d/default.conf

# docker build -t carguero .
# docker run -p 8081:80 carguero
