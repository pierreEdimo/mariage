import React from "react";
import Image from "next/image";
import foto1 from "@/app/images/foto1.jpg";
import '@/app/styles/messageBanner.css';

export type Props = {
    additionalClassName?: string;
}

export const MessageBanner: React.FC<Props> = ({additionalClassName}) => {
    return (
        <div>
            <div id={"desktopBanner"} style={{height: "550px"}}
                 className={`m-auto w-2/3 relative flex items-center justify-between ${additionalClassName}`}>
                <div className="w-1/2 text-black">
                    <p className="text-2xl font-bold">Il a fait sa demande et elle a dit oui !!</p>
                    <br/>
                    <p>
                        Assurément décrété dans les cieux avant que nos mères nous eussent conçu, rien sauf Dieu ne
                        l&apos;aurait empêché.

                        Le temps lui même à attendu avec impatience ce jour, qui est la.

                        Notre mariage marquera en réalité le triomphe de l&apos;union de notre amour indomptable et de
                        l&apos;amour inconditionnel du Seigneur Jesus pour nous.

                        Waouhhh!, une toute nouvelle vie pour s&apos;aimer passionnément et pour L&apos;aimer avec
                        reverance.
                    </p>
                </div>
                <div className="image-height image-banner bg-white p-8">
                    <div style={{
                        backgroundImage: `url(${foto1.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        width: "100%",
                        height: "100%",
                        backgroundRepeat: 'no-repeat'
                    }}></div>
                </div>
            </div>
            <div id={"mobileBanner"}
                 className={`m-auto w-11/12 relative flex items-center justify-between ${additionalClassName}`}>
                <div id={"mobileBanner-col-1"} className="w-1/2 text-black">
                    <p className="text-2xl font-bold">Il a fait sa demande et elle a dit oui !!</p>
                    <br/>
                    <p>
                        Assurément décrété dans les cieux avant que nos mères nous eussent conçu, rien sauf Dieu ne
                        l&apos;aurait empêché.

                        Le temps lui même à attendu avec impatience ce jour, qui est la.

                        Notre mariage marquera en réalité le triomphe de l&apos;union de notre amour indomptable et de
                        l&apos;amour inconditionnel du Seigneur Jesus pour nous.

                        Waouhhh!, une toute nouvelle vie pour s&apos;aimer passionnément et pour L&apos;aimer avec
                        reverance.
                    </p>
                </div>
                <div id={"mobileBanner-col-2"}  className="image-height image-banner  bg-white p-8">
                    <div style={{
                        backgroundImage: `url(${foto1.src})`,
                        backgroundSize: 'cover',
                        width: '100%',
                        height: '100%',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'
                    }}></div>
                </div>
            </div>
        </div>
    );
}