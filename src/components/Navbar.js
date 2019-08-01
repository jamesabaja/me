import React from 'react';

const Navbar = () => (
  <nav class="navbar is-transparent is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="#home">
        James Abaja
      </a>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-end">
      <a class="navbar-item" href="#about">
        <div class="is-navbar-item">About</div>
      </a>
      <a class="navbar-item" href="#skills">
        Skills
      </a>
      <a class="navbar-item" href="#projects">
        Projects
      </a>
    </div>
  </nav>
)

export default Navbar;