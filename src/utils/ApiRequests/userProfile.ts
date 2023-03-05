import { getAuth, updateProfile } from 'firebase/auth';
import { app } from '../firebase';

const auth = getAuth(app);
export const updateUser = () => {
  const user = auth?.currentUser;
  updateProfile(user, {
    //Demo data
    displayName: 'Gaurav Verma',
    photoURL: 'https://example.com/jane-q-user/profile.jpg',
    role: 'provider',
  })
    .then(() => {
      // Profile updated!
      // ...
      console.log({ user });
    })
    .catch((error) => {
      // An error occurred
      // ...
      console.log({ error });
    });

  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;
    console.log({ user });

    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    const uid = user.uid;
  }
};
