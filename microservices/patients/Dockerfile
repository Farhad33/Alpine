FROM node

WORKDIR /Alpine/import-patients/src

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "start"]