import React from "react";
import {NextPage} from "next";
import {AppBar} from "@/app/shared/appbar";
import {Footer} from "@/app/shared/footer";
import {Title} from "@/app/shared/title";
import flower from "@/app/images/flower.jpg";
import {Button} from "@/app/shared/button";
import Image from "next/image";
import foto1 from "@/app/images/foto1.jpg";
import room from "@/app/images/room.jpg";


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
            <section style={{height: "550px"}} className={"w-full bg-white"}>
                <div className="m-auto w-2/3 h-full flex flex-col relative items-center pt-24 gap-9">
                    <h1 className={"text-8xl font-bold"}>Franklin & Vanessa</h1>
                    <h2 className={"italic text-xl"}>24 August 2024</h2>
                    <div className={"absolute bottom-24"}>
                        <Button borderColor={"gray"}>
                            Savoir plus
                        </Button>
                    </div>
                </div>
            </section>
            <section className={"w-full bg-gray-100"}>
                <div style={{height: "550px"}} className=" m-auto w-2/3 relative flex items-center">
                    <div className="w-1/2 text-black">
                        <p className="text-2xl font-bold">Il a fait sa demande et elle a dit oui !!</p>
                        <br/>
                        <p>Phasellus a sapien tincidunt nunc dapibus mollis. Etiam ultricies bibendum sodales. Nulla
                            libero tortor, auctor at elit ut, pharetra placerat libero. Aenean gravida in libero sed
                            tincidunt. Nulla non mattis nisl, in imperdiet justo. Proin metus mauris, gravida vel ante
                            et, ornare laoreet libero sed ut quam vitae. Aenean aliquam augue turpis, in tempor elit
                            condimentum sit amet. Aenean aliquam augue turpis, in tempor elit condimentum sit amet.
                            Phasellus a sapien tincidunt nunc dapibus mollis. Etiam ultricies bibendum sodales.</p>
                    </div>
                    <div style={{width: "500px"}} className="image-height  bg-white p-8">
                        <Image objectFit={"cover"} style={{height: "100%", width: "100%"}} src={foto1}
                               alt={'Franklin & Vanessa'}/>
                    </div>
                </div>
            </section>
            <section className={"py-24"}>
                <div className="w-2/3 m-auto">
                    <div className="w-full flex ">
                        <div className="flex-1 flex items-center border-r-2 justify-center flex-col">
                            <p className="text-4xl font-bold">a</p>
                            <p className="text-3xl font-bold">Cérémonie</p>
                            <p>15:00 - 16:00</p>
                            <div className={"mt-8"}>
                                <Button borderColor={"gray"}>
                                    Savoir Plus
                                </Button>
                            </div>
                        </div>
                        <div className="flex-1 flex items-center justify-center flex-col">
                            <p className="text-4xl font-bold">h</p>
                            <p className="text-3xl font-bold">Photoshoot</p>
                            <p>17:00- 18:30</p>
                            <div className={"mt-8"}>
                                <Button borderColor={"gray"}>
                                    Savoir Plus
                                </Button>
                            </div>
                        </div>
                        <div className="flex-1 flex items-center justify-center flex-col border-l-2">
                            <p className="text-4xl font-bold">b</p>
                            <p className="text-3xl font-bold">Réception</p>
                            <p>19:00 - 01:00</p>
                            <div className={"mt-8"}>
                                <Button borderColor={"gray"}>
                                    Savoir Plus
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section style={{height: "900px"}} className={"w-full relative"}>
                <div style={{backgroundImage: `url(${room.src})`}} className={"w-full h-full bg-no-repeat bg-cover"}></div>
                <div className={"absolute right-0 top-0 w-1/2 bg-blue-800 h-full"}>
                    <div style={{width: "700px"}} className={"flex items-center justify-center bg-transparent p-12 h-full"}>
                        <div className="card-container text-white text-center">
                            <div className="card-container-inside">
                                <div className="card-container-content gap-20">
                                    <h1 className={"text-6xl font-bold"}>Menu</h1>
                                    <div className={"flex flex-col gap-8"}>
                                        <div>
                                            <h2 className={"uppercase text-2xl mb-2"}>entrées</h2>
                                            <p>Stacked yellow & ret tomatoes timbale,
                                                wrapped in a cucumber wheel, with parmesan crisp</p>
                                        </div>
                                        <hr className={"w-14 m-auto"}/>
                                        <div>
                                            <h2 className={"uppercase text-2xl mb-2"}>plats chauds</h2>
                                            <div>
                                                <h3 className={"uppercase text-xl"}>STUFFED GREEN CHICKEN BREASTS</h3>
                                                <p>with parmesano, spinach and red pepper emulsion &
                                                    potato gratin with garlic & craam.</p>
                                            </div>
                                            <br/>
                                            <div>
                                                <h3 className={"uppercase text-xl"}>STUFFED GREEN CHICKEN BREASTS</h3>
                                                <p>with parmesano, spinach and red pepper emulsion &
                                                    potato gratin with garlic & craam.</p>
                                            </div>
                                        </div>
                                        <hr className={"w-14 m-auto"} />
                                        <div>
                                            <h2 className={"uppercase text-2xl mb-2"}>desserts</h2>
                                            <p>Chocolate passion fruit bullee</p>
                                            <p> Tropical cake with mango</p>
                                            <p>Wedding cake</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section style={{height: "550px"}}>
                <div className={"h-full w-2/3 m-auto flex items-center justify-center flex-col gap-12"}>
                    <h1 className={"text-4xl font-bold"}>Serez vous present?</h1>
                    <div className={"w-96 text-xl text-center"}>
                        <p>Veuillez confirmer votre présence
                            au plus tard le 24 juillet.</p>
                    </div>
                    <Button borderColor={"gray"}>
                        RSVP
                    </Button>
                </div>
            </section>
            <Footer backgroundColor={"rgb(243 244 246 / 1)"}/>
        </main>
    )
}

export default Ceremony;