FROM node:18 As build
WORKDIR /source


COPY package*.json ./
RUN npm install


COPY . .
RUN npm run build -o out

FROM node:18
WORKDIR /app
EXPOSE 3000
CMD ["npm","start"]