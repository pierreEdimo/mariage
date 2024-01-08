import React from "react";
import Link from "next/link";
import "@/app/styles/appbar.css";


export const AppBar: React.FC = () => {
    return (
        <header className="w-full top-0 left-0 fixed h-24 bg-white">
            <div className="desktop-bar h-full w-2/3 m-auto">
                <div className="h-full w-full flex items-center justify-between">
                    <div className={"signature text-2xl"}>
                        Franklin & Vanessa
                    </div>
                    <div style={{letterSpacing: "1.5px"}} className="gap-8 flex uppercase">
                        <Link href={"/"}>Accueil</Link>
                        <Link href={"/ceremony"}>Le mariage</Link>
                        <Link href={"/rsvp"}>rsvp</Link>
                    </div>
                </div>
            </div>
            <div className={"mobile-bar h-full w-11/12 m-auto"}>
                <div className={"h-full w-full flex items-center justify-between"}>
                    <div className={"signature text-2xl"}>
                        Franklin & Vanessa
                    </div>
                    <button>
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