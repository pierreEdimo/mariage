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
                            className="flex-1 transparent-color flex items-center flex-col justify-center top-border gap-12 text-white">

                        </div>
                    </div>
                </div>
            </div>
            <div id={"mobile-info"} className={"mobile mobile-custom-container border flex items-center justify-center"}>
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
                            className="flex-1 transparent-color flex items-center flex-col justify-center top-border gap-12 text-white">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}