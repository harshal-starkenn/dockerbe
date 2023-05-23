
FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 9001

CMD ["npm","start"]


# docker run -p 3000:3000 -e DB_HOST=your_host -e DB_USER=your_user -e DB_PASSWORD=your_password -d your-image-name