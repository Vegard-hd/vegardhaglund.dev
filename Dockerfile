# Use the official Node.js image based on Alpine
FROM node:alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

RUN npm run build
# Copy the rest of the application code
COPY . .

# Build the React app

# Expose the port the app runs on
EXPOSE 3001

# Start the application using server.js
CMD ["node", "server.js"]