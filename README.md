### React Login Starter App

#### Run this locally : 
```bash
git clone https://github.com/tushartambe/react-antd-login-starter.git
cd react-antd-login-starter
npm install
npm start
```

#### This is template app which has following things included

* Login/Signup pages
* Private routes (If user is not logged in redirect to login page)
* Page Navigation
* Dark Theme support

#### Sample API Responses

##### `/authenticate`

```json
{
"jwtToken": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0Rz8Or4UyITq9oX6a54LmrOWa5DCLxnwvd-s6lbXvKg8wgDotWe1mMrg9FGwe5H57P98Q"
};
```

##### `/register`

```json
{
    "id": "60b60b15c17a81b80054",
    "email": "mymail@gmail.com",
    "name": "Name"
}
```

##### `/checkToken`

Return status 200 if token is valid and 401 if token is expired/invalid.
