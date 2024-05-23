# We are using node's image as base for this one
FROM node:21-alpine as builder

# Create the app directory
WORKDIR /usr/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm ci
COPY . .
RUN npm run build

from node:21-slim

ENV NODE_ENV production
USER node

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm ci --omit=dev
COPY --from=builder /usr/app/dist ./dist

EXPOSE 8080

CMD [ "node", "dist/src/server.js" ]