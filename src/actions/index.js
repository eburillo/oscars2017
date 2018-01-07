export const getCategories = () => {
  return {
    type: 'GET_CATEGORIES',
  };
};

export const voteCandidate = (categoryId, movieId) => {
  return {
    type: 'VOTE_CANDIDATE',
    categoryId,
    movieId,
  };
};
