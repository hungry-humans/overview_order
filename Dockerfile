# FROM         ubuntu:16.04

FROM node:8.10-alpine

run apk add --no-cache nodejs

RUN mkdir -p /src/overview

WORKDIR /src/overview

COPY . /src/overview

RUN apk update

RUN apk upgrade

# development
RUN apk add --no-cache git
RUN apk add --no-cache curl
RUN apk add --no-cache bash

##development-notworking
# RUN apk add --no-cache yarn
# RUN yarn install
# RUN yarn add nodemon

RUN npm set progress=false
RUN npm config set depth 0
RUN npm install --silent

##seeding-notworking
# RUN npm run dbSetup
# RUN node database/seed.js

EXPOSE 3001

CMD npm start