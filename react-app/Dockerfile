FROM node:8
RUN npm run build

WORKDIR /app
ADD . /app

EXPOSE 3000
EXPOSE 35729

CMD ["start"]