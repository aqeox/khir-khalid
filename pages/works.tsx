import React from 'react'
import { workImages } from '../utils/coverImages'

export default function works() {

    const images = workImages();

    return (
        <div className=''>
            { images.map((name, index) => (
                <img src={name} key={index} width={600} className="m-auto my-10"/>
            ))}
        </div>
    )
}
