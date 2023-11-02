import "./Card.css";
import musicIcon from "./image/icon-music.svg";
import hero from "./image/illustration-hero.svg";
import desktop from "./image/pattern-background-desktop.svg";
import mobile from "./image/pattern-background-mobile.svg";
function Card() {
  return (
    <div className="container">
      <img src={desktop} alt="bg-desktop" class="bg-pc" />
      <img src={mobile} alt="bg-mobile" class="bg-mobile" />
      <div className="card">
        <div className="image">
          <img src={hero} alt="hero" />
        </div>
        <div className="content">
          <h2>Order Summary</h2>
          <p>
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
          <div className="order">
            <div className="leftSide">
              <img src={musicIcon} alt="music icon" />
              <div className="plan">
                <span className="annual">Annual Plan</span>
                <span className="year">$59.99/year</span>
              </div>
            </div>
            <a href="/">Change</a>
          </div>
          <button className="btn">Proceed to Payment</button>
          <p className="cancelOrder">Cancel Order</p>
        </div>
      </div>
      <footer>
        This page was coded by Samira Seyfi
        <a
          href="https://github.com/Samira77-ss/challenge-order"
          target="_blank"
          alt="GithHub Profile"
          rel="noreferrer"
        >
          open-source-code on GitHub
        </a>
        , and hosted on
        <a
          href="https://resonant-medovik-e01702.netlify.app"
          alt="Netlify link"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}

export default Card;
