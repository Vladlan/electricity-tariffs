FROM electricity-tariffs-base-img:nx-dev AS builder

ARG NODE_ENV=production
WORKDIR /app/builder
COPY . .
RUN npx nx build front

FROM nginx:1.23.4

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/builder/dist/apps/front ./
COPY --from=builder /app/builder/apps/front/nginx.conf /etc/nginx/nginx.conf
