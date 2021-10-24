import React from 'react';
import ReactDOM from 'react-dom';
import CowItem from './cowItem.jsx';

class CowList extends React.Component {
  constructor(props) {
    super(props)
      // { cows = state.cows, onXxclick = fn Xxcow }

    this.state = {
      selectedCow: '',
    }

    // √ Bind functions
    this.handleDisplayClick = this.handleDisplayClick.bind(this);
  }

  // √ On click, calls onClick
  handleDisplayClick(selectedCow) {
    this.props.onDisplayClick(selectedCow);
  }

  render() {
    return (
      <div>
        <ul>
          { this.props.cows.map( (cow, i) => (
            < CowItem
              key={i}
              cowInfo={cow}
              handleDisplayClick={this.handleDisplayClick}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default CowList;