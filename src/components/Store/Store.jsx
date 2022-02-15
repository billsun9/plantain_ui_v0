import { useState, useEffect, useRef } from 'react'
import { GalleryView } from './GalleryView'
import { Image } from '../image'
export const Store = (props) => {

    return (
        // <div id='marketplace' className='text-center'>
        //     <div className='container'>
        //         <div className='col-md-10 col-md-offset-1 section-title'>
        //             <h2>Marketplace</h2>
        //         </div>
        //         <div className='row'></div>
                // <div className='row'>
                //     <div class="input-group" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                //         <div class="form-outline">
                //             <input type="search" id="form1" class="form-control" placeholder='Your favorite creator...' />
                //         </div>
                //         <button type="button" class="btn btn-primary">
                //             Search
                //         </button>
                //     </div>
                // </div>
        //         <Gallery data={data}/>
        //     </div>
        // </div>

        <div id='store' className='text-center'>
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
                        <div class="input-group" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <div class="form-outline">
                                <input type="search" id="form1" class="form-control" placeholder='Your favorite creator...' />
                            </div>
                            <button type="button" class="btn btn-primary">
                                Search
                            </button>
                        </div>
                    </div>
                    <div className='portfolio-items'>
                    {props.data
                        ? props.data.map((d, i) => (
                        <div key={`${d.title}-${i}`} className='col-sm-6 col-md-4 col-lg-4'>
                            <Image title={d.title} largeImage={d.largeImage} smallImage={d.smallImage} />
                        </div>
                        ))
                        : 'Loading...'}
                    </div>
                </div>
            </div>
        </div>
    )
  }
  
