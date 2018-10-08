import * as firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyC2CgjxUFkYrPW-EEGjkARRFp5jNjZ_eGI',
  authDomain: 'oscars-2017.firebaseapp.com',
  databaseURL: 'https://oscars-2017.firebaseio.com',
  projectId: 'oscars-2017',
  storageBucket: 'oscars-2017.appspot.com',
  messagingSenderId: '543624911876',
}

firebase.initializeApp(config)

export const database = firebase.database().ref()
export const auth = firebase.auth()
