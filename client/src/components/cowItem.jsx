import React from 'react';
import ReactDOM from 'react-dom';

class CowItem extends React.Component {
  constructor(props) {
    super(props);
    // { handleClick = fn cowList.handleClick, key = i, cowInfo = cowObject }

  }

  render() {
    return (
      <li className='cow-details'>
        {this.props.cowInfo.name}
        <button onClick={this.props.handleClick}>Show me off</button>
      </li>
    )
  }
}

export default CowItem;