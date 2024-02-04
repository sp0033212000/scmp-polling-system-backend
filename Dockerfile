FROM node:18.19.0-alpine AS builder
WORKDIR /usr/src/app
RUN apk add --update --no-cache \
    make \
    g++ \
    jpeg-dev \
    cairo-dev \
    giflib-dev \
    pango-dev \
    libtool \
    autoconf \
    automake
COPY package*.json ./
COPY prisma ./prisma/
RUN yarn
RUN yarn add global ts-node
RUN npx prisma generate
COPY . ./
RUN yarn run env:prod
RUN yarn run build
CMD [ "sh", "-c", "yarn run start"]
