import React, { Component } from "react"

import Flashcard from "./Flashcard"

import './FlashcardsList.css'

class FlashcardsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
        arrayOfCards: [],
        guessed: 0,
        batch: 0,
        toShuffle: true,
    }
  }

  getFlashcards = async () => {
    const response = await fetch(`/api/${this.props.match.params.topic}`)
    const body = await response.json()
    this.setState({ arrayOfCards: body.flashcards })
  }

  componentDidMount() {
    this.getFlashcards()
  }

  render () {
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]]; 
      }
    }
    function sliceArray(array, prevNumber, number) {
      return array.slice(prevNumber, prevNumber + number)
    }
    // this.state.toShuffle && shuffleArray(this.state.arrayOfCards)
    let cards = sliceArray(this.state.arrayOfCards, this.state.batch, 6)
   
    return (
      <div className='FlashCardList'>
        <div className='card-container'>
          {cards.length > 0 && cards.map((card) => {
            return <Flashcard handleClick={this.handleClick} key={card.id} logo={card.logo} question={card.question} answer={card.answer} reference={card.reference}/>
          })}
        </div>
        <div className='load-more'>       
          <button className='load-more__button' onClick={() => {
          this.setState((currState) => ({batch: currState.batch + 6, toShuffle: false}));
          sliceArray(this.state.arrayOfCards, this.state.batch, 6)
          }}>LOAD MORE</button>
        </div>
      </div>
    )
  }
}   

export default FlashcardsList