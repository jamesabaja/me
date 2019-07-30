import React from 'react';

const Home = ({scrollMethods}) => (
  <section class="hero is-large">
    <div class="hero-body">
      <div class="container">
        <h1 class="is-size-1 animated slideInLeft">
          Hi there, I'm James.
        </h1>
        <p class="is-size-3 animated slideInLeft delay-1s">
          I'm a Full-Stack Developer.
        </p>
        <p class="animated slideInLeft delay-2s">
          I develop websites and applications.
        </p>
        <p class="animated slideInLeft delay-2s">
          I also code for daily learning and sustenance.
        </p>
        <br/>
        <p class="animated slideInLeft delay-2s">
          <button class="button is-primary" onClick={scrollMethods[0]}>About</button>
        </p>
      </div>
    </div>
  </section>
)

export default Home;