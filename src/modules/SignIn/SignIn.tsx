const SignIn = () => {
  return (
    <div className="iphone-plus">
      <div className="home-indicator">
        <div className="div"></div>
      </div>
      <div className="frame">
        <div className="label">Email Address</div>
        <div className="input">
          <div className="div-wrapper">
            <div className="text-wrapper">Enter Value</div>
          </div>
        </div>
      </div>
      <div className="frame-2">
        <div className="label">Password</div>
        <div className="input">
          <div className="div-wrapper">
            <div className="text-wrapper">Enter Value</div>
          </div>
        </div>
      </div>
      <p className="p">Don’t have an account? Sign Up</p>
      <button className="button">
        <div className="title">Sign In</div>
      </button>
      <div className="frame-3">
        <div className="frame-4">
          <div className="rectangle"></div>
          <div className="text-wrapper-2">Remember me</div>
        </div>
        <div className="text-wrapper-2">Forgot Password?</div>
      </div>
      <div className="text-wrapper-3">Sign In</div>
      <img
        className="istockphoto"
        src="img/istockphoto-1336154952-1024x1024-transformed-clipdrop-enhance-1.png"
        alt="iStockphoto"
      />
      <div className="status-bar">
        <div className="battery">
          <div className="overlap-group">
            <div className="capacity"></div>
          </div>
          <img className="cap" src="img/cap.svg" alt="Battery Cap" />
        </div>
        <img className="wifi" src="img/wifi.svg" alt="Wi-Fi" />
        <img
          className="cellular-connection"
          src="img/cellular-connection.svg"
          alt="Cellular Connection"
        />
        <div className="time-style">
          <div className="time">9:41</div>
        </div>
      </div>
    </div>
  )
}

export default SignIn