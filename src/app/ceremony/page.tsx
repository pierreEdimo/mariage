import React from "react";
import {NextPage} from "next";
import {AppBar} from "@/app/shared/appbar";
import {Footer} from "@/app/shared/footer";
import {Title} from "@/app/shared/title";
import flower from "@/app/images/flower.jpg";


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
            <section style={{height: "600px"}} className={"w-full  bg-blue-800"}>

            </section>
            <Footer/>
        </main>
    )
}

export default Ceremony;