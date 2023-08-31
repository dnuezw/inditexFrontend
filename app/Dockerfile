FROM node:20-alpine

USER node
WORKDIR /app

COPY --chown=node:node package*.json .
RUN npm ci && npm cache clean --force

COPY --chown=node:node . .

CMD npm run dev