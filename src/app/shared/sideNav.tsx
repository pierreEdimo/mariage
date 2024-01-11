"use client";

import * as React from 'react';
import "@/app/styles/sideNav.css";
import Link from "next/link";
import {useRecoilState} from "recoil";
import {sidenavState} from "@/app/state/sidenav.state";

export type Props = {
    status: boolean;
}

export const SideNav: React.FC<Props> = ({status}) => {
    const [,setOpen] = useRecoilState(sidenavState);

    const closeNav = () => {
        setOpen(false);
    }
    return (
        <div id={"sideNav-container"} style={{width: "100vw", height: "100vh"}} className={`fixed sideNav  bg-white ${status ? "block": "hidden"}`}>
            <div className={"w-full h-16 pt-4 pr-16 flex items-center justify-end"}>
                <button onClick={closeNav}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
                    </svg>
                </button>
            </div>
            <div style={{letterSpacing: "1.5px"}}
                 className={"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex uppercase flex-col gap-4 text-center"}>
                <Link onClick={closeNav} href={"/"}>Accueil</Link>
                <Link onClick={closeNav} href={"/ceremony"}>Le mariage</Link>
                <Link onClick={closeNav} href={"/rsvp"}>rsvp</Link>
            </div>
        </div>
    )
}