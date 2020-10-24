import React from 'react';

function Home() {
  return (
    <div className="Content">
      <h1 style={{
        marginBottom: '0',
        fontWeight: 'lighter',
        fontSize: '2rem',
        paddingLeft: '2.5rem'
      }}>Blake Madigan</h1>
      <p style={{
        marginTop:'0',
        marginBottom: '.5rem',
        fontSize: '1.5rem',
        fontWeight: 'bold'
      }}>Full-Stack Developer</p>
      {/* 
      <p class="material-icons" style={{
        marginTop:'0',
        fontSize: '1.5rem',
        fontWeight: 'bold'
      }}>facebook instagram</p>
      */}
      <div className="social">
      <a href="https://www.instagram.com/lordedresdemorte/?hl=en"><i class="fab fa-instagram"></i></a>
      <a href="https://www.facebook.com/blake.madigan.93/"><i class="fab fa-facebook"></i></a>
      <a href="https://www.linkedin.com/in/blake-madigan-563a87176/"><i class="fab fa-linkedin"></i></a>
      <a href="https://github.com/BlakeMadigan"><i class="fab fa-github"></i></a>
      </div>
    </div>
  );
}

export default Home;
