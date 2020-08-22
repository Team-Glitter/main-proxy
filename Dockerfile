FROM node:10.22-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install --only=prod

EXPOSE 3000

CMD ["npm", "start"]