import React, { Component } from "react"

import Flashcard from "./Flashcard"

class FlashcardsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
        arrayOfCards: [],
        guessed: 0,
    }
  }

  handleClick = () => {
    this.setState((state) => ({guessed: state.guessed + 1}))
  }

  getFlashcards = async () => {
    const response = await fetch(`/api/${this.props.match.params.topic}`)
    const body = await response.json()
    this.setState({ arrayOfCards: body.flashcards})
  }

  componentDidMount() {
    this.getFlashcards()
  }

  render () {
    const cards = this.state.arrayOfCards
    return (
      <div>
        <h1>{`Guessed: ${this.state.guessed}`}</h1>
        <div className='flex-container flex-container--start'>
          {cards.length > 0 && cards.map((card) => {
            return <Flashcard handleClick={this.handleClick} key={card.id} logo={card.logo} question={card.question} answer={card.answer} reference={card.reference}/>
          })}
        </div>
      </div>
    )
  }
}   

export default FlashcardsList