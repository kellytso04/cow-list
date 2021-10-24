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
  handleClick(e) {
    console.log('Chosen cow: ', e.target.value); // should be an {}
    this.props.onClick(e.target.value);
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