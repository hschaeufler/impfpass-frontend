FROM node:latest
ADD /build/ /build/
EXPOSE 3000
CMD npx serve -s build -l 3000