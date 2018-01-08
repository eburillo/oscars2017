export const getCategories = () => {
  return {
    type: 'GET_CATEGORIES',
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
