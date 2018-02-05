FROM node:8-alpine

WORKDIR /src

# The official image has verbose logging; change it to npm's default
ENV NPM_CONFIG_LOGLEVEL notice

# Add PM2, for Node process management
RUN npm i -g pm2

# Add packages
ENV PACKAGES="libpng-dev"
RUN apk add --no-cache $PACKAGES

# Add NPM package config
ADD package*.json ./

# Add temporary packages, and build the NPM packages/binaries
ENV EPHEMERAL_PACKAGES="autoconf automake g++ libtool make nasm python git"
RUN apk add --no-cache --virtual .tmp $EPHEMERAL_PACKAGES \
  && npm i \
  && apk del .tmp

# Add the remaining project files
ADD . .

# Set the default host/port
ENV HOST 45.55.26.145
ENV PORT 4000

# Build distribution
RUN npm run build

# Start the server by default
CMD pm2-docker start dist/server.js -i max
