import React from 'react';

const Timeline = () => (
  <section class="hero is-medium" id='projects'>
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-size-1" data-aos="fade-right" data-aos-mirror="true">
          <span className='is-underlined'>Experience</span>
        </h1>
      </div>
      <br/>
      <br/>
      <div class="timeline is-centered">
        {/* <header class="timeline-header">
          <span class="tag is-medium is-primary">2017</span>
        </header>
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <p class="heading">January 2016</p>
            <p>Timeline content - Can include any HTML element</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-marker is-image is-32x32">
            <img src="http://bulma.io/images/placeholders/32x32.png"/>
          </div>
          <div class="timeline-content">
            <p class="heading">February 2016</p>
            <p>Timeline content - Can include any HTML element</p>
          </div>
        </div> */}
        <header class="timeline-header" data-aos="fade-up" data-aos-mirror="true">
          <span class="tag is-medium is-primary">2018</span>
        </header>
        <div class="timeline-item" data-aos="fade-up" data-aos-mirror="true">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <p class="heading">June 2018 - July 2018</p>
            <p class="title">IT Intern</p>
            <p class="subtitle">MedGrocer</p>            
          </div>
        </div>
        <div class="timeline-item" data-aos="fade-up" data-aos-mirror="true">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <p class="heading">August 2018 - Present</p>
            <p class="title">Project Manager /<br/>Full Stack Developer</p>
            <p class="subtitle">UP IE Club</p>            
          </div>
        </div>
        <div class="timeline-item" data-aos="fade-up" data-aos-mirror="true">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <p class="heading">September 2018 - May 2019</p>
            <span class="title">Project Manager /<br/>Front-end Developer<br/></span>
            <span class="subtitle">System Modeling and Simulation Laboratory</span>
            <p class="subtitle is-size-6"><i>SDG Interactions Survey</i></p>           
          </div>
        </div>
        <header class="timeline-header" data-aos="fade-up" data-aos-mirror="true">
          <span class="tag is-medium is-primary">2019</span>
        </header>
        <div class="timeline-item" data-aos="fade-up" data-aos-mirror="true">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <p class="heading">May 2019 - Present</p>
            <p class="title">Associate IT Manager</p>
            <p class="subtitle">MedGrocer</p>            
          </div>
        </div>
        {/* <div class="timeline-item">
          <div class="timeline-marker is-icon">
            <i class="fa fa-flag"></i>
          </div>
          <div class="timeline-content">
            <p class="heading">March 2017</p>
            <p>Timeline content - Can include any HTML element</p>
          </div>
        </div> */}
        <div class="timeline-header" data-aos="fade-up" data-aos-mirror="true">
          <span class="tag is-medium is-primary">👨‍💻</span>
        </div>
      </div>
    </div>
  </section>
)

export default Timeline;