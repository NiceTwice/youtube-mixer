import createReducer from "./createReducer";
import update from 'immutability-helper';

export const common = createReducer({
  tmp: 42
}, {
  ['SET_TMP'](state, action){
    return update(state, {
      tmp: {$set: action.payload.tmp}
    });
  }
});