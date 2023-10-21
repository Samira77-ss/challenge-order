import "./App.css";

function App() {
  return (
    <div className="App">
      <img
        src="https://order-summary-component-avi.netlify.app/images/pattern-background-desktop.svg"
        className="bg-pc"
      />
      <div className="container">
        <img
          src="https://order-summary-component-mavix.netlify.app/images/illustration-hero.svg"
          alt="music"
        />
        <div className="order">
          <h1>Order Summary</h1>
          <p>
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
          <div className="plan">
            {" "}
            <div className="row">
              {" "}
              <div className="col-3">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQrg_Ng-Teh2gyKiwTDCMrbsAu3BRBubrc3w&usqp=CAU"
                  className="music-icon"
                  alt="MusicIcon"
                />
              </div>
              <div className="col-3 annual">
                {" "}
                <h5>Annual&nbsp;Plan</h5>
                <h6>$59.99/year</h6>
              </div>
              <div className="col-6">
                {" "}
                <a href="/" rel="noreferrer" className="change">
                  Change
                </a>
              </div>
            </div>
          </div>

          <button className="btn btn-primary">Proceed to Payment</button>
          <div className="cancel">Cancel Order</div>
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
    </div>
  );
}

export default App;
