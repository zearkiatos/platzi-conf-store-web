FROM node:15-alpine

RUN apk update && apk add python make g++
RUN apk add --update nodejs npm

WORKDIR /app

COPY . ./

RUN npm install -g webpack
RUN npm install

EXPOSE 3000

ENTRYPOINT ["sh", "./docker/entrypoint.sh"]