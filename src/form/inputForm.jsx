import { useState } from 'react';

var axios = require('axios');

const BASE_URL = process.env.REACT_APP_BASE_URL

export const InputForm = (props) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [channel, setChannel] = useState("");
    const [tiktok, setTikTok] = useState("");
    const [twitter, setTwitter] = useState("");
    const [specialtyAreas, setSpecialtyAreas] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name === '' || email === '') alert("enter name and email");
        else if((channel === '' && tiktok === '' && twitter === '')) alert("enter content platform");
        else if((specialtyAreas === '')) alert("enter specialty areas");
        else {
            var data = JSON.stringify({
                "name": name, 
                "email": email,
                "channel": channel,
                "tiktok": tiktok,
                "twitter": twitter,
                "specialtyAreas": specialtyAreas
            })

            var config = {
                method: 'post',
                url: `${BASE_URL}`,
                headers: { 
                    'Content-Type': 'text/plain'
                },
                data : data
            };
            console.log(`sending post request to ${BASE_URL}`)
            axios(config)
                .then(function (response) {
                    let c_id = response.data['c_id']
                    // window.location.href = `http://localhost:3000/marketplace/${c_id}`
                    window.location.href = `http://localhost:3000/marketplace`
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
                        <input type="text" placeholder="YouTube Profile" value={channel} onChange={(e) => setChannel(e.target.value)} />
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="TikTok Profile" value={tiktok} onChange={(e) => setTikTok(e.target.value)} />
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="Twitter Handle" value={twitter} onChange={(e) => setTwitter(e.target.value)} />
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="Specialty Areas" value={specialtyAreas} onChange={(e) => setSpecialtyAreas(e.target.value)} />
                    </div>
                    <div className="policy">
                        <input type="checkbox" />
                        <h3>I accept all <a href="/terms" target="_blank">terms & condition</a></h3>
                    </div>
                    <div className="input-box button">
                        <input type="Submit" value="Register Now" onClick={(e) => handleSubmit(e)}/>
                    </div>
                </div>
            </div>
        </div>
    );
  };
  