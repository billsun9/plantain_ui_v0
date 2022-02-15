export const InputForm = (props) => {
    return (
        <div id="inputform">
            <div className="wrapper">
                <h2>Registration</h2>
                <form action="" onsubmit="submitForm(e)">
                <div className="input-box">
                    <input type="text" placeholder="Enter your name" required />
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Enter your email" required />
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Camera" required />
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Microphone" required />
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Lighting" />
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Keyboard" />
                </div>
                <div className="policy">
                    <input type="checkbox" />
                    <h3>I accept all <a href="./terms.html" target="_blank">terms & condition</a></h3>
                </div>
                <div className="input-box button">
                    <input type="Submit" value="Register Now" />
                </div>
                </form>
            </div>
        </div>
        
    );
  };
  