import React from "react";


export const Footer: React.FC = () => {
    return (
        <footer className={"w-full p-8"}>
            <div className={"text-center mb-8"}>
                <h2 className={"text-2xl font-bold"}>Liens Rapides</h2>
            </div>
            <div className={"w-2/3 m-auto flex items-center justify-center flex-col gap-4"}>
                <a>Notre Histoire</a>
                <a>Les Details du Mariage</a>
                <a>Enregistrement des Cadeaux</a>
                <a>RSVP</a>
            </div>
        </footer>
    );
}