import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSortTypeAction } from '../actions';
import { TITLE_AZ, TITLE_ZA, SCORE_0N, SCORE_N0} from "../utils/sortFunctions";

class Order extends Component {

  sort = (sortType) => {
    return this.props.sortAction(sortType);
  };

  sortByTitleAZ = () => {
    return this.sort(TITLE_AZ);
  };

  sortByTitleZA = () => {
    return this.sort(TITLE_ZA);
  };

  sortByScore0n = () => {
    return this.sort(SCORE_0N);
  };

  sortByScoren0 = () => {
    return this.sort(SCORE_N0);
  };

  sortItemClassName = (sortType) => {
    if (sortType === this.props.sort.sortType) {
      return "sort-item-selected";
    } else {
      return "sort-item";
    }
  };

  render() {
    return (
      <div className="sort-container">
        <div className="sort-label">Sort:</div>
        <div className={this.sortItemClassName(TITLE_AZ)} onClick={this.sortByTitleAZ}>title A-Z</div>
        <div className={this.sortItemClassName(TITLE_ZA)} onClick={this.sortByTitleZA}>title Z-A</div>
        <div className={this.sortItemClassName(SCORE_0N)} onClick={this.sortByScore0n}>score 0..n</div>
        <div className={this.sortItemClassName(SCORE_N0)} onClick={this.sortByScoren0}>score n..0</div>
      </div>
    );
  }
}

const mapStateToProps = ({sort}) => {
  return {
    sort
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    sortAction: (sortType) => dispatch(setSortTypeAction(sortType))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Order)