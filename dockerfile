FROM node:22-alpine

WORKDIR /front-end/

COPY . .

RUN npm install

# RUN npm run build
EXPOSE 5173

CMD ["npm", "run", "dev"]