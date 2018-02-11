import { database } from '../firebase';

export const getData = () => {
  return dispatch => {
    database.once('value').then(snapshot => {
      dispatch({
        type: 'GET_DATA',
        payload: snapshot.val(),
      });
    });
  };
};

export const saveUserData = (uid, username) => ({
  type: 'SAVE_USER_DATA',
  uid,
  username,
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
