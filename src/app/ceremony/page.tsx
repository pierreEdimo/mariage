import React from "react";
import {NextPage} from "next";
import {AppBar} from "@/app/shared/appbar";
import {Footer} from "@/app/shared/footer";
import {Title} from "@/app/shared/title";
import flower from "@/app/images/flower.jpg";
import {Button} from "@/app/shared/button";
import Image from "next/image";
import foto1 from "@/app/images/foto1.jpg";
import gravur from "@/app/images/gravur.jpg";
import golden from "@/app/images/golden-flower.png";

const Ceremony: NextPage = () => {
    return (
        <main className={"relative"}>
            <AppBar/>
            <section style={{backgroundColor: "red", height: "400px", zIndex: "-10", top: "-85px"}}
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
                    <Title text={"La Ceremonie"}/>
                </div>
            </section>
            <section style={{height: "600px", top: "-125px", zIndex: "-100"}} className={"w-full  relative "}>
                <div style={{backgroundImage: `url(${golden.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: "calc(100% + 125px)"}} className={"absolute w-full"}></div>
                <div className="m-auto w-2/3 h-full flex flex-col relative items-center justify-center pt-24 gap-9">
                    <h1 className={"text-8xl font-bold"}>Franklin & Vanessa</h1>
                    <h2 className={"italic text-xl"}>24 August 2024</h2>
                </div>
            </section>
            <section className={"w-full bg-gray-100"}>
                <div style={{height: "550px"}} className=" m-auto w-2/3 relative flex items-center">
                    <div className="w-1/2 text-black">
                        <p className="text-2xl font-bold">Il a fait sa demande et elle a dit oui !!</p>
                        <br/>
                        <p>
                            Assurément décrété dans les cieux avant que nos mères nous eussent conçu, rien sauf Dieu ne
                            l&apos;aurait empêché.

                            Le temps lui même à attendu avec impatience ce jour, qui est la.

                            Notre mariage marquera en réalité le triomphe de l&apos;union de notre amour indomptable et de
                            l&apos;amour inconditionnel du Seigneur Jesus pour nous.

                            Waouhhh!, une toute nouvelle vie pour s&apos;aimer passionnément et pour L&apos;aimer avec reverance.
                        </p>
                    </div>
                    <div style={{width: "500px"}} className="image-height  bg-white p-8">
                        <Image objectFit={"cover"} style={{height: "100%", width: "100%"}} src={foto1}
                               alt={'Franklin & Vanessa'}/>
                    </div>
                </div>
            </section>
            <section className={"relative"} style={{backgroundImage: `url(${gravur.src})`, height: "550px", backgroundSize: 'cover'}}>
                <div style={{backgroundColor: 'rgba(250,240,230,0.5)'}} className={"absolute w-full h-full"}></div>
                <div className={"h-full w-2/3 m-auto flex items-center justify-center flex-col gap-12"}>
                    <h1 style={{zIndex: "10"}} className={"text-4xl font-bold"}>Serez vous present?</h1>
                    <div style={{zIndex: "10"}} className={"w-96 text-xl text-center"}>
                        <p>Veuillez confirmer votre présence
                            au plus tard le 24 juillet.</p>
                    </div>
                    <div style={{zIndex: "10"}}>
                        <Button borderColor={"gray"}>
                            RSVP
                        </Button>
                    </div>
                </div>
            </section>
            <div className={"mt-10"} style={{height: "325px"}}>
                <Footer/>
            </div>
        </main>
    )
}

export default Ceremony;