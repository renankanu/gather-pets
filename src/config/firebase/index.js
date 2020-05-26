import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBMVEUpnFx-s6DqI86ZKwLkApvnVKfFPzs',
  authDomain: 'gather-pets.firebaseapp.com',
  databaseURL: 'https://gather-pets.firebaseio.com',
  projectId: 'gather-pets',
  storageBucket: 'gather-pets.appspot.com',
  messagingSenderId: '929001382815',
  appId: '1:929001382815:web:1ad9922aa164eea50bd3aa',
  measurementId: 'G-QNH0PJHL3E',
};

firebase.initializeApp(firebaseConfig);

export const firebaseDatabase = firebase.database();
