import { getAvailableLanguagesAction } from './tableFIlters.actions.js';
import { collection, getDocs, getFirestore, query } from 'firebase/firestore';
import { app } from '../../firebase.js';

export const getLanguages = () => (dispatch, getState) => {
  const db = getFirestore(app);
  if (getState().tableFilterReducer.availableLanguages.length <= 1) {
    getDocs(query(collection(db, 'languages')))
      .then((q) => {
        let temp = [];
        q.forEach((item) => {
          temp.push(item.data());
        });
        return temp;
      })
      .then((res) => dispatch(getAvailableLanguagesAction(res)))
      .catch((e) => alert(e));
  }
};
