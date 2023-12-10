import React from "react";



export const AppBar: React.FC = () => {
    return (
        <header className="w-full top-0 left-0 fixed h-24 bg-white z-30">
            <div className="h-full w-2/3 m-auto">
                <div className="h-full w-full flex items-center justify-between">
                    <div>
                        Logo
                    </div>
                    <div className="gap-8 flex">
                        <a>HOME</a>
                        <a>THE WEDDING</a>
                        <a>REGISTRY</a>
                        <a>RSVP</a>
                    </div>
                </div>
            </div>
        </header>
        );
};