FROM node:17-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY ../../../muueit/frontend  .

EXPOSE 3000

CMD ["npm", "start"]