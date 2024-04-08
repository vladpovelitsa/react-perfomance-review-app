import { Link } from 'react-router-dom';
import { getDocs, getFirestore, query, collection } from 'firebase/firestore';
import { app } from '../firebase.js';
import { useEffect, useState } from 'react';

const DevelopersPage = () => {
  const db = getFirestore(app);
  let [devs, setDevs] = useState([]);
  let [loading, setLoading] = useState(true);

  const getDevs = () => {
    getDocs(query(collection(db, 'users')))
      .then((q) => {
        let temp = [];
        q.forEach((item) => {
          temp.push(item.data());
        });
        return temp;
      })
      .then((res) => setDevs(() => (devs = res)))
      .then(() => console.log(devs))
      .catch((e) => alert(e))
      .finally(() => setLoading(() => (loading = false)));
  };

  useEffect(() => {
    getDevs();
  }, []);

  return (
    <>
      <h1 className={'text-center text-3xl'}>Developers</h1>

      <div className={'table'}>
        <div className='table__row grid grid-cols-4'>
          <div className='table__cell'>User Name</div>
          <div className='table__cell'>User email</div>
          <div className='table__cell'>user id</div>
          <div className='table_cell'>User page -></div>
        </div>
        {!loading
          ? devs.map((user) => (
              <div className='table__row  grid grid-cols-4'>
                <div className='table__cell'>{user?.name || 'N/A'}</div>
                <div className='table__cell'>{user.email}</div>
                <div className='table__cell'>{user.id}</div>
                <div className='table_cell'>
                  <Link to={`/devs/${user.id}`}>Go to user -></Link>
                </div>
              </div>
            ))
          : 'loading...'}
      </div>
    </>
  );
};

export default DevelopersPage;
