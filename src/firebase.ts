import * as firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyDZ-Hc8gPpVrobgEXRhyBZ0QWrGxWFfyP0',
  authDomain: 'phoomparin.firebaseapp.com',
  databaseURL: 'https://phoomparin.firebaseio.com',
  projectId: 'phoomparin',
  storageBucket: 'phoomparin.appspot.com',
  messagingSenderId: '1098856489706',
  appID: 'phoomparin',
}

firebase.initializeApp(config)
