FROM node:10.16.3
WORKDIR /app
COPY package.json /app
RUN npm install
COPY src /app/src
COPY webpack.config.js /app
EXPOSE 8000
CMD npm start