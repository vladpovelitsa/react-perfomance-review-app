import {
  UPDATE_SELECTED_LANGUAGE,
  UPDATE_LAST_REVIEW,
  GET_AVAILABLE_LANGUAGES,
} from './tableFilters.constants.js';

export const updateSelectedLanguageAction = (payload) => ({
  type: UPDATE_SELECTED_LANGUAGE,
  payload,
});

export const updateLastReviewAction = (payload) => ({
  type: UPDATE_LAST_REVIEW,
  payload,
});

export const getAvailableLanguagesAction = (payload) => ({
  type: GET_AVAILABLE_LANGUAGES,
  payload,
});
