FROM node:12.14.0-stretch-slim

WORKDIR /src
COPY . .
RUN ls
RUN npm install
RUN npm run build
COPY ./src/configs ./dist/configs
ENTRYPOINT [ "node", "dist/bootstrapper.js" ]