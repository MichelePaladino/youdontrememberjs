import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import FlashcardsList from './components/FlashcardsList'
import LandingPage from './components/LandingPage'
import Header from './components/Header'
import Note from './components/Note'
import NotesPage from './components/NotesPage'
import Footer from './components/Footer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: []
    }
  }
  componentDidMount() {
    this.fetchNotes()
  }

  fetchNotes = () => {
    const fetchedNotes = localStorage.getItem('notes')

    if (fetchedNotes !== null) {
      const notes = JSON.parse(fetchedNotes)
      this.setState({notes})
    }
  }

  componentDidUpdate() {
    console.log('from App.js: componentDidUpdate')
    // this.fetchNotes()
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header/>
          <Switch>
            <Route path="/" exact render={ props => <LandingPage {...props} notes={this.state.notes} /> }/>
            <Route path="/notes/:id" render={ props => <Note {...props} notes={this.state.notes} fetchNotes={this.fetchNotes} /> }/>
            <Route path="/notes" render={ props => <NotesPage {...props} notes={this.state.notes} /> }/>
            <Route path="/flashcards/:topic" render={ props => <FlashcardsList key={Date.now()} {...props} notes={this.state.notes}/> }/>
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
