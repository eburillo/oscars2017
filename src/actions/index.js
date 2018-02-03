export const getCategories = () => ({
  type: 'GET_CATEGORIES',
});

export const saveUserData = (league, email) => ({
  type: 'SAVE_USER_DATA',
  league,
  email,
});

export const sendVotes = () => ({
  type: 'SEND_VOTES',
});

export const voteCandidate = (categoryId, movieId, category, candidateTitle) => ({
  type: 'VOTE_CANDIDATE',
  categoryId,
  movieId,
  category,
  candidateTitle,
});
