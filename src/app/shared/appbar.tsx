"use client";

import React from "react";
import Link from "next/link";
import "@/app/styles/appbar.css";
import {SideNav} from "@/app/shared/sideNav";
import {useRecoilState} from "recoil";
import {sidenavState} from "@/app/state/sidenav.state";


export const AppBar: React.FC = () => {
    const [isOpen, setOpen] = useRecoilState(sidenavState);

    const openNav = () => {
        setOpen(true);
    }
    return (
        <header className="w-full top-0 left-0 fixed h-24 bg-white">
            <SideNav status={isOpen}/>
            <div className="desktop-bar h-full w-2/3 m-auto">
                <div className="h-full w-full flex items-center justify-between">
                    <Link href={"/"} className={"signature text-2xl"}>
                        Franklin & Vanessa
                    </Link>
                    <div style={{letterSpacing: "1.5px"}} className="gap-8 flex uppercase">
                        <Link href={"/"}>Accueil</Link>
                        <Link href={"/ceremony"}>Le mariage</Link>
                        <Link href={"/rsvp"}>rsvp</Link>
                    </div>
                </div>
            </div>
            <div className={"mobile-bar h-full w-11/12 m-auto"}>
                <div className={"h-full w-full flex items-center justify-between"}>
                    <Link href={"/"} className={"signature text-2xl"}>
                        Franklin & Vanessa
                    </Link>
                    <button onClick={openNav}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5"/>
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};