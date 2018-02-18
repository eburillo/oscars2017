import { auth } from '../firebase';

export const saveUserData = (uid, username) => ({
  type: 'SAVE_USER_DATA',
  uid,
  username,
});

export const login = (email, password) => dispatch =>
  auth.signInWithEmailAndPassword(email, password);

export const signUp = (email, password) => dispatch =>
  auth.signInWithEmailAndPassword(email, password);
