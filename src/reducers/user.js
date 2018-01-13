const initialState = {
  league: '',
  email: '',
  isLogged: false,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_USER_DATA':
      console.log('save user data');
      return {
        league: action.league,
        email: action.email,
        isLogged: true,
      };
    default:
      return state;
  }
};

export default users;
