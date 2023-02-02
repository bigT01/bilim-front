FROM node:alpine
WORKDIR './app'
COPY . .

COPY package.json .
RUN npm install
RUN npm run build

#FROM nginx:1.22.1-alpine


CMD ["npm", "start"]