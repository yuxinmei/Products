
FROM node:12.18.1
ENV NODE_ENV=dev

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install 
COPY . .

EXPOSE 3001
CMD [ "node", "app.js" ]