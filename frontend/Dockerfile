FROM node:10.16.3 as build

ARG ENDPOINT_ARG
ENV ENDPOINT=$ENDPOINT_ARG

WORKDIR /app
COPY package.json /app/package.json
RUN npm install --silent

COPY src /app/src
COPY webpack.config.prod.js /app
RUN npm run build

# production environment
FROM nginx:1.16.0-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]