import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../firebase';

export const registerUserHandler = (email: any, password: any) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    });
};

export const firebaseSignIn = (email: any, password: any) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      localStorage.setItem('user_uid', user.uid);
      return 1;
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    });
};
