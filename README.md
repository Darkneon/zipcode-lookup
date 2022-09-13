# Application

https://user-images.githubusercontent.com/654727/189902003-138b050c-6323-468e-9a74-395bd8d484c6.mp4

# Installation

```shell
# start
docker build -t zipcode-lookup .
docker run  -p 3000:3000 -p 4000:4000 -d --name zipcode-lookup-app zipcode-lookup

#stop and cleanup
docker rm -f zipcode-lookup-app
docker image rm zipcode-lookup
```
