import * as TYPES from '../types';

export default function reducer(state = {}, action) {
  switch (action.type) {
    case TYPES.CONFIG_LOADING_ERROR:
      return { error: action.error };
    case TYPES.CONFIG_LOADED:
      return { ...action.config, configLoaded: true };
    default: return state;
  }
}