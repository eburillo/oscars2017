const initialState = {
  games: [],
  uid: '',
  username: '',
  isLogged: false,
  hasVoted: false,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_USER_DATA':
      return Object.assign(state, {
        uid: action.uid,
        username: action.username,
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
