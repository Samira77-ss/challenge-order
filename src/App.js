import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <img src="https://order-summary-component-mavix.netlify.app/images/illustration-hero.svg" />
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
                <a href="#">Change</a>
              </div>
            </div>
          </div>

          <button className="btn btn-primary">Proceed to Payment</button>
          <div className="cancel">Cancel Order</div>
        </div>
      </div>
    </div>
  );
}

export default App;
