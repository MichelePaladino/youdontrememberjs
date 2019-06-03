import React, { Component } from "react"

import './Note.css'

class Note extends Component {
	constructor(props) {
			super(props)
			this.state = {
        id: '',
        title: '',
        text: '',
        editing: false,
        init: true,
      }
  }

  fetchNote = () => {
    const fetchedNotes = localStorage.getItem('notes')

    if (fetchedNotes !== null) {
      const notes = JSON.parse(fetchedNotes)
      notes.forEach(note => {
        if (note.id === this.props.match.params.id) {
          this.setState({id: note.id, title: note.title, text: note.text, init: note.init, editing: note.editing})
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
      notes = notes.concat([{id: this.props.match.params.id, title: this.state.title, text: this.state.text, init: false, editing: false}])
      const notesJSON = JSON.stringify(notes)
      localStorage.setItem('notes', notesJSON)
  
      this.props.history.push('/notes')
      this.props.fetchNotes()
  }

  handleRemove = (id) => {
    const notes = this.props.notes.filter(note => note.id !== id)
    const notesJSON = JSON.stringify(notes)
    localStorage.setItem('notes', notesJSON)

    this.props.history.push('/notes')
    this.props.fetchNotes()
}

	render() {
    const editing = this.state.editing;
    const title = this.state.title;
    const text = this.state.text;
    const init = this.state.init;
    const id = this.props.match.params.id;

    let toShow;
    if (editing || init) {
      toShow = (
        <div className='note-box'>
          <div>
            <label for="title">Title</label>
            <input type="text" name='title' placeholder='Title of your note' value={title} onChange={this.handleTitle} style={{width:'90%', height:'30px', marginLeft:'1rem', paddingLeft:'1rem', marginBottom: '1.4rem'}}/>
          </div>
          <div>
            <label for="text">Text</label>
            <input type="text" name='text' placeholder='Text of your note' value={text} onChange={this.handleText} style={{width:'90%', height:'30px', marginLeft:'1rem', paddingLeft:'1rem'}}/>
          </div>
          <div className='note-box__buttons'>
            <button className='note-box__button note-box__button--save' onClick={() => {
                    
              this.handleSave(id);

            }}>SAVE</button>
            <button className='note-box__button note-box__button--remove' onClick={() => this.handleRemove(id)}>REMOVE</button>
          </div>
         </div>
      )         
    } else {
      toShow = (
        <div className='note-box'>
          <div className="note-box__title">{title}</div>
          <div className="note-box__text">{text}</div>
          <div className='note-box__mid-button'>
           <button className='note-box__button note-box__button--edit' onClickCapture={() => this.setState({editing: true})}>EDIT</button>
          </div>
        </div>
      )
    }

    return (
        toShow
    )
	}
}

export default Note