import { API_BASE_URL, JWT_TOKEN } from "../constants/constants";

const request = (options) => {
  const headers = new Headers({
    'Content-Type': 'application/json'
  });

  if (localStorage.getItem(JWT_TOKEN)) {
    headers.append('Authorization', 'Bearer ' + localStorage.getItem(JWT_TOKEN));
  }

  const defaults = { headers: headers };
  options = Object.assign({}, defaults, options);

  return fetch(options.url, options)
    .then(response =>
      response.json().then(json => {
        if (!response.ok) {
          return Promise.reject(json);
        }
        return json;
      })
    );
};

export const login = (loginRequest) => {
  return request({
    url: API_BASE_URL + "/authenticate",
    method: 'POST',
    body: JSON.stringify(loginRequest)
  });
}

export const register = (registerRequest) => {
  localStorage.removeItem(JWT_TOKEN);
  return request({
    url: API_BASE_URL + "/register",
    method: 'POST',
    body: JSON.stringify(registerRequest)
  });
}

export const checkToken = () => {
  return request({
    url: API_BASE_URL + "/checkToken",
    method: 'GET'
  });
}