import React from 'react';
import ReactDOM from 'react-dom';

// TODO: Build this out
class CowForm extends React.Component {
  constructor(props) {
    super(props); // onSubmit = add new cow fn

    this.state = {
      name: '',
      description: ''
    }

    // √ Bind functions
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value,
      description: this.state.description
    })
  }

  handleDescriptionChange(e) {
    this.setState({
      name: this.state.name,
      description: e.target.value,
    })
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <div>
        <h2>Wanna see your cow here?</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleNameChange}
            type='text'
            placeholder='Name'
          />
          <input
            onChange={this.handleDescriptionChange}
            type='text'
            placeholder='Description'
          />
          <button type='submit'>Add me!</button>
        </form>
      </div>
    )
  }
}

export default CowForm;