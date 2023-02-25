FROM node:16.17-alpine3.15
LABEL "Project"="Movies Streaming Website"
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install 
ENV PORT=3000
COPY . .
EXPOSE $PORT
ENTRYPOINT [ "yarn" ]
CMD ["run", "dev"]