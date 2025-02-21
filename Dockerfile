# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy project files
COPY . .

# Build the app
RUN npm run build

# Start the app
CMD ["npm", "start"]
