import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL

export const SpecificCreator = (props) => {
    const params = useParams()
    const [data, setData] = useState("");
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
                setData(() => JSON.stringify(response.data));
            })
            .catch(function (error) {
            console.log(error);
            });
    }, [])

    return (
        <div>
            You are on a page with data: {data}
        </div>
    )
}