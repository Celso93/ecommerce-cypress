FROM cypress/included

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project directory to the working directory
COPY . .

# Set environment variables, if required
# ENV VARIABLE_NAME=value

# Expose the port, if your Cypress script needs it
# EXPOSE 8080

# Define the default command to run when the container starts
CMD ["npm", "run", "test"]
