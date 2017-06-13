
const combReducer = (state = {matches: [], loader: false, error: false}, action) => {
  switch(action.type) {
    case 'COUNTRY_CLICK':
      return {...state, loader: true, matches: [], error: false}
    case 'FETCH_MATCHES':
      return {...state, matches: action.data, loader: false};
    case 'MATCHES_ERR':
      return {...state, error: true, loader: false};
    default:
      return state;
  }
}

export default combReducer;
