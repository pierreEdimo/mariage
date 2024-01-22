import {AppBar} from "@/app/shared/appbar";
import {Footer} from "@/app/shared/footer";
import fond from "@/app/images/fond.jpg";
import flowerImage from "@/app/images/flower-mariage.jpg";
import React from "react";
import gravur from "@/app/images/gravur.jpg";
import {MessageBanner} from "@/app/shared/messageBanner";
import {InfoCard} from "@/app/shared/infoCard";
import {Formular} from "@/app/shared/formular";

export default function Home() {
    return (
        <main className="relative">
            <AppBar/>
            <section style={{
                backgroundImage: `url(${fond.src})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
            }} className="full-height w-full"></section>
            <section className="slanded-section negative-margin">
                <MessageBanner additionalClassName={"skw"}/>
            </section>
            <section style={{top: "-90px", zIndex: "-10"}}
                     className={"w-full standard-height bg-white relative overflow-hidden"}>
                <div style={{backgroundColor: "rgba(67, 64, 64, 0.7)",}} className={"w-full h-full absolute"}></div>
                <div style={{backgroundImage: `url(${flowerImage.src})`, backgroundSize: "cover"}}
                     className="w-full h-full">
                    <div className="m-auto w-2/3 py-24 h-full">
                        <div className="h-full w-full flex items-center justify-center flex-col gap-20">
                            <h1 className="text-4xl text-white font-bold z-10">Nous allons nous marier</h1>
                            <InfoCard/>
                        </div>
                    </div>
                </div>
            </section>
            <section
                style={{backgroundImage: `url(${gravur.src})`, top: "-90px", height: "800px", backgroundSize: 'cover'}} className="py-24 w-full standard-height relative">
                <div style={{backgroundColor: "rgba(250,240,230,0.5)", top: "0"}} className={"h-full w-full absolute"}></div>

                <div className="m-auto shadow-2xl p-6 bg-white card z-10 absolute flex items-center justify-center transform -translate-x-1/2  left-1/2">
                    <Formular/>
                </div>
            </section>
            <section style={{marginTop: "-180px", height: "400px"}} className="slanded-section  bg-white z-10">

            </section>
            <div className={"mt-10"} style={{height: "325px"}}>
                <Footer/>
            </div>
        </main>
    )
}
