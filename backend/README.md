# User Registration Endpoint

## Endpoint
`POST /user/register`

## Description
This endpoint is used to register a new user. It requires the user's first name, last name, email, and password.

## Request Body
The request body should be a JSON object containing the following fields:

- `firstName` (string, required): The first name of the user. Must be at least 3 characters long.
- `lastName` (string, optional): The last name of the user.
- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user account. Must be at least 6 characters long.

Example:
```json
{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "password": "password123"
}
```

## Responses

### Success
- **Status Code:** 201 Created
- **Response Body:**
  ```json
  {
      "success": true,
      "user": {
          "_id": "user_id",
          "name": {
              "firstName": "John",
              "lastName": "Doe"
          },
          "email": "john.doe@example.com",
          // ...other user fields...
      },
      "token": "jwt_token",
      "message": "User registered successfully"
  }
  ```

### Validation Errors
- **Status Code:** 400 Bad Request
- **Response Body:**
  ```json
  {
      "errors": [
          {
              "msg": "First Name must be at least 3 characters long",
              "param": "firstName",
              "location": "body"
          },
          {
              "msg": "Email is not valid",
              "param": "email",
              "location": "body"
          },
          {
              "msg": "Password must be at least 6 characters long",
              "param": "password",
              "location": "body"
          }
      ]
  }
  ```

### User Already Exists
- **Status Code:** 400 Bad Request
- **Response Body:**
  ```json
  {
      "success": false,
      "message": "User already exists"
  }
  ```

### Server Error
- **Status Code:** 500 Internal Server Error
- **Response Body:**
  ```json
  {
      "success": false,
      "message": "An error occurred while registering the user"
  }
  ```

# User Login Endpoint

## Endpoint
`POST /user/login`

## Description
This endpoint is used to log in an existing user. It requires the user's email and password.

## Request Body
The request body should be a JSON object containing the following fields:

- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user account. Must be at least 6 characters long.

Example:
```json
{
    "email": "john.doe@example.com",
    "password": "password123"
}
```

## Responses

### Success
- **Status Code:** 200 OK
- **Response Body:**
  ```json
  {
      "success": true,
      "user": {
          "_id": "user_id",
          "name": {
              "firstName": "John",
              "lastName": "Doe"
          },
          "email": "john.doe@example.com",
          // ...other user fields...
      },
      "token": "jwt_token",
      "message": "User logged in successfully"
  }
  ```

### Validation Errors
- **Status Code:** 400 Bad Request
- **Response Body:**
  ```json
  {
      "errors": [
          {
              "msg": "Email is not valid",
              "param": "email",
              "location": "body"
          },
          {
              "msg": "Password must be at least 6 characters long",
              "param": "password",
              "location": "body"
          }
      ]
  }
  ```

### Invalid User Credentials
- **Status Code:** 400 Bad Request
- **Response Body:**
  ```json
  {
      "success": false,
      "message": "Invalid User Credentials"
  }
  ```

### Server Error
- **Status Code:** 500 Internal Server Error
- **Response Body:**
  ```json
  {
      "success": false,
      "message": "An error occurred while logging in the user"
  }
  ```

# User Profile Endpoint

## Endpoint
`GET /user/profile`

## Description
This endpoint is used to get the profile information of the authenticated user.

## Responses

### Success
- **Status Code:** 200 OK
- **Response Body:**
  ```json
  {
      "user": {
          "_id": "user_id",
          "name": {
              "firstName": "John",
              "lastName": "Doe"
          },
          "email": "john.doe@example.com",
          // ...other user fields...
      }
  }
  ```

### Unauthorized
- **Status Code:** 401 Unauthorized
- **Response Body:**
  ```json
  {
      "success": false,
      "message": "Authentication required"
  }
  ```

### Server Error
- **Status Code:** 500 Internal Server Error
- **Response Body:**
  ```json
  {
      "success": false,
      "message": "An error occurred while fetching the user profile"
  }
  ```

# User Logout Endpoint

## Endpoint
`GET /user/logout`

## Description
This endpoint is used to log out the authenticated user.

## Responses

### Success
- **Status Code:** 200 OK
- **Response Body:**
  ```json
  {
      "success": true,
      "message": "User logged out successfully"
  }
  ```

### Unauthorized
- **Status Code:** 401 Unauthorized
- **Response Body:**
  ```json
  {
      "success": false,
      "message": "Authentication required"
  }
  ```

### Server Error
- **Status Code:** 500 Internal Server Error
- **Response Body:**
  ```json
  {
      "success": false,
      "message": "An error occurred while logging out the user"
  }
  ```
