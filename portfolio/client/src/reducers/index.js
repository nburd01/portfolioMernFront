import { combineReducers } from 'redux';

import posts from './posts';
//this is in index.tsx as 'reducers'
export const reducers = combineReducers({ posts });
