import React from 'react'
import { Link } from 'react-router-dom';
import { stores } from './StoreInformation';
import './Location.css';

 function Location() {
    return (
        <>
            <div className='location'>
                <div className='fade'>
                <div className='listinglocations'>
                    <h2>Choose your location:</h2>
                    <ul className='listedlocations'>
                        {stores.map((item, index) => {
                            return (
                                <li>
                                <button key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        <div className='text'>{item.city}</div>
                                    </Link>
                                </button>
                                </li>
                            )
                        })}

                    </ul>
                </div>
                </div>

            </div>
        </>
    )
}

export default Location