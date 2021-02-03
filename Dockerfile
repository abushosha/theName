FROM ubuntu

# Update aptitude with new repo
# RUN apt-get update

# # Install software 
# RUN apt-get install -y git
# # Make ssh dir
# RUN mkdir /root/.ssh/

# Copy over private key, and set permissions
# Warning! Anyone who gets their hands on this image will be able
# to retrieve this private key file from the corresponding image layer
# C:\Users\TinkPad\.ssh
# ADD id_rsa /root/.ssh/id_rsa

# Create known_hosts
# RUN touch /root/.ssh/known_hosts
# Add github key
# RUN ssh-keyscan github.com >> /root/.ssh/known_hosts

# Clone the conf files into the docker container
# RUN git clone -b master https://github.com/abushosha/theName.git


#Install git
# RUN apt-get update
# RUN apt-get install -y git
# # make dir
# # RUN mkdir sampleTest  
# # RUN cd sampleTest       
# # RUN git clone https://github.com/ahmedzaky030/parent-aps-task
# RUN git clone https://github.com/abushosha/theName.git
# # RUN cd theName   
# # Set working directory
# WORKDIR /theName

# stage 1
FROM node:14.7.0-alpine as node
# WORKDIR /usr/src/app
COPY . .
RUN npm install
# RUN npm install npm@7.5.2
RUN npm run build

# stage 2
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
WORKDIR /usr/share/nginx/html
COPY --from=node /usr/src/app/dist/angular9 /usr/share/nginx/html