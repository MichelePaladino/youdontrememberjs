import React from "react";

import FlashcardsBox from './FlashcardsBox'
import Notes from "./Notes"
import './LandingPage.css'

const LandingPage = (props) => {
    return (
      <div>
        <div className="hero">
          <div className="hero__title-box">
           <h1 className="hero__title">
            <span className="hero__title--main">Flashcards</span>
            <span className="hero__title--sub">You will remember</span>
           </h1>
          </div>
        </div>
        <div className='landing__main'>
          <section className="landing__main__notes">
            <Notes notes={props.notes}/> 
          </section>
          <section className="landing__main__flashcards">
            <FlashcardsBox/> 
          </section>
        </div>
      </div>
    )
}   

export default LandingPage