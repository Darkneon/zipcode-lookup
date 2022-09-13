FROM node:18.4

RUN mkdir -p /opt/app
RUN mkdir -p /opt/client
RUN mkdir -p /opt/server

WORKDIR /opt/app
COPY ./start.sh .
COPY ./client ./client
COPY ./server ./server

WORKDIR /opt/app/server
RUN npm install --omit=dev

WORKDIR /opt/app/client
RUN npm install  --omit=dev

EXPOSE 4000
EXPOSE 3000

WORKDIR /opt/app
RUN ["chmod", "+x", "start.sh"]
CMD ./start.sh
