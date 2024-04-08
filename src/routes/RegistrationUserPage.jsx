import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { app } from '../firebase.js';
import { setDoc, doc, getFirestore } from 'firebase/firestore';

const RegistrationUserPage = () => {
  const navigate = useNavigate();

  const auth = getAuth(app);
  const db = getFirestore(app);

  let [userEmail, setUserEmail] = useState('');
  let [userPass, setUserPass] = useState('');

  const regUser = () => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, userEmail, userPass)
      .then((userData) => {
        setUserEmail(() => (userEmail = ''));
        setUserPass(() => (userPass = ''));
        document.forms[0].reset();
        setDoc(doc(db, 'users', userData.user.uid), {
          email: userData.user.email,
          id: userData.user.uid,
        })
          .then(() => {
            navigate('/devs/' + userData.user.uid);
          })
          .catch((e) => {
            alert(e);
          });
      })
      .catch((e) => {
        alert(e);
      });
  };

  return (
    <form onSubmit={() => regUser()}>
      <h1 className={'text-center text-3xl'}> RegistarationUserPage </h1>
      <input
        type='text'
        className='border-2  border-brand-strong'
        name='email'
        onInput={() => setUserEmail((userEmail = event.target.value))}
      />
      <input
        type='password'
        className='border-2 border-brand-strong'
        name='pass'
        onInput={() => setUserPass((userPass = event.target.value))}
      />
      <button className='mb-2 me-2 inline-flex items-center rounded-lg bg-[#4285F4] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#4285F4]/90 focus:outline-none focus:ring-4 focus:ring-[#4285F4]/50 dark:focus:ring-[#4285F4]/55'>
        send
      </button>
    </form>
  );
};

export default RegistrationUserPage;
