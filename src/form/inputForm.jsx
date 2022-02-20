import { useState } from 'react';

var axios = require('axios');

export const InputForm = (props) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [camera, setCamera] = useState("");
    const [microphone, setMicrophone] = useState("");
    const [lighting, setLighting] = useState("");
    const [keyboard, setKeyboard] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name === '' || email === '') alert("enter name and email");
        else {
            var data = JSON.stringify({
                "name": name, 
                "email": email,
                "camera": camera,
                "microphone": microphone,
                "lighting": lighting,
                "keyboard": keyboard
            })

            var config = {
                method: 'post',
                url: 'http://127.0.0.1:5000/api/v0/',
                headers: { 
                    'Content-Type': 'text/plain'
                },
                data : data
            };

            axios(config)
                .then(function (response) {
                    let c_id = response.data['c_id']
                    window.location.href = `http://localhost:3000/marketplace/${c_id}`
                })
                .catch(function (error) {
                console.log(error);
                });
        }
    }

    return (
        <div id="inputform">
            <div className="wrapper">
                <h2>Registration</h2>
                <div className='form'>
                    <div className="input-box">
                        <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="Camera" value={camera} onChange={(e) => setCamera(e.target.value)} />
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="Microphone" value={microphone} onChange={(e) => setMicrophone(e.target.value)} />
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="Lighting" value={lighting} onChange={(e) => setLighting(e.target.value)} />
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="Keyboard" value={keyboard} onChange={(e) => setKeyboard(e.target.value)} />
                    </div>
                    <div className="policy">
                        <input type="checkbox" />
                        <h3>I accept all <a href="./terms.html" target="_blank">terms & condition</a></h3>
                    </div>
                    <div className="input-box button">
                        <input type="Submit" value="Register Now" onClick={(e) => handleSubmit(e)}/>
                    </div>
                </div>
            </div>
        </div>
        
    );
  };
  