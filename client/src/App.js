import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import FlashcardsList from './components/FlashcardsList'
import LandingPage from './components/LandingPage'
import Header from './components/Header'
import Notes from './components/Notes'
import Note from './components/Note'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: []
    }
  }
  componentDidMount() {
    //// Get the notes from localStorage
    // const notes = [
    //   {
    //     id: 0,
    //     titolo: 'la mia prima nota nuova'
    //   },
    //   {
    //     id: 1,
    //     titolo: 'la mia seconda nota'
    //   },
    // ]
    // const notesJSON = JSON.stringify(notes)
    // localStorage.setItem('notes', notesJSON)
    // const nuoveNote = localStorage.getItem('notes')
    // const note = JSON.parse(nuoveNote)

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
            <Route path="/notes" render={ props => <Notes {...props} notes={this.state.notes} /> }/>
            <Route path="/flashcards/:topic" render={ props => <FlashcardsList {...props} notes={this.state.notes}/> }/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
