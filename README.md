# Cloud Computing Documentation

## Table of Content

- [Cloud Computing Documentation](#cloud-computing-documentation)
  - [Table of Content](#table-of-content)
  - [Diagram Architecture](#diagram-architecture)
  - [Firestore Database Scheme](#firestore-database-scheme)
  - [Tech Stack](#tech-stack)
  - [Dependencies](#dependencies)
  - [Endpoint Routes](#endpoint-routes)

## Diagram Architecture

![image](https://github.com/mikhaelsiallagan/snapcal-backend/assets/88528641/f9e0f765-2e52-4307-a0fd-d4c59c9af2e6)

## Firestore Database Scheme
![Untitled Diagrqqam drawio](https://github.com/mikhaelsiallagan/snapcal-backend/assets/88528641/dd32114b-bcee-4302-8037-05b35925b2e7)

## Tech Stack

- Node.js
- Express.js
- App Engine
- Cloud Storage
- Tensorflow Lite
- Firestore

## Dependencies

- [**@google-cloud/firestore**](https://www.npmjs.com/package/@google-cloud/firestore) - Version: ^7.11.1
- [**bcrypt**](https://www.npmjs.com/package/bcrypt) - Version: ^5.1.1
- [**dotenv**](https://www.npmjs.com/package/dotenv) - Version: ^16.4.5
- [**express**](https://www.npmjs.com/package/express) - Version: ^4.19.2
- [**firebase-admin**](https://www.npmjs.com/package/firebase-admin) - Version: ^12.1.1
- [**jsonwebtoken**](https://www.npmjs.com/package/jsonwebtoken) - Version: ^9.0.2
- [**multer**](https://www.npmjs.com/package/multer) - Version: ^1.4.5-lts.1
- [**nodemon**](https://www.npmjs.com/package/nodemon) - Version: ^3.1.0

## Endpoint Routes
| Route                                | HTTP Method | Description                 | Auth         |
| ------------------------------------ | ----------- | --------------------------- | ------------ |
| /                                    | GET         | First route                 | Required     |
| /auth/register                       | POST        | Register for new user       | Not Required |
| /auth/login                          | POST        | Log in for user             | Not Required |
| /auth/logout                         | POST        | Log out from account        | Required     |
| /auth/delete-account                 | DELETE      | Delete user account         | Required     |
| /auth/reset-password                 | PUT         | Reset account password      | Required     |
| /user/profile-details                | GET         | Get Profile Details         | Required     |
| /user/profile-details                | PUT         | Update Profile Details      | Required     |
| /user/profile-details/upload-photo   | POST        | Upload photo profile user   | Required     |

# API Documentation

## Base URL
[https://snapcal-backend.et.r.appspot.com/)

## Endpoints

### Register Account
- **Method:** POST
- **Auth:** NOT REQUIRED
- **URL:** `/auth/register`
- **Request Body:**
    ```json
    {
	"name": "user name example",
    	"email": "user@example.com",
    	"password": "examplepassword"
    }
    ```
- **Response:**
Status Code: 201
    ```json
    {
        "status": "successful",
        "message": "User registered successfully",
    }
    ```
Status Code: 400
    ```json
    {
        "status": "fail",
        "message": "Failed registered account/Account already created",
    }
    ```

Status Code: 500
    ```json
    {
        "status": "error",
        "message": "Internal Server Error",
    }
    ```


### Login Account
- **Method:** POST
- **Auth:** NOT REQUIRED
- **URL:** `/auth/login`
- **Request Body:**
    ```json
    {
    	"email": "user@example.com",
    	"password": "examplepassword"
    }
    ```
- **Response:**
Status Code: 201
    ```json
    {
        "status": "successful",
        "message": "User logged in successfully",
        "token": "example-token"
    }
    ```
Status Code: 400
    ```json
    {
        "status": "fail",
        "message": "User failed to login",
    }
    ```

Status Code: 500
    ```json
    {
        "status": "error",
        "message": "Internal Server Error",
    }
    ```

### Logout Account
- **Method:** POST
- **Auth:** REQUIRED
- **URL:** `/auth/logout`
- **Request Body:**
  `Authentication: jwt-token`
- **Response:**
Status Code: 201
    ```json
    {
        "status": "successful",
        "message": "User logout successfully",
    }
    ```
Status Code: 400
    ```json
    {
        "status": "fail",
        "message": "Failed to logout",
    }
    ```

Status Code: 500
    ```json
    {
        "status": "error",
        "message": "Internal Server Error",
    }
    ```

### Delete Account
- **Method:** DELETE
- **Auth:** REQUIRED
- **URL:** `/auth/delete-account`
- **Request Body:**
  `Authentication: jwt-token`
- **Response:**
Status Code: 201
    ```json
    {
        "status": "successful",
        "message": "Delete account successfully",
    }
    ```
Status Code: 400
    ```json
    {
       "status": "fail",
       "message": "Failed to delete account",
    }
    ```

Status Code: 500
    ```json
    {
        "status": "error",
        "message": "Internal Server Error",
    }
    ```

### Reset Account Password
- **Method:** PUT
- **Auth:** REQUIRED
- **URL:** `/auth/reset-password`
- **Request Body:**
      ```json
    {
        "password": "examplenewpassword"
    }
    ```
- **Response:**
Status Code: 201
    ```json
    {
        "status": "successful",
        "message": "Password reset successfully",
    }
    ```
Status Code: 400
    ```json
    {
        "status": "fail",
        "message": "User failed to reset password",
    }
    ```

Status Code: 500
    ```json
    {
        "status": "error",
        "message": "Internal Server Error",
    }
    ```

### GET User Profile Details
- **Method:** GET
- **Auth:** REQUIRED
- **URL:** `/user/profile-details`
- **Request Body:**
`Authentication: jwt-token`
- **Response:**
Status Code: 201
    ```json
    {
        "status": "successful"
        "message": "User get profile success"
        "userId": "exampleuserId"
        "data":{
            "name": "example name"
            "email": "name@example.com"
            "gender": "pria"
            "beratBadan": 80
            "tinggiBadan": 178
            "usiaUser": 25
            "gambar_profile": "url to profile image"
            "created_at": "xxxxxxx"
            "updated_at": "xxxxxxx"
        }
    }
    ```
Status Code: 400
    ```json
    {
        "status": "fail",
        "message": "Failed to Get Profile",
    }
    ```

Status Code: 500
    ```json
    {
        "status": "error",
        "message": "Internal Server Error",
    }
    ```

### UPDATE User Profile Details
- **Method:** PUT
- **Auth:** REQUIRED
- **URL:** `/user/profile-details`
- **Request Body:**
    ```json
    {
        "userId": "exampleuserId"
        "data":{
            "name": "new example name"
            "email": "newname@example.com"
            "gender": "wanita"
            "beratBadan": 70
            "tinggiBadan": 177
            "usiaUser": 24
            "gambar_profile": "url to new profile image"
        }
    }
    ```
- **Response:**
Status Code: 201
    ```json
    {
        "status": "successful"
        "message": "User update profile success"
        "userId": "exampleuserId"
        "data":{
           "name": "new example name"
           "email": "newname@example.com"
           "gender": "wanita"
           "beratBadan": 70
           "tinggiBadan": 177
           "usiaUser": 24
           "gambar_profile": "url to new profile image"
           "created_at": "xxxxxxx"
           "updated_at": "xxxxxxx"
        }
    }
    ```
Status Code: 400
    ```json
    {
        "status": "fail",
        "message": "Failed to Update Profile",
    }
    ```

Status Code: 500
    ```json
    {
        "status": "error",
        "message": "Internal Server Error",
    }
    ```
