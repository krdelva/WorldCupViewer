import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {countryClick} from '../redux/actions/actions';
import {getMatches} from './fetch_matches';
import {mapStateToProps} from '../redux/store';

class Matches extends Component {
  render() {
    return (
      <div>
        <div>{this.props.matches[1] ? <ul>{this.props.matches.map((ele, i) => {
          return (
            <div key={i} className="matches-list">
              <p>{ele.datetime}</p>
              <li>{ele.home_team.country} <strong>{ele.home_team.goals}</strong> vs <strong>{ele.away_team.goals}</strong> {ele.away_team.country}</li>
              <p>Winner: {ele.winner}</p>
            </div>
          )
        })}</ul> :
          this.props.loader ? <img className='center-img' src={require('../images/loading.gif')} alt='Loading GIF' width='400' height='400' /> : this.props.error ? <p>Error obtaining results for country code provided!</p> :
        ""}</div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getMatches, countryClick}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Matches);
