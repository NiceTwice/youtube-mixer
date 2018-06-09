export const firstAction = (nb) => {
  return {
    type: 'SET_TMP',
    payload: {
      tmp: nb
    }
  }
};