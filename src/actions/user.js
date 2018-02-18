import { database, auth } from '../firebase';

export const saveUserData = (uid, username) => ({
  type: 'SAVE_USER_DATA',
  uid,
  username,
});

export const login = (email, password) => dispatch =>
  auth.signInWithEmailAndPassword(email, password).then(user => {
    console.log(user);
  });

export const signUp = (name, email, password) => dispatch =>
  auth.createUserWithEmailAndPassword(email, password).then(user => {
    database
      .child('/users/' + user.uid)
      .set({
        email: email,
        name: name,
        leagues: [{ id: 1, name: 'demo league', votes: [{ 0: 1, 1: 5, 2: 4 }] }],
      });
  });
