FROM node:10.16.3
WORKDIR /app
COPY package.json /app
RUN npm install
COPY src /app
EXPOSE 9000
CMD node index