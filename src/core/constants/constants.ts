const apiUrl = 'http://192.168.18.127:3000/api';

export const ApiEndpoint = {
  Auth: {
    Login: `${apiUrl}/auth/groomer-login`,
  },
  User: {
    Users: `${apiUrl}/users`,
  },
  Pet: {
    Pets: `${apiUrl}/pets`,
  }
}

export const LocalStorage = {
  accessToken: 'USER_ACCESS_TOKEN',
  currentUser: 'CURRENT_USER',
}
