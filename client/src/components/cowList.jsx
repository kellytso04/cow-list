import React from 'react';
import ReactDOM from 'react-dom';
import CowItem from './cowItem.jsx';

// TODO: Build this out
class CowList extends React.Component {
  constructor(props) {
    super(props);
      // { onClick = fn handleCowClick, cows = state.cows }

    this.state = {
      selectedCow: '',
    }

    // √ Bind functions
    this.handleClick = this.handleClick.bind(this);
  }

  // TODO: On click, calls onClick
  handleClick(selectedCow) {
    console.log('Chosen cow: ', selectedCow.name); // should be an {}
    this.props.onClick(selectedCow);
  }

  render() {
    return (
      <div>
        <ul>
          { this.props.cows.map( (cow, i) => (
            < CowItem
              handleClick={this.handleClick}
              key={i}
              cowInfo={cow}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default CowList;