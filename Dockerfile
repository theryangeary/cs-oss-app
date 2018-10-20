# A node.js v8 box
FROM node:8

# Creator
MAINTAINER rtgnj42@gmail.com

# Create working directory
RUN mkdir -p /usr/src/app

# Switch to working directory
WORKDIR /usr/src/app

COPY . .

# Install nodemon globally
RUN npm install -g nodemon

# Install dependencies in package.json
RUN npm install

# Expose port from container
EXPOSE 3000

# Start app on load
CMD ["npm", "start"]

