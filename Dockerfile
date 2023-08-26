FROM node:20.5.1 AS builder

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
COPY prisma ./prisma/

RUN npm install
RUN npx prisma generate

COPY . .
RUN npm run build

FROM node:20.5.1

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/tsconfig.json ./
COPY --from=builder /app/.env.local ./

EXPOSE 8080
CMD [ "npm", "run", "start:migrate:prod" ]

#docker build -t marketplace-api .