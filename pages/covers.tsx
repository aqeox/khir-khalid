/* eslint-disable @next/next/no-img-element */
import React from 'react'

import { coverImages } from '../utils/coverImages';


export default function works() {
    const images = coverImages();
    return (

        <div className=''>
            { images.map((name, index) => (
                <img src={name} key={index} width={600} className="m-auto my-10"/>
            ))}
        </div>
    )
}
