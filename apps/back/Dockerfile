FROM electricity-tariffs-base-img:nx-dev AS builder

ARG NODE_ENV=production
ARG PORT=3333
ARG ELECTRICITY_TARIFFS_API=""

WORKDIR /app/builder
EXPOSE ${PORT}

COPY . .

RUN npx nx build back

FROM electricity-tariffs-base-img:nx-dev

WORKDIR /app
COPY --from=builder /app/builder ./


ENV NODE_ENV=$NODE_ENV
ENV PORT=${PORT}


CMD ["node", "./dist/apps/back/main.js"]
