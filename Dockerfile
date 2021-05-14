FROM node:latest
ADD package*.json ./
RUN npm install
# Add whole App
ADD . .
RUN npm run build
EXPOSE 3000
CMD npx serve -s build -l 3000