ARG VERSION=latest
FROM node:${VERSION}
ARG PORT=3000
ENV PORT ${PORT}
ADD package*.json ./
RUN npm install
# Add whole App
ADD . .
RUN npm run build
EXPOSE ${PORT}
CMD npx serve -s build -l ${PORT}