export const voteCandidate = (categoryId, movieId) => {
  return {
    type: 'VOTE_CANDIDATE',
    categoryId,
    movieId,
  };
};
