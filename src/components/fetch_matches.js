import $ from 'jquery';

const rootURL = 'https://worldcup.sfg.io/matches/country?fifa_code=';

export const getMatches = (countryCode) => {
  console.log('fetching');
  return (dispatch) => {
    $.ajax({
      dataType: 'jsonp',
      type: 'GET',
      headers: {'Access-Control-Allow-Origin' : '*'},
      url: rootURL + countryCode.toUpperCase(),
      success: (data, textStatus, jqXHR) => {
        console.log(data);
        dispatch({
          type: 'FETCH_MATCHES',
          data
        });
      },
      error: (jqXHR, textStatus, errorThrown) => {
        console.log(errorThrown);
        dispatch({
          type: 'MATCHES_ERR',
          errorThrown
        });
      }
    });
  }
}
