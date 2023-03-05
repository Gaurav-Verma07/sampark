import { getDatabase, ref, set } from 'firebase/database';

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
    rolo: role,
  });
};
