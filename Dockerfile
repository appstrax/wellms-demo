FROM node:20-buster AS base

ARG APP_VERSION="1.0.0"
WORKDIR /home/node/app
COPY / /home/node/app
RUN yarn install --network-timeout 1000000000  && yarn run build && cp dist/index.html dist/tpl.html
RUN echo $APP_VERSION >> dist/version.html

FROM httpd:latest AS httpd

COPY entrypoint.sh /usr/local/bin/httpd-foreground
COPY --from=base /home/node/app/dist /usr/local/apache2/htdocs/
