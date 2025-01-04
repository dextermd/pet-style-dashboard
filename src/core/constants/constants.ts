const apiUrl = 'http://192.168.18.127:3000';

export const ApiEndpoint = {
  ApiUrl: apiUrl,
  Auth: {
    Login: `${apiUrl}/api/auth/groomer-login`,
  },
  User: {
    Users: `${apiUrl}/api/users`,
  },
  Pet: {
    Pets: `${apiUrl}/api/pets`,
  },
  Service: {
    Services: `${apiUrl}/api/services`,
  },
  Faq: {
    Faqs: `${apiUrl}/api/faqs`,
  },
  Promotion: {
    Promotions: `${apiUrl}/api/promotion`,
  }
}

export const LocalStorage = {
  accessToken: 'USER_ACCESS_TOKEN',
  currentUser: 'CURRENT_USER',
}
