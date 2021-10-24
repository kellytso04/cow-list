import React from 'react';
import ReactDOM from 'react-dom';
import CowList from './components/cowList.jsx';
import CowView from './components/cowView.jsx';
import CowForm from './components/cowForm.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cows: [],
      selectedCow: {}
    }

    // Bind methods:
    this.displayCow = this.displayCow.bind(this);
    this.updateCow = this.updateCow.bind(this);
    this.deleteCow = this.deleteCow.bind(this);
    this.submitNewCow = this.submitNewCow.bind(this);
  }

  // √ On load, make a GET req to the API for cow details
  // √ CowList is going to be results back from the API
  // √ CowView is going to display the last entry in the results
  componentDidMount() {
    return axios.get('/api/cows')
      .then( (cows) => {
        this.setState({
          cows: cows.data,
          selectedCow: cows.data[0] || {}
        });
      })
      .catch( (err) => {
        console.error('index.jsx | Mount failed')
        console.error(err);
      });
  }

  // √ On click, will select a new cow to display
  displayCow( cow ) {
    this.setState({
      cows: this.state.cows,
      selectedCow: cow,
    })
  }

  // On click, updates record in database
  updateCow(cow, updatedDescription) {
    axios.put('/api/cows', {name: cow.name, description: updatedDescription})
      .then( () => {
        return axios.get('/api/cows')
          .then( (cows) => {
            this.setState({
              cows: cows.data,
              selectedCow: { name: cow.name, description: updatedDescription } || {}
            })
          })
          .catch( (err) => {
            console.error('index.jsx | failed to get updated cows')
          });
      })
      .catch( (err) => {
        console.error('index.jsx | failed to update cow')
      })
  }

  // √ On click, will delete record in database
  deleteCow( cow ) {
    axios.delete(`/api/cows?name=${cow.name}`)
      .then( () => {
        return axios.get('/api/cows')
          .then( (cows) => {
            this.setState({
              cows: cows.data,
              selectedCow: cows.data[0] || {}
            })
          })
          .catch( (err) => {
            console.error('index.jsx | failed to get updated cows')
          });
      })
      .catch( (err) => {
        console.error('index.jsx | failed to delete cow');
      })
  }

  // √ Makes POST req to the database with cow info
  submitNewCow( cowInfo ) {
    return axios.post('/api/cows', cowInfo)
      .then( () => {

        return axios.get('/api/cows')
          .then( (cows) => {
            this.setState({
              cows: cows.data,
              selectedCow: cows.data[cows.data.length - 1]
            });
          })
          .catch( (err) => {
            console.error('index.jsx | failed to update cows');
          })
      })
      .catch( (err) => {
        console.error('index.jsx | failed to add cow');
      })
  }

  render() {
    return (
      <div>
        <div className='cow-display'>
          <h1>Special cow go here</h1>
          <CowView
            cows={this.state.cows}
            cow={this.state.selectedCow}
            onSubmit={this.updateCow}
            onDeleteClick={this.deleteCow}
          />
        </div>
        <br></br>
        <div>
          <section className='add-cow'>
            <CowForm onSubmit={this.submitNewCow} />
          </section>
          <br></br>
          <section className='cow-list'>
            <h2>Cows go here</h2>
            <CowList
              cows={this.state.cows}
              onDisplayClick={this.displayCow}
            />
          </section>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));