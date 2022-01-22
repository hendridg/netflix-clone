import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';
import { GlobalStyle } from './global-styles';
import { FirebaseContext } from './context/firebase';
// import { seedDatabase } from './seed'

const config = {
  apiKey: 'AIzaSyAIrJn4GBwNGhcf3TRTAA_3KaEBmZts8jo',
  authDomain: 'netflix-clone-81c3f.firebaseapp.com',
  databaseURL: 'https://netflix-clone-81c3f-default-rtdb.firebaseio.com',
  projectId: 'netflix-clone-81c3f',
  storageBucket: 'netflix-clone-81c3f.appspot.com',
  messagingSenderId: '486335656711',
  appId: '1:486335656711:web:7cff99005956e460454ba2',
};

const firebase = window.firebase.initializeApp(config);

// seedDatabase(firebase)

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase: window.firebase }}>
    <GlobalStyle />
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
