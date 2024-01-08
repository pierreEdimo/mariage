import React from "react";

type titleProps = {
    text: string
}

export const Title: React.FC<titleProps> = ({text}) => {
    return (
        <h1 className={"pageTitle text-center text-4xl"}>
            {text}
        </h1>
    )
}