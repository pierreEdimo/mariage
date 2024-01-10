import React from "react";
import {NextPage} from "next";
import {AppBar} from "@/app/shared/appbar";
import {Footer} from "@/app/shared/footer";
import {Title} from "@/app/shared/title";
import flower from "@/app/images/flower.jpg";
import {Button} from "@/app/shared/button";
import gravur2 from "@/app/images/gravur.jpg";
import {Formular} from "@/app/shared/formular";


const RSVP: NextPage = () => {
    return (
        <main className={"relative"}>
            <AppBar/>
            <section style={{height: "400px", top: "-85px"}}
                     className={"w-full slanded-section relative overflow-hidden"}>
                <div style={{
                    backgroundImage: `url(${flower.src})`,
                    boxSizing: "border-box",
                    height: "500px",
                    backgroundSize: "cover"
                }} className={" w-full absolute top-0 left-0  skw"}>
                    <div style={{backgroundColor: "rgba(67, 64, 64, 0.7)",}} className={"w-full h-full absolute"}></div>
                </div>
                <div className={"h-full w-1/3 m-auto pt-24 flex items-center  justify-center skw"}>
                    <Title text={"RSVP"}/>
                </div>
            </section>
            <section style={{
                backgroundImage: `url(${gravur2.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                top: "-125px"
            }} className={"w-full relative py-24"}>
                <div style={{backgroundColor: 'rgba(250,240,230,0.5)', top: "-125px", height: "calc(100% + 125px)"}}
                     className={"absolute w-full"}></div>
                <div className={"w-2/3 m-auto flex items-center justify-center flex-col gap-2"}>
                    <div style={{zIndex: "10"}} className={"text-center"}>
                        <p className={"font-bold text-2xl mb-5"}>Nous sommes ravis de célébrer avec vous !</p>
                        <p style={{letterSpacing: "1.5px"}} className={"uppercase mb-5"}>Veuillez répondre avant le 01 Avril 2024.</p>
                    </div>
                    <div>
                        <div
                            className="shadow-2xl p-6 bg-white card z-10  flex items-center justify-center transform">
                            <Formular/>
                        </div>
                    </div>
                </div>
            </section>
            <div style={{top: "-125px"}} className={"relative "}>
                <div className={"absolute w-full mt-10"} style={{height: "calc(200px + 125px)"}}>
                    <Footer/>
                </div>
            </div>
        </main>
    )
}

export default RSVP