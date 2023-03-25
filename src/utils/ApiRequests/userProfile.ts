import { child, get, getDatabase, ref, set } from 'firebase/database';

export const writeUserData = (
  userId: any,
  name: any,
  email: any,
  role: any,
) => {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
    role: role,
  });
};

export const getUserData = (userID: any) => {
  let userData;
  const dbRef = ref(getDatabase());
  get(child(dbRef, `users/${userID}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        userData = snapshot.val();
        return userData;
      } else {
        console.log('No data available');
      }
    })
    .catch((error) => {
      console.error(error);
    });
  return userData;
};
