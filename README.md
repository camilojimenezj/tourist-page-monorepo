# Tourist Page

### Goal
Create a web site that will allow users to learn about new tourist destinations which they can enjoy alone or with their loved ones during their free time, this will be achieved through a page which will provide a collection of advice, suggestions and anecdotes from some of the most emblematic places of Antioquia.

### Specific objectives
* Analyze the requirements that users have to choose their travel plans through previously conducted research.

* Design a web site taking into account the analysis of the information collected and that serves to solve the problem encountered.

## Demo

```
https://tourist-page.herokuapp.com/
```

## Screenshots

### Desktop
![Captura de pantalla 2022-09-01 181416](https://user-images.githubusercontent.com/102927455/188027916-4df0e012-93c8-4835-a71b-87d4a954d344.jpg)
### Mobile
![WhatsApp Image 2022-08-31 at 8 12 42 PM](https://user-images.githubusercontent.com/102927455/188028084-1611dac0-ddae-4c18-9670-5d0a8abe6a9a.jpeg)

## Technologies used

1. Node
2. Express
3. MongoDB
4. React
5. jsonwebtoken
6. WebSockets
7. Redux
8. Cloudinary

## Customize configuration

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev:api
```

### Compile and Minify for Production

```sh
npm run build
```

### Start project 

```sh
npm run start
```

## Usage

* You can POST to /api/users with form data email, name and password, to register a new user.
* You can POST to /api/login with form data username and password, to login and get a Bearer Token.
* You can make a GET request to /api/places/:type (type can be paths or routes) to get a list of places.
* You can POST to /api/places with Multipart form data title, description, type and an image, to add a place. You have to include a Bearer Token in the Authorization header
