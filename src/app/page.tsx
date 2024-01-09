import {AppBar} from "@/app/shared/appbar";
import {Footer} from "@/app/shared/footer";
import Image from "next/image";
import fond from "@/app/images/fond.jpg";
import foto1 from "@/app/images/foto1.jpg";
import flowerImage from "@/app/images/flower-mariage.jpg";
import React from "react";
import {Button} from "@/app/shared/button";
import gravur from "@/app/images/gravur.jpg";
import {MessageBanner} from "@/app/shared/messageBanner";

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
                            <div className="custom-container z-10">
                                <div className="inside-container">
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
                        </div>
                    </div>
                </div>
            </section>
            <section
                style={{backgroundImage: `url(${gravur.src})`, top: "-90px", height: "800px", backgroundSize: 'cover'}}
                className="py-24 w-full standard-height relative">
                <div style={{backgroundColor: "rgba(250,240,230,0.5)", top: "0"}}
                     className={"h-full w-full absolute"}></div>
                <div
                    className="m-auto shadow-2xl p-6 bg-white card z-10 absolute flex items-center justify-center transform -translate-x-1/2  left-1/2">
                    <div className="card-container">
                        <div className="card-container-inside">
                            <form className="card-container-content">
                                <div className="mb-8">
                                    <p className="text-4xl font-bold">Serez-vous présent ?</p>
                                </div>
                                <div className="flex flex-col gap-4 w-full">
                                    <input type="text" placeholder="Votre Nom:*"/>
                                    <input type="email" placeholder="Votre E-mail:*"/>
                                    <div className="flex justify-between">
                                        <label>
                                            <input type="radio" name="attendance"/>
                                            Oui, je serai présent
                                        </label>
                                        <label>
                                            <input type="radio" name="attendance"/>
                                            Désolé, je ne peux pas.
                                        </label>
                                    </div>
                                    <select>
                                        <option value="" disabled selected>Nombre d&apos;invités</option>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                    </select>
                                    <div>
                                        <p>Meal Preferences</p>
                                        <div className="flex flex-col">
                                            <label>
                                                <input type={"checkbox"}/>
                                                Viande
                                            </label>
                                            <label>
                                                <input type={"checkbox"}/>
                                                Poisson
                                            </label>
                                            <label>
                                                <input type={"checkbox"}/>
                                                Végétarien
                                            </label>
                                            <label>
                                                <input type={"checkbox"}/>
                                                Sans Gluten
                                            </label>
                                        </div>
                                    </div>
                                    <textarea rows={6} placeholder={"Message"}></textarea>
                                </div>
                                <div className={"mt-10"}>
                                    <Button borderColor={"#d3d3d3"}>
                                        Envoyer
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
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
