FROM node:lts

WORKDIR /app
COPY . /app

EXPOSE 3000

RUN yarn install --frozen-lockfile && \
    yarn build

CMD ["yarn", "start"];
