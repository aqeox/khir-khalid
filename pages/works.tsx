/* eslint-disable @next/next/no-img-element */
import React from 'react'
import SectionHeader from "../components/sectionHeader";
import Header from './header';


export default function works() {
    return (
        <div>
            <SectionHeader />
            <div className="flex flex-col justify-center items-center p-10">
                <Header />

                <div className="flex flex-col justify-center items-center p-10">
                    <img src="./work/work1.png" alt="work1" />
                    <img src="./work/work2.png" alt="work2" />
                    <img src="./work/work3.png" alt="work3" />
                    <img src="./work/work4.png" alt="work4" />
                    <img src="./work/work5.png" alt="work5" />


                </div></div>
        </div >
    )
}
