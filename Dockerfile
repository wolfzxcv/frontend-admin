FROM node:14.15.4-alpine3.10

ENV APP_ROOT /app/

RUN mkdir -p ${APP_ROOT}
WORKDIR ${APP_ROOT}

COPY package*.json ${APP_ROOT}
RUN npm install

COPY . ${APP_ROOT}
RUN npm run build

CMD [ "npm", "start" ]