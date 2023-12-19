import React from "react";
import Link from "next/link";



export const AppBar: React.FC = () => {
    return (
        <header className="w-full top-0 left-0 fixed h-24 bg-white z-30">
            <div className="h-full w-2/3 m-auto">
                <div className="h-full w-full flex items-center justify-between">
                    <div>
                        Logo
                    </div>
                    <div className="gap-8 flex uppercase">
                        <Link href={"/"}>Accueil</Link>
                        <Link href={"/ceremony"}>Le mariage</Link>
                        <Link href={"/registry"}>Inscription</Link>
                        <Link href={"/rsvp"}>rsvp</Link>
                    </div>
                </div>
            </div>
        </header>
        );
};