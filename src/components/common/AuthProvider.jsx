import { useState } from 'react';
import { getAuth, signInWithPopup, signOut } from 'firebase/auth';
import { app, googleAuthProvider } from '/src/firebase';

const AuthProvider = () => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const startLoginWithGoogle = () => {
    auth.onAuthStateChanged((user) => {
      if (user != null) {
        return setUser(user);
      }

      signInWithPopup(auth, googleAuthProvider)
        .then((creds) => setUser(creds.user))
        .catch((e) => alert(e));
    });
  };
  const logOut = () => {
    signOut(auth).then(() => {
      alert('You logged out');
    });
  };
  return user != null ? (
    <>
      <img src={user.photoURL} alt={user.displayName} width='50' height='50' />
      {user.displayName}

      <button
        className='mb-2 me-2 inline-flex items-center rounded-lg bg-[#4285F4] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#4285F4]/90 focus:outline-none focus:ring-4 focus:ring-[#4285F4]/50 dark:focus:ring-[#4285F4]/55'
        onClick={() => logOut()}
      >
        Logout
      </button>
    </>
  ) : (
    <>
      <button
        onClick={() => startLoginWithGoogle()}
        type='button'
        className='mb-2 me-2 inline-flex items-center rounded-lg bg-[#4285F4] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#4285F4]/90 focus:outline-none focus:ring-4 focus:ring-[#4285F4]/50 dark:focus:ring-[#4285F4]/55'
      >
        <svg
          className='me-2 h-4 w-4'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          viewBox='0 0 18 19'
        >
          <path
            fillRule='evenodd'
            d='M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z'
            clipRule='evenodd'
          />
        </svg>
        Sign in with Google
      </button>
    </>
  );
};

export default AuthProvider;
