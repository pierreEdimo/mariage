import {AppBar} from "@/app/shared/appbar";
import {Footer} from "@/app/shared/footer";
import Image from "next/image";
import fond from "@/app/images/fond.jpg";
import foto1 from "@/app/images/foto1.jpg";
import flowerImage from "@/app/images/flower-mariage.jpg";
import React from "react";
import {Button} from "@/app/shared/button";
import gravur from "@/app/images/gravur.jpg";

export default function Home() {
    return (
        <main className="relative">
            <AppBar/>
            <section className="full-height w-full bg-gray-500">
                <Image objectFit={"cover"} style={{width: "100%", height: "auto"}} src={fond}
                       alt={"Franklin & Vanessa"}/>
            </section>
            <section className="slanded-section negative-margin">
                <div className="content-height m-auto w-2/3 flex items-center  skw">
                    <div style={{width: "40%"}} className=" text-black ml-10">
                        <p className="text-2xl font-bold">Il a fait sa demande et elle a dit oui !!</p>
                        <br/>
                        <p>Assurément décrété dans les cieux avant que nos mères nous eussent conçu, rien sauf Dieu ne
                            l&apos;aurait empêché.

                            Le temps lui même à attendu avec impatience ce jour, qui est la.

                            Notre mariage marquera en réalité le triomphe de l&apos;union de notre amour indomptable et
                            de l&apos;amour inconditionnel du Seigneur Jesus pour nous.

                            Waouhhh!, une toute nouvelle vie pour s&apos;aimer passionnément et pour L&apos;aimer avec
                            reverance.</p>
                    </div>
                    <div style={{width: "40%"}} className="image-height  negative-margin bg-white p-8">
                        <Image objectFit={"cover"} style={{height: "100%", width: "100%"}} src={foto1}
                               alt={'Franklin & Vanessa'}/>
                    </div>
                </div>
            </section>
            <section  style={{top: "-90px", zIndex: "-10"}}
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
                                            <div className="flex flex-col gap-2 p-2">
                                                <p className="text-center"><span
                                                    className="font-bold text-3xl">Franklin</span> & <span
                                                    className="font-bold text-3xl">Vanessa</span></p>
                                                <p className="text-center">demandent l&apos;honneur de votre présence à
                                                    leur
                                                    cérémonie de mariage
                                                </p>
                                            </div>
                                            <div className="text-center">
                                                <p className="font-bold text-2xl">September 22, 2022</p>
                                                <p>at 03:00 pm</p>
                                            </div>
                                            <div className="text-center">
                                                <p>At Birchwood Church</p>
                                                <p>4181 Birchwood Ave Seal Beach, CA</p>
                                                <p>Reception to follow</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section style={{backgroundImage:`url(${gravur.src})`,  top: "-90px", height: "800px", backgroundSize: 'cover'}} className="py-24 w-full standard-height relative">
                <div style={{backgroundColor: "rgba(250,240,230,0.5)", top: "0"}} className={"h-full w-full absolute"}></div>
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
