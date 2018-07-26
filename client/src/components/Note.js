import React, { Component } from "react"

class Note extends Component {
	constructor(props) {
			super(props)
			this.state = {
        id: undefined,
        title: '',
        text: '',
      }
  }

  fetchNote = () => {
    const fetchedNotes = localStorage.getItem('notes')

    if (fetchedNotes !== null) {
      const notes = JSON.parse(fetchedNotes)
      notes.forEach(note => {
        if (note.id === this.props.match.params.id) {
          this.setState({id: note.id, title: note.title, text: note.text})
        }
      })
    }
  } 
 
  componentDidMount() {
    this.fetchNote()
  }

  handleTitle = (e) => {
    this.setState({title: e.target.value})
  }
  handleText = (e) => {
    this.setState({text: e.target.value})
  }

  handleSave = (id) => {
      let notes = this.props.notes.filter(note => note.id !== id)
      notes = notes.concat([{id: this.state.id, title: this.state.title, text: this.state.text}])
      const notesJSON = JSON.stringify(notes)
      localStorage.setItem('notes', notesJSON)
  
      this.props.history.push('/notes')
      this.props.fetchNotes()
    
  }

	render() {
    return (
      <div className='notes'>
        {/* <h1 className='notes__heading'>NOTES</h1>
        {this.props.notes.length > 0 && this.props.notes.map((note) => {
          return <h3 className='notes__title'>{note.titolo}</h3>
        })} */}
        ciao! sono una nota! la numero {this.props.match.params.id}
        <input type="text" value={this.state.title} onChange={this.handleTitle}/>
        <input type="text" value={this.state.text} onChange={this.handleText}/>
        <button onClick={() => this.handleSave(this.props.match.params.id)}>SAVE</button>
        <button onClick={() => console.log("cliccato remove!")}>REMOVE</button>
      </div>
    )
	}
}

export default Note