import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {countryClick} from '../redux/actions/actions';
import {getMatches} from './fetch_matches';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryCode: ''
    }
  }
  onChange = (event) => {
    this.setState({
      countryCode:event.target.value
    })
  }
  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.countryClick();
    this.props.getMatches(this.state.countryCode);
    this.setState({
      countryCode: ''
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type='text' onChange={this.onChange} placeholder="Enter country code" value={this.state.countryCode}/>
          <br />
          <button type='submit'>Search</button>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getMatches, countryClick}, dispatch);
}

export default connect(null, mapDispatchToProps)(Search);
