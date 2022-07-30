# Image layers
#Specify the parent image
FROM node:16-alpine

# Nodemon install globally
RUN npm install -g nodemon

# Specify the working directory to docker
WORKDIR /app

# Get package.json file
COPY package.json .

# Install dependencies
RUN npm install

# Volumes can map folders on our computer to folders in the container

# Copying the files
# First dot is the one that we are telling which files we want to add to the image and the path
# Think that our files are in the src folder, then we have to add ./src instead of .
# Second .is the path that we want to specify the image to be, in this case separate folder called app
# Again I've changed the path from /app to . because I've added the WORKDIR into the top as app
COPY . .

# Specify the port
EXPOSE 4000

# To run the app
CMD ["npm", "run", "dev"]



