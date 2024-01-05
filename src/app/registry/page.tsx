import React from "react";
import {NextPage} from "next";
import {AppBar} from "@/app/shared/appbar";
import {Footer} from "@/app/shared/footer";
import {Title} from "@/app/shared/title";
import flower from "@/app/images/flower.jpg";


const Registry: NextPage = () => {
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
                    <Title text={"L'Inscription"}/>
                </div>
            </section>
            <section style={{height: "auto"}} className={"w-full py-24"}>
                <div className={"w-2/3 m-auto h-full"}>
                    <div className={"flex gap-4 h-full"}>
                        <div className={"w-1/2 h-full flex flex-col gap-6"}>
                            <h1 className={"text-4xl font-bold"}>Aidez-nous à organiser le mariage de nos rêves.</h1>
                            <p className={"text-xl"}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius ante libero, amet as
                                sollicitudin elit malesuada et. Nulla facilisi. Pellentesque magna diam, mattis gravida
                                eget, lobortis ut velit. Nam interdum hendrerit nisl et malesuada. In varius ante
                                libero, amet as sollicitudin elit malesuada et.
                            </p>
                            <p className={"signature font-bold text-xl text-center"}>Franklin & Vanessa</p>
                        </div>
                        <div className={"w-1/2 flex flex-col justify-between h-full gap-4"}>
                            <div className={"w-full"}>
                                <div className={"w-full flex justify-between"}>
                                    <h1>Decoration</h1>
                                    <p>55%</p>
                                </div>
                                <progress style={{width: "100%"}}></progress>
                            </div>
                            <div className={"w-full"}>
                                <div className={"w-full flex justify-between"}>
                                    <h1>Decoration</h1>
                                    <p>55%</p>
                                </div>
                                <progress style={{width: "100%"}}></progress>
                            </div>
                            <div className={"w-full"}>
                                <div className={"w-full flex justify-between"}>
                                    <h1>Decoration</h1>
                                    <p>55%</p>
                                </div>
                                <progress style={{width: "100%"}}></progress>
                            </div>
                            <div className={"w-full"}>
                                <div className={"w-full flex justify-between"}>
                                    <h1>Decoration</h1>
                                    <p>55%</p>
                                </div>
                                <progress style={{width: "100%"}}></progress>
                            </div>
                            <div className={"w-full"}>
                                <div className={"w-full flex justify-between"}>
                                    <h1>Decoration</h1>
                                    <p>55%</p>
                                </div>
                                <progress style={{width: "100%"}}></progress>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </main>
    )
}


export default Registry