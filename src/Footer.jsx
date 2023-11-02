import React from 'react'
import "./Footer.css"
function Footer() {
  return (
    <div>
      <div className="footer-container">
      <hr />
      <div className="img_font_icons">
        {/* <div>
          <p>Download apps</p>
          <img
          className='footer-img'
            width="45px"
            height="15"
            src="https://www.zee5.com/images/play_store.png?ver=2.51.65"
            alt="playstore"
          />
          <img
           className='footer-img'
            width="123px"
            height="37"
            src="https://www.zee5.com/images/app_store.png?ver=2.51.65"
            alt="applestore"
          />
        </div> */}
      
      </div>

      <div className="footer-contents">
        <div>
          <p>Popular TVShows</p>
          <div>
            <a href="/">Kumkum Bhagya</a>
          </div>
          <div>
            {" "}
            <a href="/">Kundali Bhagya</a>
          </div>
          <div>
            <a href="/">Bhagya Lakshmi</a>
          </div>
          <div>
            <a href="/">Tujhse Hai Rabta</a>
          </div>
          <div>
            <a href="/">Kyun Riston me Khatti Batti</a>
          </div>
        </div>
        <div>
          <p>Premium Movies</p>
          <div>
            <a href="/">Kyun Meri Sonam Gupta Bewafa Hai</a>
          </div>
          <div>
            {" "}
            <a href="/">Helmet</a>
          </div>
          <div>
            <a href="/">200 Halla Ho</a>
          </div>
          <div>
            <a href="/">14 Phere</a>
          </div>
          <div>
            <a href="/">Dial 100</a>
          </div>
        </div>
        <div>
          <p>Popular LIVE TV Channels</p>
          <div>
            <a href="/">Ajj Tak</a>
          </div>
          <div>
            {" "}
            <a href="/"> Zee News</a>
          </div>
          <div>
            <a href="/">Zee Tv HD</a>
          </div>
          <div>
            <a href="/">&TV HD</a>
          </div>
          <div>
            <a href="/">Zee Marathi HD</a>
          </div>
        </div>
        <div>
          <p>Popular Web Series</p>
          <div>
            <a href="/">Sunflower</a>
          </div>
          <div>
            {" "}
            <a href="/">Jeet Ki Zid</a>
          </div>
          <div>
            <a href="/">Bichoo Ka Khel</a>
          </div>
          <div>
            <a href="/">State of Seige</a>
          </div>
          <div>
            <a href="/">Naxalbari</a>
          </div>
        </div>
        <div>
          <p>Bollywood Top Celebrities</p>
          <div>
            <a href="/">Suuny Leone</a>
          </div>
          <div>
            {" "}
            
            <a href="/">Disha patani</a>
          </div>
          <div>
            <a href="/">Deepika Padukone</a>
          </div>
          <div>
            <a href="/">Salman Khan</a>
          </div>
          <div>
            <a href="/">Nora Fatehi</a>
          </div>
        </div>
      </div>
      <div>
        <div className='footer-last'>
          <p>
            Best viewed on Google Chrome 80+, Microsoft Edge 81+, Mozilla
            Firefox 75+, Safari 5.1.5+
          </p>
        </div>
        <div className='footer-last'>
          <p>
            Copyright © 2022 Zee Entertainment Enterprises Ltd. All rights
            reserved.
          </p>
        </div>
        <br />
      </div>
    </div>
    </div>
  )
}

export default Footer
