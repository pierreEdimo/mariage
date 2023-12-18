import React from "react";

type titleProps = {
    text: string
}

export const Title: React.FC<titleProps> = ({text}) => {
    return (
        <h1 className={"text-center text-4xl font-bold"}>
            {text}
        </h1>
    )
}