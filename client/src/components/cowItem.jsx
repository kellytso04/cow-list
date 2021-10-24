import React from 'react';
import ReactDOM from 'react-dom';

class CowItem extends React.Component {
  constructor(props) {
    super(props);
    // { handleClick = fn cowList.handleClick, key = i, cowInfo = cowObject }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleClick(this.props.cowInfo);
  }

  render() {
    return (
      <li className='cow-details'>
        {this.props.cowInfo.name}  <button onClick={this.handleClick}>Show me off</button>
      </li>
    )
  }
}

export default CowItem;