export const getCategories = () => {
  return {
    type: 'GET_CATEGORIES',
  };
};

export const saveUserData = (league, email) => {
  return {
    type: 'SAVE_USER_DATA',
    league,
    email,
  };
};

export const sendVotes = () => {
  return {
    type: 'SEND_VOTES',
  };
};

export const voteCandidate = (categoryId, movieId) => {
  return {
    type: 'VOTE_CANDIDATE',
    categoryId,
    movieId,
  };
};
