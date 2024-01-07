import React from "react";
import {NextPage} from "next";
import {AppBar} from "@/app/shared/appbar";
import {Footer} from "@/app/shared/footer";
import {Title} from "@/app/shared/title";
import flower from "@/app/images/flower.jpg";
import {Button} from "@/app/shared/button";
import gravur2 from "@/app/images/gravur.jpg";


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
                <div className={"w-2/3 m-auto flex items-center gap-2"}>
                    <div style={{zIndex: "10"}} className={"w-1/2"}>
                        <h1 className={"font-bold text-4xl mb-8"}>Nous allons nous marier !</h1>
                        <div className={"flex flex-col text-xl gap-2"}>
                            <p>
                                Assurément décrété dans les cieux avant que nos mères nous eussent conçu, rien sauf Dieu
                                ne l&apos;aurait empêché.

                                Le temps lui même à attendu avec impatience ce jour, qui est la.

                                Notre mariage marquera en réalité le triomphe de l&apos;union de notre amour indomptable et
                                de l&apos;amour inconditionnel du Seigneur Jesus pour nous.

                                Waouhhh!, une toute nouvelle vie pour s&apos;aimer passionnément et pour L&apos;aimer avec
                                reverance.
                            </p>
                        </div>
                        <hr className={"my-20"}/>
                        <div className={"w-80 m-auto italic text-xl"}>
                            <p className={"text-center"}>
                                Veuillez confirmer votre présence
                                au plus tard le 24 juillet
                            </p>
                        </div>
                        <hr className={"my-20"}/>
                        <div className={"text-center m-auto"}>
                            <p>Telephone: <a>+49 178 00000</a></p>
                            <p>E-mail: <a>test@yahoo.fr</a></p>
                        </div>
                    </div>
                    <div className={"w-1/2 ml-16"}>
                        <div
                            className="shadow-2xl p-6 bg-white card z-10  flex items-center justify-center transform">
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