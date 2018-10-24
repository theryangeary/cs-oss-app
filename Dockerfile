# A node.js v8 box
FROM node:8

# Creator
MAINTAINER rtgnj42@gmail.com

# Create working directory
RUN mkdir -p /usr/src/app

# Create static files directory
RUN mkdir -p /usr/src/app/public

# Switch to working directory
WORKDIR /usr/src/app

# Copy files from host to container
COPY . .

# Install nodemon globally
RUN npm install -g nodemon

# Install dependencies in package.json
RUN npm install

# Build angular app into public/ directory
RUN node_modules/@angular/cli/bin/ng build --output-path=/usr/src/app/public/

# Expose port from container
EXPOSE 3000

# Start app on load
CMD ["npm", "start"]

