/{image_name}/{width}/{height}
Method: get URL Params: height and width - the height or width of the image in pixels Query Param:
image_name: the specific image you are requesting

for example 'localhost:3000/fjord/500/500'

Available Image Options:
1- encenadaport
2- fjord
3- icelandwaterfall
4- palmtunnel
5- santamonica

Functionality

- User can query endpoint using various params to retrieve an image with a specific width and height
- All images requested will be saved to disk (/images/resized_images)
- There is a cache layer, if a user requests an image size that has already been requested, there is no need for resizing and the previously image will be returned 

Build with

nodeJs
typescript
jasmine
express
prettier
eslint
nodemon
sharp

Command lines to run project

- npm run start (to start server and server be listen on port 3000)
- npm run test (to run test cases)

