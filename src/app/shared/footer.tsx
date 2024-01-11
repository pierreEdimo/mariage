import React from "react";
import Link from "next/link";


export type Props = {
    backgroundColor?: string
}

export const Footer: React.FC<Props> = ({backgroundColor}) => {
    return (
        <footer style={{backgroundColor: backgroundColor ? backgroundColor : 'white'}}
                className={"w-full h-full p-8 flex items-center flex-col justify-center"}>
            <div className={"text-center mb-8"}>
                <h2 className={"text-2xl font-bold"}>Liens Rapides</h2>
            </div>
            <div className={"w-2/3 m-auto flex items-center justify-center flex-col gap-4"}>
                <Link href={"/ceremony"}>Les Details du Mariage</Link>
                <Link href={"/rsvp"}>RSVP</Link>
            </div>
        </footer>
    );
}