import { useNavigate, useParams } from 'react-router-dom';
import {
  getDoc,
  getFirestore,
  doc,
  setDoc,
  deleteDoc,
} from 'firebase/firestore';
import { app } from '../firebase.js';
import { useEffect, useState } from 'react';

const SingleDeveloperPage = () => {
  const navigate = useNavigate();

  const db = getFirestore(app);
  const params = useParams();
  let [devInfo, setDevInfo] = useState({});
  const getDev = () => {
    getDoc(doc(db, 'users', params.id))
      .then((res) => {
        setDevInfo(() => (devInfo = res.data()));
      })
      .catch((e) => alert(e));
  };
  const updateDev = () => {
    setDoc(doc(db, 'users', params.id), {
      email: 'testUpdated@gmail.com',
    })
      .then(() => alert('dev updated'))
      .catch((e) => alert(e));
  };

  const removeDev = () => {
    deleteDoc(doc(db, 'users', params.id))
      .then(() => navigate('/'))
      .catch((e) => alert(e));
  };

  useEffect(() => {
    getDev();
  }, []);

  return (
    <>
      <h1 className={'text-center text-3xl'}>
        SingleDeveloperPage id: {params.id}
      </h1>
      email: {devInfo?.email}
      <br />
      <button onClick={() => updateDev()}> update</button>
      <br />
      <button onClick={() => removeDev()}> Delete</button>
    </>
  );
};

export default SingleDeveloperPage;
