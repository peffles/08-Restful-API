# Lab 08 Restful API
# Build Status: [![Build Status](https://travis-ci.com/peffles/08-Restful-API.svg?branch=master)](https://travis-ci.com/peffles/08-Restful-API)
**Author**: Wyatt Pefley
**Version**: 1.0.0
___
## Overview
This application stores information about Red Pandas. It takes in a Name and a short description and assigns it an ID using Node.js and uuid.

## Getting Started
- Fork repo
- Clone to local machine
- Run ```npm i``` in terminal
- insert the following in your package.json
 ```
 "scripts": {
    "test": "jest --coverage",
    "lint": "eslint ."
```
- Enter ```npm run test``` in your terminal and watch for green!

## Architecture
- JavaScript (ES6)
- Node.js
- Winston
- uuid
- superagent
- dotenv

To POST/CREATE - :/api/stores title=[titeGoesHere] content=[contentGoesHere] 

- If successful, will respond with a 200 status. If an invalid post is made, will respond with a 400 status

To GET/READ - /api/store id==[insert existing id]

- If successful, will respond with a 200 status
