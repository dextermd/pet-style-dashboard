const apiUrl = 'http://192.168.18.127:3000/api';

export const ApiEndpoint = {
  Auth: {
    Login: `${apiUrl}/auth/groomer-login`,
  },

}

export const LocalStorage = {
  token: 'USER_TOKEN',
  currentUser: 'CURRENT_USER',
}
