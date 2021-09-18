#Run your file
docker build . -t "${USER}"/node-web-app
docker run -p 49160:8080 -d "${USER}"/node-web-app

