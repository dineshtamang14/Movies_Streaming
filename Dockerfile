FROM node:16.17-alpine3.15 AS builder 
WORKDIR /app 
COPY package.json yarn.lock ./
COPY . . 
RUN yarn install
RUN yarn build 


FROM node:16.17-alpine3.15
WORKDIR /app 
COPY --from=builder /app/package.json .
COPY --from=builder /app/yarn.lock .

RUN yarn --production
COPY --from=builder /app/next.config.js .
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next 

CMD ["yarn", "start"]
EXPOSE 3000
