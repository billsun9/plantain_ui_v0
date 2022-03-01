import { useState, useEffect, useRef } from 'react'
import { GalleryView } from './GalleryView'
import { Image } from '../image'
export const Marketplace = (props) => {
    const [query, setQuery] = useState('');
    return (
        <div id='marketplace' className='text-center'>
            <div className='container'>
                <div className='section-title' style={{marginTop: '6vh'}}>
                    <h2>Marketplace</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
                    dapibus leonec. Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
                    dapibus leonec. Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
                    dapibus leonec.
                    </p>
                </div>

                <div className='row'>
                    <div className='row'>
                        <div className="input-group" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <div className="form-outline">
                                <input type="search" id="form1" required
                                className="form-control" placeholder='Your favorite creator...' 
                                value={query} onChange={(e) => setQuery(e.target.value)}/>
                            </div>
                            <button type="button" className="btn btn-primary" onClick={() => {
                                if(query) console.log(query);
                            }}>
                                Search
                            </button>
                        </div>
                    </div>
                    <GalleryView data={props.data} />
                </div>
                <a href={`/marketplace/${query}`}>hello</a>
            </div>
        </div>
    )
  }
  