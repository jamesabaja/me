import React from 'react';

const LANGUAGES = ['HTML', 'CSS', 'JS (ES6)', 'Python', 'Java']
const TOOLS = ['VSCode', 'Git', 'Github']
const FRAMEWORKS = ['React', 'Gatsby', 'Django', 'Bulma', 'Bootstrap']

const Skills = () => (
  <section class="hero is-medium">
    <div class="hero-body">
      <div className='container'>
      <div className='columns'>
        <div className='column' data-aos="fade-right" data-aos-mirror="true">
          <div className='container'>
            <h1 class="title is-size-1">
              <span className='is-underlined'>Skills</span>
            </h1>
            <br/>
            <h2 class="subtitle">
              I've been developing stuff since 2017.
            </h2>
          </div>
        </div>
        <div className='column' data-aos="fade-left" data-aos-mirror="true">
          <div className='container has-text-centered'>
            <div class="tile is-ancestor">
              <div class="tile is-vertical is-parent">
                <div class="tile is-child notification has-shadow is-white">
                  <span class="title is-size-3">Full Stack Development</span>
                  <p className='is-size-5'> I develop sites from the data handling to the design of the interfaces.</p>
                  <br/>
                  <span class="title is-size-4">Languages I Speak</span><br/>
                  {LANGUAGES.map(item => (
                    <>
                    <span class="tag is-light">
                      {item}
                    </span>{' '}
                    </>
                  ))}
                  <br/>
                  <br/>
                  <span class="title is-size-4">Tools I Use</span><br/>
                  {TOOLS.map(item => (
                    <>
                    <span class="tag is-light">
                      {item}
                    </span>{' '}
                    </>
                  ))}
                  <br/>
                  <br/>
                  <span class="title is-size-4">Frameworks I Love</span><br/>
                  {FRAMEWORKS.map(item => (
                    <>
                    <span class="tag is-light">
                      {item}
                    </span>{' '}
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </section>
)

export default Skills;