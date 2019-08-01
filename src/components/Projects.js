import React from 'react';

const Projects = ({ref}) => (
  <section class="hero is-medium" ref={ref} id='projects'>
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-size-1">
          <span className='is-underlined'>Projects</span>
        </h1>
      </div>
      <br/>
      <br/>
      <div class="tile is-ancestor">
        <div class="tile is-4 is-vertical is-parent">
          <div class="tile is-child notification is-white has-shadow">
            <p class="subtitle is-size-3">UPCC</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
          </div>
          <div class="tile is-child notification is-white has-shadow">
            <p class="subtitle is-size-3">SOCKnet</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
          </div>
        </div>
        <div class="tile is-4 is-vertical is-parent">
          <div class="tile is-child notification is-white has-shadow">
            <p class="subtitle is-size-3">Inside the Club</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
          </div>
          <div class="tile is-child notification is-white has-shadow">
            <p class="subtitle is-size-3">SDG Interactions Survey</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
          </div>
        </div>
        <div class="tile is-4 is-vertical is-parent">
          <div class="tile is-child notification is-white has-shadow">
            <p class="subtitle is-size-3">Medikts</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Projects;