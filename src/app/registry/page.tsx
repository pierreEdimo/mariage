
import React from "react";
import {NextPage} from "next";
import {AppBar} from "@/app/shared/appbar";
import {Footer} from "@/app/shared/footer";
import {Title} from "@/app/shared/title";


const Registry: NextPage = () => {
    return (
        <main className={"relative"}>
            <AppBar/>
            <section style={{backgroundColor: "red", height: "400px"}}
                     className={"w-full slanded-section negative-margin"}>
                <div className={"h-full w-full pt-24 flex items-center justify-center skw"}>
                    <Title text={"Inscription"}/>
                </div>
            </section>
            <section style={{height: "600px"}} className={"w-full  bg-blue-800"}>

            </section>
            <Footer/>
        </main>
    )
}


export default Registry