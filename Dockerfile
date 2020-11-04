FROM node:15.0.1-alpine3.12

WORKDIR /usr/src/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# add app
COPY . ./
RUN npm config set proxy false 
RUN npm cache verify
RUN npm install

# start app
CMD ["npm", "start"]
