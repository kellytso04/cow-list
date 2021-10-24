import React from 'react';
import ReactDOM from 'react-dom';

class CowItem extends React.Component {
  constructor(props) {
    super(props);
    // { handleClick = fn cowList.handleClick, key = i, cowInfo = cowObject }

    this.handleDisplayClick = this.handleDisplayClick.bind(this);
  }

  handleDisplayClick() {
    this.props.handleDisplayClick(this.props.cowInfo);
  }

  render() {
    return (
      <li className='cow-details'>
        {this.props.cowInfo.name}  <button onClick={this.handleDisplayClick} className='display-button'>Show me off</button>
        <br></br>
      </li>
    )
  }
}

export default CowItem;