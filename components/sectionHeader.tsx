/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

export default function sectionHeader() {
    return (

        <div className=" absolute left-24 top-0 h-19 w-19">

            <div>
                <div>
                    <Link href="/works">WORKS</Link>
                </div>
                <div>
                    <Link href="/works">COVERS</Link>
                </div>
                <div>
                    <Link href="/works">ABOUT</Link>
                </div>
                <div>
                    <Link href="/works">CONTACT</Link>
                </div>
            </div>
            <div>
                {/* <div className="-1.5">
                    <img alt="logo"
                        src="img/KHIRkhalid.svg"
                        width={200} />
                </div> */}
            </div>
        </div>


    )
}
