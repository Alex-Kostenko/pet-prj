import React from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase';
import '@firebase/auth';
import firebaseConfig from '../firebase/firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);

const UserInfo = (props) => {
  const {
    user,
    signOut,
    signInWithGoogle,
  } = props;

  return (
    <div className="App">
      <header className="App-header">

        {user && <img src={user.photoURL} className="App-logo" alt="logo" />}

        {
          user
            ? <p>Hello, {user.displayName}</p>
            : <p>Please sign in.</p>
        }

        {
          user
            ? <button onClick={signOut}>Sign out</button>
            : <button onClick={signInWithGoogle}>Sign in with Google</button>
        }
      </header>
    </div>
  )
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(UserInfo);
