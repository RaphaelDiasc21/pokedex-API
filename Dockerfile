FROM node:latest

WORKDIR /app

COPY package.json /app
COPY tsconfig.json /app
RUN npm install

COPY . .

CMD ["npm","start"]
