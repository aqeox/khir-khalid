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
                    <img src="./covers/covers1.png" alt="cover1" />
                    <img src="./covers/covers2.png" alt="cover2" />
                    <img src="./covers/covers3.png" alt="cover3" />
                    <img src="./covers/covers4.png" alt="cover4" />
                    <img src="./covers/covers5.png" alt="cover5" />
                    <img src="./covers/covers6.png" alt="cover6" />
                    <img src="./covers/covers7.png" alt="cover7" />
                    <img src="./covers/covers8.png" alt="cover8" />
                    <img src="./covers/covers9.png" alt="cover9" />
                    <img src="./covers/covers10.png" alt="cover10" />
                    <img src="./covers/covers11.png" alt="cover11" />

                    <div className="grid grid-cols-10 gap-4 mt-2">
                    </div>
                </div>
            </div></div>


    )
}
