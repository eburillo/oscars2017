const initialState = {
  league: '',
  email: '',
  logged: false,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_USER_DATA':
      console.log('save user data');
      return {
        league: action.league,
        email: action.email,
        logged: true,
      };
    default:
      return state;
  }
};

export default users;
