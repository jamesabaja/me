import React from 'react';

const Projects = ({ref}) => (
  <section class="hero is-medium" ref={ref}>
    <div class="hero-body">
      <div class="container">
        <h1 class="subtitle is-size-1">
          These are some of my projects.
        </h1>
        <h2 class="subtitle">
          These range from mobile apps to web apps.
        </h2>
      </div>
      <br/>
      <div class="tile is-ancestor">
        <div class="tile is-4 is-vertical is-parent">
          <div class="tile is-child notification is-success has-shadow">
            <p class="subtitle is-size-3">UPCC</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
          </div>
        </div>
        <div class="tile is-4 is-vertical is-parent">
          <div class="tile is-child notification is-success has-shadow">
            <p class="subtitle is-size-3">Inside the Club</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
          </div>
        </div>
        <div class="tile is-4 is-vertical is-parent">
          <div class="tile is-child notification is-success has-shadow">
            <p class="subtitle is-size-3">Medikts</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Projects;