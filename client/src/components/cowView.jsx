import React from 'react';
import ReactDOM from 'react-dom';

class CowView extends React.Component {
  constructor(props) {
    super(props);
    // cow, onUpdateClick, onDeleteClick

    this.state = {
      updatedDescription: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
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

  render() {
    return (
      <div>
        <section className='cow-details'>
          <h3>{this.props.cow.name}</h3>
          <h4>{this.props.cow.description}</h4>
        </section>
        <br></br>
        <section className='cow-options'>
          <input type='text' onChange={this.handleChange} placeholder='Update information' value={this.state.updatedDescription} />
          <button onClick={this.handleSubmit}>{`Update ${this.props.cow.name}`}</button>
          <button onClick={this.handleDeleteClick}>{`Delete ${this.props.cow.name}`}</button>
        </section>
      </div>
    )
  }
}

export default CowView;