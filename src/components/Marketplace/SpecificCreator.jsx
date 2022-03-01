import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL

export const SpecificCreator = (props) => {
    const params = useParams()
    const [data, setData] = useState({});
    useEffect(() => {
        var config = {
            method: 'get',
            url: `${BASE_URL}/creator_info/${params.id}`,
            headers: { 
                'Content-Type': 'text/plain'
            }
        };

        axios(config)
            .then(function (response) {
                console.log(response.data)
                setData(() => response.data);
            })
            .catch(function (error) {
            console.log(error);
            });
    }, [])

    return (
        <div style={{minHeight: '100vh',
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
        background:'#FFFF8A'
    }}>
        <div style={{display: 'flex',
        minWidth: '60%',
        minHeight: '80%',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'center',
        background: '#f4ffb8',
        padding: '12px 22px',
        borderRadius: '18px'}}>
            <h2>Content Creator: {data['name']}</h2>
            <div style={{display: 'block'}}>
                Specialities: {data.specialtyAreas}
            </div>
            

        </div>
    </div>
    );
}