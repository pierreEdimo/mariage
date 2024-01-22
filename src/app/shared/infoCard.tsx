import * as React from 'react';
import '@/app/styles/infoCard.css';

export const InfoCard = () => {
    return (
        <div className={"z-10"}>
            <div className="desktop custom-container border flex items-center justify-center">
                <div className="inside-container border flex items-center justify-center">
                    <div className="container-content flex">
                        <div
                            className="flex-1 flex items-center flex-col justify-center bg-transparent text-white">
                            <p className="font-bold text-6xl">Reserver</p>
                            <p className="text-xl">La</p>
                            <p className="font-bold text-6xl">Date</p>
                        </div>
                        <div
                            className="flex-1 transparent-color flex items-center flex-col justify-center px-2 top-border gap-8 text-white">
                            <div className={"text-center"}>
                                <h1 className={"text-2xl font-bold"}>Franklin & Vanessa</h1>
                                <p>
                                    demandent l&apos;honneur de votre présence le jour de leur mariage
                                </p>
                            </div>
                            <div className={"text-center"}>
                                <h2 className={"italic text-xl"}>Le 17 Mai 2024</h2>
                                <p>12h30</p>
                                <p>a l&apos;Ambassade du Cameroun</p>
                                <p className={"font-bold"}>Ulmenallee 32, 14050 Berlin</p>
                            </div>
                            <div className={"text-center"}>
                                <h2 className={"italic text-xl"}>Le 18 Mai 2024</h2>
                                <p>13h00</p>
                                <p className={"font-bold"}>Mühlenstraße 5, 36137 Grossenlüder</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id={"mobile-info"}
                 className={"mobile mobile-custom-container border flex items-center justify-center"}>
                <div style={{width: 'calc(100% - 40px)'}}
                     className={"border flex items-center justify-center mobile-inside-container"}>
                    <div className="mobile-container-content flex">
                        <div
                            className="flex-1 flex items-center flex-col justify-center bg-transparent text-white">
                            <p className="font-bold text-6xl">Reserver</p>
                            <p className="text-xl">La</p>
                            <p className="font-bold text-6xl">Date</p>
                        </div>
                        <div
                            className="flex-1 transparent-color flex items-center flex-col justify-center top-border gap-8 text-white">
                            <div className={"text-center"}>
                                <h1 className={"text-2xl font-bold"}>Franklin & Vanessa</h1>
                                <p>
                                    demandent l&apos;honneur de votre présence le jour de leur mariage
                                </p>
                            </div>
                            <div className={"text-center"}>
                                <h2 className={"italic text-xl"}>Le 17 Mai 2024</h2>
                                <p>12h30</p>
                                <p>a l&apos;Ambassade du Cameroun</p>
                                <p className={"font-bold"}>Ulmenallee 32, 14050 Berlin</p>
                            </div>
                            <div className={"text-center"}>
                                <h2 className={"italic text-xl"}>Le 18 Mai 2024</h2>
                                <p>13h00</p>
                                <p className={"font-bold"}>Mühlenstraße 5, 36137 Grossenlüder</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}