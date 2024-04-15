import { Link } from 'react-router-dom';
import { collection, getDocs, getFirestore, query } from 'firebase/firestore';
import { app } from '../firebase.js';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSelectedLanguageAction } from '../state/tableFilters/tableFIlters.actions.js';
import { getLanguages } from '../state/tableFilters/tableFilters.thunk.js';

const DevelopersPage = () => {
  const db = getFirestore(app);
  let [devs, setDevs] = useState([]);
  let [loading, setLoading] = useState(true);
  let languages = useSelector(
    (state) => state.tableFilterReducer.availableLanguages,
  );
  let selectedLanguage = useSelector(
    (state) => state.tableFilterReducer.selectedLanguage,
  );
  const dispatch = useDispatch();

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
      .catch((e) => alert(e))
      .finally(() => setLoading(() => (loading = false)));
  };

  useEffect(() => {
    getDevs();
    dispatch(getLanguages());
  }, []);

  return (
    <>
      <h1 className={'text-center text-3xl'}>Developers</h1>
      <ul className={'container mx-auto my-4 flex  justify-center gap-2'}>
        {languages.map((item, index) => (
          <li key={index}>
            <button
              onClick={() => {
                dispatch(updateSelectedLanguageAction(item.name));
              }}
              className={`${selectedLanguage.toLowerCase() === item?.name?.toLowerCase() ? 'font-bold text-red-600' : ''} uppercase`}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
      <div className={'container mx-auto  table'}>
        <div className='table__row grid grid-cols-4'>
          <div className='table__cell'>User Name</div>
          <div className='table__cell'>User email</div>
          <div className='table__cell'>user main language</div>
          <div className='table_cell'>User page -></div>
        </div>
        {!loading
          ? devs.map((user) => (
              <div className='table__row  grid grid-cols-4' key={user.id}>
                <div className='table__cell'>{user?.name || 'N/A'}</div>
                <div className='table__cell'>{user.email}</div>
                <div className='table__cell'>{user.language}</div>
                <div className='table_cell'>
                  <Link to={`/devs/${user.id}`}>Go to user</Link>
                </div>
              </div>
            ))
          : 'loading...'}
      </div>
    </>
  );
};

export default DevelopersPage;
