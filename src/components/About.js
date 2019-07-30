import React from 'react'
import me from '../assets/me.jpg'
import grad from '../assets/grad.jpg'

const About = () => (
  <section class="hero">
    <div class="hero-head">
      <div class="container has-text-centered is-padded">
        <div class="tile is-ancestor" data-aos="fade-up" data-aos-mirror="true" >
          <div class="tile is-vertical is-parent">
            <div class="tile is-child notification has-shadow is-white">
              <h1 class="title is-size-1">
                <span className='is-underlined'>About</span>
              </h1>
              <br/>
              <div>
                <img src={me} className='is-circular is-disappearing over'/> 
                <img src={grad} className='is-circular under'/> 
              </div>
              <br/>
              <p className='is-size-5'>I am a BS Computer Science graduate from UP Diliman. I started my programming journey at the early age of 12, where I pressed Ctrl+S to save my very first HTML site.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='hero-body'>

    </div>
  </section>
)

export default About;