# Stage 1: Installing Dependencies only when needed
FROM node:alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile


# Stage 2: Rebuild the source code only when needed
FROM node:alpine AS builder 
WORKDIR /app 
COPY . . 
COPY --from=deps /app/node_modules ./node_modules
RUN yarn build 


# Stage 3: Production image, copy all the files and run next
FROM node:alpine
WORKDIR /app 
LABEL "Project"="Movies Streaming Website"
ENV NODE_ENV production

# you only need to copy next.config.js if you are NOT using default configuration
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next 
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
RUN chown -R nextjs:nodejs /app/.next 
USER nextjs 

EXPOSE 3000
CMD ["yarn", "start"]