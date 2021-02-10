export const TYPES = {
  GLOBAL_CONFIG_LOADING_ERROR: 'GLOBAL_CONFIG_LOADING_ERROR',
  GLOBAL_CONFIG_LOADED: 'GLOBAL_CONFIG_LOADED',
  GLOBAL_SET_AUTH_TOKEN_AND_ID: 'GLOBAL_SET_AUTH_TOKEN_AND_ID',
}

function reducer(state = { configLoaded: false }, action) {
  switch (action.type) {
    case TYPES.GLOBAL_CONFIG_LOADING_ERROR:
      return { error: action.error };
    case TYPES.GLOBAL_CONFIG_LOADED:
      return { ...action.config, configLoaded: false };
    default: return state;
    case TYPES.GLOBAL_SET_AUTH_TOKEN_AND_ID:
      return {
        ...state,
        userId: action.payload.userId,
        token: action.payload.token,
      }
  }
}

export const reducerInstance = reducer;