import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';

export const registerUserHandler = ( email: any, password: any) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // return error;
    });
  // updateProfile(auth.currentUser, {
  //   displayName: name,
  // })
  //   .then(() => {
  //     // Profile updated!
  //     // ...
  //   })
  //   .catch((error) => {
  //     // An error occurred
  //     // ...
  //   });
};

export const firebaseSignIn = (email: any, password: any) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log({ user });
      localStorage.setItem('user_uid', user.uid);
      return 1;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
};

// import path from 'path';
// import google from '@googleapis/forms';
// import { authenticate } from '@google-cloud/local-auth';

// const formID = '1FAIpQLSchL2ptZ48MuMg_U6jq6WXQYqfNHo-Hmao9TI1GENpfLAeIuQ';

// export const runSample = async () => {
//   const auth = await authenticate({
//     keyfilePath: path.join(__dirname, 'credentials.json'),
//     scopes: 'https://www.googleapis.com/auth/forms.responses.readonly',
//   });
//   const forms = google.forms({
//     version: 'v1',
//     auth: auth,
//   });
//   const res = await forms.forms.responses.list({
//     formId: formID,
//   });
//   console.log(res.data);
//   return res.data;
// };

// if (module === require.main) {
//   runSample().catch(console.error);
// }
