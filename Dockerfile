FROM node:14.11.0-alpine3.11
WORKDIR /app/
COPY ./package*.json ./
RUN npm install
COPY ./src/ ./src/
EXPOSE 3001
ENTRYPOINT [ "npm"]
CMD [ "start" ]
