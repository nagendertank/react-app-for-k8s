FROM node:10.16.0

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY . .

RUN npm install --verbose

RUN npm run build

EXPOSE 3000
EXPOSE 35729

CMD ["start"]