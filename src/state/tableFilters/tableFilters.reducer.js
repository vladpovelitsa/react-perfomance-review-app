import {
  UPDATE_SELECTED_LANGUAGE,
  UPDATE_LAST_REVIEW,
  GET_AVAILABLE_LANGUAGES,
} from './tableFilters.constants.js';

const initialState = {
  availableLanguages: [
    {
      id: 999,
      name: 'All',
    },
  ],
  selectedLanguage: 'all',
  lastReview: '',
};

export const tableFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SELECTED_LANGUAGE:
      return {
        ...state,
        selectedLanguage: action.payload,
      };
    case UPDATE_LAST_REVIEW:
      return {
        ...state,
        lastReview: action.payload,
      };
    case GET_AVAILABLE_LANGUAGES:
      return {
        ...state,
        availableLanguages: [
          {
            id: 999,
            name: 'All',
          },
          ...action.payload,
        ],
      };

    default:
      return state;
  }
};
