import * as firebase from 'firebase';
import firebaseConfig from './firebaseConfig';

export const fireBaseApp = () => firebase.initializeApp(firebaseConfig);
export const mainRirebase = () => firebase;

export default fireBaseApp;
