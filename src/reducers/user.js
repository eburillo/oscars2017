const initialState = {
  league: '',
  email: '',
  isLogged: false,
  hasVoted: false,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_USER_DATA':
      return Object.assign(state, {
        league: action.league,
        email: action.email,
        isLogged: true,
      });
    case 'SEND_VOTES':
      return Object.assign(state, {
        hasVoted: true,
      });
    default:
      return state;
  }
};

export default users;
