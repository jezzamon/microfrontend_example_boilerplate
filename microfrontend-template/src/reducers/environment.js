import localConfigs from '../config.json';
import * as TYPES from '../types';

export const DEFAULT_ENVIRONMENT = process.env.NODE_ENV === 'development' ? Object.keys(localConfigs.environments)[0] : 'dev';

export default function reducer(state = DEFAULT_ENVIRONMENT, action) {
  switch (action.type) {
    case TYPES.ENVIRONMENT_CHANGED:
      return action.environment;
    default: return state;
  }
}
