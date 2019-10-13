import React from "react";
import me from "../assets/me.png";
import Navbar from "./Navbar";

const Home = () => (
  <section class="hero is-fullheight" id="home">
    {/* <div class="hero-head"> 
      <Navbar />
    </div> */}
    <div class="hero-body">
      <div class="container is-padded-bottom">
        <img
          data-aos="fade-down"
          data-aos-duration="1500"
          data-aos-mirror="true"
          src={me}
          className="is-circular-v2"
        />
        <h1
          class="is-size-1"
          data-aos="fade-down"
          data-aos-duration="1500"
          data-aos-mirror="true"
        >
          Hi there, I'm James.
        </h1>
        <p
          class="is-size-3"
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-mirror="true"
        >
          I'm a Full-Stack Developer based in Manila, 🇵🇭.
        </p>
        <p data-aos="fade-up" data-aos-duration="1500" data-aos-mirror="true">
          I develop websites and applications.
        </p>
        <p data-aos="fade-up" data-aos-duration="1500" data-aos-mirror="true">
          I also code for daily learning and sustenance.
        </p>
        <br />
      </div>
    </div>
  </section>
);

export default Home;
