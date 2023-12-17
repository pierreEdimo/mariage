import React from "react";
import "../styles/button.css";

type buttonProps = {
    children: React.ReactNode,
    width?: string,
    height?: string,
    insideWidth?: string,
    insideHeith?: string,
    borderColor?: string
}

export const Button: React.FC<buttonProps> = ({children, height, width, insideWidth, insideHeith, borderColor}) => {
    return (
        <button style={{ width: width, height: height, borderColor: borderColor}} className={"buttonContainer"}>
            <div style={{width: insideWidth, height: insideHeith, borderColor: borderColor}} className={"buttonInsideContainer uppercase"}>
                    {children}
            </div>
        </button>
    )
}