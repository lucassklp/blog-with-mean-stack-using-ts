FROM node:12.14.0-stretch-slim

COPY /src .
RUN npm install
RUN npm run build
ENTRYPOINT [ "node", "dist/bootstrap.js" ]