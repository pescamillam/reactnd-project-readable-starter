import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSortTypeAction } from '../actions';

class Order extends Component {

  sort = (sortType) => {
    return this.props.sortAction(sortType);
  };

  sortByTitleAZ = () => {
    return this.sort('titleAZ');
  };

  sortByTitleZA = () => {
    return this.sort('titleZA');
  };

  sortByScore0n = () => {
    return this.sort('score0n');
  };

  sortByScoren0 = () => {
    return this.sort('scoren0');
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
        <div className={this.sortItemClassName('titleAZ')} onClick={this.sortByTitleAZ}>title A-Z</div>
        <div className={this.sortItemClassName('titleZA')} onClick={this.sortByTitleZA}>title Z-A</div>
        <div className={this.sortItemClassName('score0n')} onClick={this.sortByScore0n}>score 0..n</div>
        <div className={this.sortItemClassName('scoren0')} onClick={this.sortByScoren0}>score n..0</div>
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