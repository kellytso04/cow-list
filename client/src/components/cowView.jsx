import React from 'react';
import ReactDOM from 'react-dom';

class CowView extends React.Component {
  constructor(props) {
    super(props);
    // cow, cows, onUpdateClick, onDeleteClick

    this.state = {
      updatedDescription: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.renderFuckingButtons = this.renderFuckingButtons.bind(this);
  }

  // √ Calls updateCow in app to make PUT req to the database
  handleSubmit() {
    this.props.onSubmit(this.props.cow, this.state.updatedDescription);

    this.setState({
      ...this.state,
      updatedDescription: ''
    });
  }

  // On input change, updates state
  handleChange(e) {
    this.setState({
      ...this.state,
      updatedDescription: e.target.value
    })
  }

  handleDeleteClick() {
    this.props.onDeleteClick(this.props.cow);
  }

  renderFuckingButtons() {
    if (this.props.cows.length) {
      return (
        <section className='cow-options'>
          <input type='text' onChange={this.handleChange} placeholder='Update information' value={this.state.updatedDescription} />
          <button onClick={this.handleSubmit}>{`Update ${this.props.cow.name}`}</button>
          <button onClick={this.handleDeleteClick}>{`Delete ${this.props.cow.name}`}</button>
        </section>
      )
    } else {
      return ( <div>Add a cow or suffer the consequences</div> )
    }
  }

  render() {
    return (
      <div>
        <section className='cow-details'>
          <h3>{this.props.cow.name}</h3>
          <h4>{this.props.cow.description}</h4>
        </section>
        <br></br>
        {this.renderFuckingButtons()}
      </div>
    )
  }
}

export default CowView;