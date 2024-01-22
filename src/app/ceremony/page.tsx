import React from "react";
import {NextPage} from "next";
import {AppBar} from "@/app/shared/appbar";
import {Footer} from "@/app/shared/footer";
import {Title} from "@/app/shared/title";
import flower from "@/app/images/flower.jpg";
import {Button} from "@/app/shared/button";
import gravur from "@/app/images/gravur.jpg";
import golden from "@/app/images/golden-flower.png";
import {MessageBanner} from "@/app/shared/messageBanner";
import Link from "next/link";

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
                    <h1 className={"text-6xl text-center font-bold"}>Franklin & Vanessa</h1>
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
            </section>
            <section className={"w-full bg-gray-100"}>
                <MessageBanner/>
            </section>
            <section className={"relative"}
                     style={{backgroundImage: `url(${gravur.src})`, height: "550px", backgroundSize: 'cover'}}>
                <div style={{backgroundColor: 'rgba(250,240,230,0.5)'}} className={"absolute w-full h-full"}></div>
                <div className={"h-full w-2/3 m-auto flex items-center justify-center flex-col gap-12"}>
                    <h1 style={{zIndex: "10"}} className={"text-4xl text-center font-bold"}>Serez vous present?</h1>
                    <div style={{zIndex: "10"}} className={"text-width text-center"}>
                        <p>Veuillez confirmer votre présence
                            au plus tard le 01 Avril 2024.</p>
                    </div>
                    <div style={{zIndex: "10"}}>
                        <Link href={"/rsvp"}>
                            <Button borderColor={"gray"}>
                                RSVP
                            </Button>
                        </Link>
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