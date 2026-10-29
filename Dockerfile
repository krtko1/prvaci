FROM alpine:latest AS builder

RUN apk add --no-cache hugo git

WORKDIR /src
COPY . .

RUN hugo --minify --cleanDestinationDir

FROM caddy:2-alpine

COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=builder /src/public/ /usr/share/caddy/

EXPOSE 80
