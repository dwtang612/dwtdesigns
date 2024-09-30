import React from 'react';

function Home() {
  return (
    <div className="home">
      <body>
        <header id="home">
          <h1>Welcome to My Website</h1>
        </header>

        <section id="about">
          <h2>About Me</h2>
          <p>Some information about yourself...</p>
        </section>

        <section id="portfolio">
          <h2>My Work</h2>
          <p>Here is my portfolio...</p>
        </section>

        <div className="contact-container" id="contact">
          <h2>Contact Us</h2>
          <p>If you'd like to find me, feel free to reach out at:</p>
          <a href="mailto:dfwtdesign@gmail.com">dfwtdesign@gmail.com</a>
        </div>
      </body>

    </div>
  );
}

export default Home;
