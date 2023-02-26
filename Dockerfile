# Stage 1: Build the Next.js application
FROM node:16.17-alpine3.15 AS build
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install 
COPY . .
RUN yarn run  build


# Stage 2: Serve the Next.js application using Nginx
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
LABEL "Project"="Movies Streaming Website"
COPY --from=build /app/.next /usr/share/nginx/html
ENV PORT=80
EXPOSE $PORT
ENTRYPOINT [ "nginx" ]
CMD ["-g", "daemon off;"]