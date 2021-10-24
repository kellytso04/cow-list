import React from 'react';
import ReactDOM from 'react-dom';
import CowList from './components/cowList.jsx';
import CowView from './components/cowView.jsx';
import CowForm from './components/cowForm.jsx';
import axios from 'axios';

// TODO: Set up your App component!
class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cows: [],
      selectedCow: {}
    }

    // Bind methods:
    this.handleCowClick = this.handleCowClick.bind(this);
    this.handleAddNewCowSubmit = this.handleAddNewCowSubmit.bind(this);
  }

  // TODO: On load, make a GET req to the API for cow details
  // √ CowList is going to be results back from the API
  // TODO: CowView is going to display the last entry in the results
  componentDidMount() {
    console.log('Mounting app');

    return axios.get('/api/cows')
      .then( (cows) => {
        console.log('index.jsx | received back cows: ', cows.data);
        this.setState({
          cows: cows.data,
          selectedCow: cows.data[cows.data.length - 1]
        });
      })
      .catch( (err) => {
        console.error('index.jsx | Mount failed')
        console.error(err);
      });
  }

  // On click, will select a new cow to display
  handleCowClick( cow ) {
    console.log('Selected cow: ', cow);
    this.setState({
      cows: this.state.cows,
      selectedCow: cow,
    })
  }

  // Makes POST req to the database with cow info
  handleAddNewCowSubmit( cowInfo ) {
    console.log('Adding new cow: ', cowInfo); // { name: '', description: '' }

    return axios.post('/api/cows', cowInfo)
      .then( () => {
        console.log(`Successfully added ${cowInfo.name}`);

        return axios.get('/api/cows')
          .then( (cows) => {
            console.log('index.jsx | updated cows: ', cows.data);
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
          <CowView selectedCow={this.state.selectedCow} />
        </div>
        <br></br>
        <div>
          <section className='add-cow'>
            <CowForm onSubmit={this.handleAddNewCowSubmit} />
          </section>
          <br></br>
          <section className='cow-list'>
            <h2>Cows go here</h2>
            <CowList onClick={this.handleCowClick} cows={this.state.cows} />
          </section>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));