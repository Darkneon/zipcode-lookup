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

# Responsive UI

<img alt="1280x800" src="https://user-images.githubusercontent.com/654727/189903464-23d76620-3fdc-4c33-9763-893a5ecd35f1.png" width="250" /> 
<img alt="688x1031" src="https://user-images.githubusercontent.com/654727/189903468-54552b5f-6caa-4425-b55e-a1fcae292f85.png" width="250" /> 
<img alt="414x896" src="https://user-images.githubusercontent.com/654727/189903469-72d272d4-f4ff-497b-ab65-b2a390d88aab.png" width="250" /> 
<img alt="412x732" src="https://user-images.githubusercontent.com/654727/189903467-54f743ee-a616-4aa0-81d2-5d228134c038.png" width="250" /> 
<img alt="240x320" src="https://user-images.githubusercontent.com/654727/189903466-d4c362a7-460d-45ca-accd-2497fec3cea4.png" width="250" /> 

# Re-rendering improvements
## Before

https://user-images.githubusercontent.com/654727/189903640-257ab8e7-b277-4ea7-bed9-66343dda29b4.mp4

## After

https://user-images.githubusercontent.com/654727/189903662-3e0431a6-92ee-4d8d-89e3-4aac633d683b.mp4



